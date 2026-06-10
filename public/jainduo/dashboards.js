const concepts = [
  ["Ahimsa", "Nonviolence or non-harm in thought, speech, and action."],
  ["Aparigraha", "Non-attachment or non-possessiveness; reducing grasping and excess."],
  ["Anekantavada", "Many-sidedness; reality can be understood from multiple standpoints."],
  ["Tirthankara", "A liberated teacher who establishes a path across worldly existence."],
  ["Karma", "Subtle matter that binds to the soul through actions, intentions, and passions."],
  ["Samvara and nirjara", "Stopping new karmic influx and shedding existing karma."],
  ["Jiva and ajiva", "Living soul and non-soul categories in Jain philosophy."],
  ["Syadvada", "Qualified predication: speaking from a certain standpoint."],
  ["Moksha", "Liberation from karmic bondage and rebirth."]
];

const rewards = [
  { id: "skin-leaf", type: "skin", name: "Leaf robe", cost: 0, color: "#7DB5A0" },
  { id: "hat-none", type: "hat", name: "No hat", cost: 0, symbol: "" },
  { id: "hat-lotus", type: "hat", name: "Lotus cap", cost: 18, symbol: "LOTUS" },
  { id: "skin-sage", type: "skin", name: "Sage robe", cost: 28, color: "#7DB5A0" },
  { id: "skin-teal", type: "skin", name: "Deep teal robe", cost: 42, color: "#1D4E5F" },
  { id: "hat-scholar", type: "hat", name: "Scholar wrap", cost: 48, symbol: "BOOK" },
  { id: "skin-gold", type: "skin", name: "Saffron robe", cost: 64, color: "#D6883A" },
  { id: "hat-vow", type: "hat", name: "Vow badge", cost: 72, symbol: "VOW" },
  { id: "skin-lotus", type: "skin", name: "Lotus robe", cost: 90, color: "#8B3A62" },
  { id: "hat-crown", type: "hat", name: "Master crown", cost: 110, symbol: "STAR" }
];

export function renderReviewView(ctx) {
  const lessons = ctx.getLessons();
  const results = ctx.state.progress.results;
  const completedIds = ctx.state.progress.completedLessons;

  // Real weak areas come from lessons the learner actually practiced and missed,
  // not from lessons they have not started yet.
  const weakAreas = lessons
    .map((lesson) => {
      const record = results[lesson.id];
      if (!record || !record.attempts) return null;
      const accuracy = Math.round((record.correct / record.attempts) * 100);
      return { lesson, accuracy, misses: Math.max(0, record.attempts - record.correct) };
    })
    .filter((item) => item && item.misses > 0)
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 3);

  const learned = lessons
    .filter((lesson) => completedIds.includes(lesson.id))
    .slice(-4)
    .reverse();

  const weakHtml = weakAreas.length
    ? weakAreas.map(({ lesson, accuracy, misses }) => `
        <article class="info-card weak-card">
          <div class="weak-card-top">
            <p class="eyebrow">Strengthen</p>
            <span class="accuracy-pill">${accuracy}% correct</span>
          </div>
          <h3>${lesson.title}</h3>
          <p>${lesson.summary}</p>
          <button class="small-btn" type="button" data-review="${lesson.id}">Practice ${misses} missed idea${misses === 1 ? "" : "s"}</button>
        </article>
      `).join("")
    : `
        <article class="info-card review-empty">
          <div class="review-empty-mark" aria-hidden="true">&#10003;</div>
          <div>
            <p class="eyebrow">All clear</p>
            <h3>Nothing to repair yet</h3>
            <p>Answer practice questions inside a lesson. Any idea you miss is gathered here so you can strengthen it later.</p>
          </div>
          <button class="small-btn" type="button" data-review="${ctx.getFirstAvailableLesson().id}">Start a lesson</button>
        </article>
      `;

  const learnedHtml = learned.map((lesson) => `
    <article class="info-card">
      <p class="eyebrow">Learned concept</p>
      <h3>${lesson.concept}</h3>
      <p>${lesson.teaching.map((card) => card.term).join(", ")}</p>
      <button class="small-btn" type="button" data-review="${lesson.id}">Relearn</button>
    </article>
  `).join("");

  ctx.els.review.innerHTML = weakHtml + learnedHtml;

  ctx.els.review.querySelectorAll("[data-review]").forEach((button) => {
    button.addEventListener("click", () => {
      ctx.setView("learn");
      ctx.startLesson(button.dataset.review);
    });
  });
}

export function renderLibraryView(ctx) {
  const taughtTerms = new Set(ctx.getLessons()
    .filter((lesson) => ctx.state.progress.completedLessons.includes(lesson.id))
    .flatMap((lesson) => lesson.teaching.map((card) => card.term)));
  ctx.els.library.innerHTML = concepts.map(([term, meaning]) => `
    <article class="info-card">
      <p class="eyebrow">${taughtTerms.has(term) ? "Learned" : "Upcoming"}</p>
      <h3>${term}</h3>
      <p>${meaning}</p>
    </article>
  `).join("");
}

function ensureProgressStars(ctx) {
  const panel = ctx.els.progress.closest(".content-panel");
  if (!panel || panel.querySelector(".progress-stars")) return;
  const layer = document.createElement("div");
  layer.className = "progress-stars";
  layer.setAttribute("aria-hidden", "true");
  let dots = "";
  for (let i = 0; i < 120; i += 1) {
    const top = (Math.random() * 100).toFixed(2);
    const left = (Math.random() * 100).toFixed(2);
    const size = (Math.random() * 2 + 1).toFixed(2);
    const delay = (Math.random() * 6).toFixed(2);
    const duration = (Math.random() * 3.5 + 2.5).toFixed(2);
    dots += `<span class="p-star" style="top:${top}%;left:${left}%;width:${size}px;height:${size}px;animation-delay:${delay}s;animation-duration:${duration}s"></span>`;
  }
  layer.innerHTML = dots;
  panel.insertBefore(layer, panel.firstChild);
}

export function renderProgressView(ctx) {
  ensureProgressStars(ctx);
  const lessons = ctx.getLessons();
  const complete = ctx.state.progress.completedLessons.length;
  const percent = Math.round((complete / lessons.length) * 100);
  const owned = new Set(ctx.state.progress.ownedRewards);
  const equippedSkin = rewards.find((reward) => reward.id === ctx.state.progress.equipped.skin) || rewards[0];
  const equippedHat = rewards.find((reward) => reward.id === ctx.state.progress.equipped.hat) || rewards[1];
  const profileName = ctx.state.progress.profileName || "Learner";
  const level = ctx.getLearnerLevel();
  ctx.els.progress.innerHTML = `
    <article class="info-card avatar-card">
      <div class="avatar-preview" style="--avatar-color: ${equippedSkin.color || "#3f8f5b"}">
        <div class="avatar-hat">${equippedHat.symbol}</div>
        <div class="avatar-face">${getInitials(profileName)}</div>
      </div>
      <div>
        <p class="eyebrow">Avatar</p>
        <h3>${profileName}'s avatar</h3>
        <p>${equippedSkin.name} with ${equippedHat.name}. Earn coins from lessons and choices, then redeem more styles below.</p>
        <form class="avatar-name-form" id="avatarNameForm">
          <label for="avatarNameInput">Avatar name</label>
          <div>
            <input id="avatarNameInput" maxlength="24" value="${escapeAttr(ctx.state.progress.profileName)}" placeholder="Your name" />
            <button class="small-btn" type="submit">Save</button>
          </div>
        </form>
      </div>
    </article>
    <article class="info-card level-card">
      <p class="eyebrow">Learner level</p>
      <h3>Level ${level.level}: ${level.name}</h3>
      <p>${level.remaining ? `${level.remaining} XP until the next level.` : "All learner levels are unlocked."} You have ${ctx.state.progress.coins} coins to spend.</p>
      <div class="meter" role="progressbar" aria-label="Learner level progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${level.progress}"><span style="--value: ${level.progress}%"></span></div>
    </article>
    <article class="info-card">
      <h3>Course completion</h3>
      <p>${complete} of ${lessons.length} playable levels complete. Each level includes teaching cards before practice.</p>
      <div class="meter" role="progressbar" aria-label="Course completion" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}"><span style="--value: ${percent}%"></span></div>
    </article>
    <article class="info-card">
      <h3>Next curriculum goal</h3>
      <p>${ctx.getFirstAvailableLesson().objectives.join(" ")}</p>
    </article>
    <section class="reward-shop" aria-label="Avatar rewards">
      <div class="shop-heading">
        <div>
          <p class="eyebrow">Coin rewards</p>
          <h3>Redeem avatar skins and hats</h3>
        </div>
        <strong>${ctx.state.progress.coins} coins</strong>
      </div>
      <div class="reward-grid">
        ${rewards.map((reward) => renderReward(reward, owned, ctx.state.progress)).join("")}
      </div>
    </section>
  `;
  document.getElementById("avatarNameForm").addEventListener("submit", (event) => {
    event.preventDefault();
    ctx.setProfileName(document.getElementById("avatarNameInput").value);
    renderProgressView(ctx);
  });
  ctx.els.progress.querySelectorAll("[data-reward]").forEach((button) => {
    button.addEventListener("click", () => handleRewardClick(button.dataset.reward, ctx));
  });
}

function renderReward(reward, owned, progress) {
  const canRedeem = progress.coins >= reward.cost;
  const isOwned = owned.has(reward.id);
  const isEquipped = progress.equipped[reward.type] === reward.id;
  const action = isEquipped ? "Equipped" : isOwned ? "Equip" : canRedeem ? "Redeem" : `${reward.cost} coins`;
  return `
    <article class="reward-card ${isEquipped ? "is-equipped" : ""}">
      <div class="reward-swatch" style="--reward-color: ${reward.color || "#fffaf0"}">${reward.symbol || ""}</div>
      <div>
        <p class="eyebrow">${reward.type}</p>
        <h4>${reward.name}</h4>
        <p>${reward.cost ? `${reward.cost} coins required` : "Starter item"}</p>
      </div>
      <button class="small-btn" type="button" data-reward="${reward.id}" ${(!canRedeem && !isOwned) || isEquipped ? "disabled" : ""}>${action}</button>
    </article>
  `;
}

function handleRewardClick(rewardId, ctx) {
  const reward = rewards.find((item) => item.id === rewardId);
  if (!reward) return;
  if (!ctx.state.progress.ownedRewards.includes(reward.id)) {
    if (ctx.state.progress.coins < reward.cost) return;
    ctx.state.progress.coins -= reward.cost;
    ctx.state.progress.ownedRewards.push(reward.id);
  }
  ctx.state.progress.equipped[reward.type] = reward.id;
  ctx.saveProgress();
  ctx.renderStats();
  renderProgressView(ctx);
}

function getInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("") || "L";
}

function escapeAttr(value) {
  return String(value || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}
