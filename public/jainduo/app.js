import { course } from "./course.js";
import { renderLibraryView, renderProgressView, renderReviewView } from "./dashboards.js";
import { getDefaultProgress, loadProgress, saveProgress } from "./storage.js";

(function () {
  const levelNames = [
    "Seeker",
    "Listener",
    "Practitioner",
    "Vow Builder",
    "Karma Cleaner",
    "Many-Sided Thinker",
    "Compassion Keeper",
    "Path Guide"
  ];

  const journeyChoices = [
    {
      id: "street-wallet",
      title: "Life choice",
      prompt: "You find money on the street. What will you do?",
      virtue: "Asteya",
      options: [
        { label: "Find the owner", result: "Honesty reduced harm and strengthened non-stealing.", xp: 8, coins: 6 },
        { label: "Leave it visible", result: "You avoided taking it, but did not fully protect the owner.", xp: 4, coins: 2 },
        { label: "Keep it", result: "A quick gain made the soul feel heavier.", xp: 0, coins: 0 }
      ]
    },
    {
      id: "group-chat",
      title: "Compassionate choice",
      prompt: "A friend is mocked in a group chat. What response fits ahimsa?",
      virtue: "Ahimsa",
      options: [
        { label: "Redirect kindly", result: "Careful speech protected dignity without adding heat.", xp: 8, coins: 6 },
        { label: "Stay silent", result: "You avoided harsh words, but missed a chance to reduce harm.", xp: 3, coins: 2 },
        { label: "Mock back", result: "Retaliation kept the harm moving.", xp: 0, coins: 0 }
      ]
    },
    {
      id: "new-phone",
      title: "Attachment choice",
      prompt: "You want the newest phone even though yours works. What supports aparigraha?",
      virtue: "Aparigraha",
      options: [
        { label: "Pause and repair", result: "You loosened attachment and saved resources.", xp: 8, coins: 6 },
        { label: "Buy used", result: "A moderate choice reduced excess.", xp: 5, coins: 3 },
        { label: "Upgrade instantly", result: "The craving stayed in charge.", xp: 0, coins: 0 }
      ]
    }
  ];

  const state = {
    progress: loadProgress(getLessons()),
    currentLessonId: null,
    phase: "teach",
    teachingIndex: 0,
    exerciseIndex: 0,
    selected: null,
    selectedSet: new Set(),
    matched: {},
    ordered: [],
    lastCompletionReward: null,
    guideLessonActive: false,
    guideRead: new Set()
  };

  const els = {
    path: document.getElementById("coursePath"),
    guide: document.getElementById("guideRoot"),
    pathPanel: document.getElementById("pathPanel"),
    pathBackdrop: document.getElementById("pathBackdrop"),
    pathToggle: document.getElementById("pathToggle"),
    pathClose: document.getElementById("pathCloseButton"),
    lesson: document.getElementById("lessonRoot"),
    review: document.getElementById("reviewRoot"),
    library: document.getElementById("libraryRoot"),
    progress: document.getElementById("progressRoot"),
    xp: document.getElementById("xpValue"),
    coins: document.getElementById("coinValue"),
    level: document.getElementById("levelValue"),
    levelName: document.getElementById("levelName"),
    levelProgressText: document.getElementById("levelProgressText"),
    levelFill: document.getElementById("levelFill"),
    streak: document.getElementById("streakValue"),
    accuracy: document.getElementById("accuracyValue"),
    journey: document.getElementById("journeyRoot"),
    resume: document.getElementById("resumeButton"),
    reset: document.getElementById("resetButton"),
    landingNameForm: document.getElementById("landingNameForm"),
    landingNameInput: document.getElementById("landingNameInput"),
    welcomeName: document.getElementById("welcomeName"),
    brandSubtitle: document.getElementById("brandSubtitle"),
    live: document.getElementById("liveRegion"),
    unitBadge: document.getElementById("unitBadge")
  };

  function init() {
    state.currentLessonId = getFirstAvailableLesson().id;
    bindShell();
    render();
    setView("learn");
  }

  function bindShell() {
    document.querySelectorAll("[data-view]").forEach((button) => {
      button.addEventListener("click", () => setView(button.dataset.view));
    });
    els.resume.addEventListener("click", () => {
      saveLandingName();
      setView("learn");
      startLesson(getFirstAvailableLesson().id);
    });
    els.landingNameForm.addEventListener("submit", (event) => {
      event.preventDefault();
      saveLandingName();
      renderProgressView(getDashboardContext());
    });
    if (els.pathToggle) els.pathToggle.addEventListener("click", () => setPathOpen(!document.body.classList.contains("path-open")));
    if (els.pathClose) els.pathClose.addEventListener("click", () => setPathOpen(false));
    if (els.pathBackdrop) els.pathBackdrop.addEventListener("click", () => setPathOpen(false));
    els.reset.addEventListener("click", () => {
      if (confirm("Reset all local progress for AnuravtGo?")) {
        state.progress = getDefaultProgress(getLessons());
        saveProgressState();
        state.currentLessonId = getFirstAvailableLesson().id;
        state.phase = "teach";
        state.teachingIndex = 0;
        state.exerciseIndex = 0;
        state.guideLessonActive = false;
        state.guideRead = new Set();
        setView("learn");
        render();
      }
    });
  }

  function setPathOpen(open) {
    document.body.classList.toggle("path-open", open);
    if (els.pathToggle) els.pathToggle.setAttribute("aria-expanded", String(open));
    if (els.pathBackdrop) els.pathBackdrop.hidden = !open;
  }

  function shouldShowGuide() {
    return !state.progress.onboarded && !state.guideLessonActive;
  }

  function setView(view) {
    document.body.classList.toggle("is-home", view === "home");
    if (view !== "learn") setPathOpen(false);
    document.querySelectorAll("[data-panel]").forEach((panel) => {
      panel.hidden = panel.dataset.panel !== view;
    });
    document.querySelectorAll("[data-view]").forEach((button) => {
      const active = button.dataset.view === view;
      button.classList.toggle("is-active", active);
      if (active) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
    if (view === "review") renderReviewView(getDashboardContext());
    if (view === "library") renderLibraryView(getDashboardContext());
    if (view === "progress") renderProgressView(getDashboardContext());
  }

  function render() {
    renderStats();
    syncLandingName();
    renderPath();
    renderJourney();
    renderLesson();
    renderReviewView(getDashboardContext());
    renderLibraryView(getDashboardContext());
    renderProgressView(getDashboardContext());
  }

  function renderStats() {
    const attempts = Object.values(state.progress.results).reduce((sum, result) => sum + result.attempts, 0);
    const correct = Object.values(state.progress.results).reduce((sum, result) => sum + result.correct, 0);
    const level = getLearnerLevel();
    els.xp.textContent = String(state.progress.xp);
    els.coins.textContent = String(state.progress.coins);
    els.level.textContent = String(level.level);
    els.levelName.textContent = level.name;
    els.levelProgressText.textContent = level.remaining
      ? `${level.remaining} XP to Level ${level.level + 1}`
      : "Master path unlocked";
    els.levelFill.style.setProperty("--value", `${level.progress}%`);
    els.levelFill.parentElement.setAttribute("aria-valuenow", String(level.progress));
    els.streak.textContent = String(state.progress.streak);
    els.accuracy.textContent = attempts ? `${Math.round((correct / attempts) * 100)}%` : "0%";
  }

  function renderProfile() {
    const name = state.progress.profileName;
    els.welcomeName.textContent = name ? `, ${name}` : "";
    if (els.brandSubtitle) els.brandSubtitle.textContent = name || "Jainism lessons";
  }

  function syncLandingName() {
    els.landingNameInput.value = state.progress.profileName;
    renderProfile();
  }

  function saveLandingName() {
    if (!els.landingNameInput.value.trim()) return;
    setProfileName(els.landingNameInput.value);
  }

  function setProfileName(value) {
    state.progress.profileName = cleanName(value);
    saveProgressState();
    renderProfile();
  }

  function renderPath() {
    els.path.innerHTML = "";
    getLessons().forEach((lesson, index) => {
      const unlocked = isLessonUnlocked(lesson.id);
      const complete = state.progress.completedLessons.includes(lesson.id);
      const current = state.currentLessonId === lesson.id;
      const button = document.createElement("button");
      button.type = "button";
      button.className = `lesson-node ${complete ? "is-complete" : ""} ${current ? "is-current" : ""} ${unlocked ? "" : "is-locked"}`;
      button.disabled = !unlocked;
      if (current) button.setAttribute("aria-current", "step");
      button.innerHTML = `
        <span class="node-orb">${complete ? "Done" : unlocked ? index + 1 : "Lock"}</span>
        <span class="node-card">
          <span class="node-kicker">Level ${index + 1} - ${getUnitTitle(lesson.id)}</span>
          <strong>${lesson.title}</strong>
          <span>${lesson.level} - ${lesson.summary}</span>
        </span>
      `;
      button.addEventListener("click", () => { setPathOpen(false); startLesson(lesson.id); });
      els.path.appendChild(button);
    });
    const currentUnit = course.findIndex((unit) => unit.lessons.some((lesson) => lesson.id === state.currentLessonId)) + 1;
    els.unitBadge.textContent = `Unit ${Math.max(currentUnit, 1)}`;
  }

  function renderJourney() {
    const scenario = getCurrentJourneyChoice();
    const decision = state.progress.decisions[scenario.id];
    const awarded = decision ? scenario.options[decision.optionIndex] : null;
    els.journey.innerHTML = `
      <div class="journey-scene" aria-hidden="true">
        <span></span>
        <i></i>
      </div>
      <div class="journey-copy">
        <p class="eyebrow">${scenario.title} - ${scenario.virtue}</p>
        <h2>Path to Moksha</h2>
        <p>${scenario.prompt}</p>
        ${awarded ? `<div class="feedback is-good"><strong>${awarded.label}</strong><span>${awarded.result}</span></div>` : ""}
      </div>
      <div class="journey-options">
        ${scenario.options.map((option, index) => `
          <button class="${decision?.optionIndex === index ? "primary-btn" : "secondary-btn"}" type="button" data-journey-option="${index}" ${decision ? "disabled" : ""}>
            ${option.label}
          </button>
        `).join("")}
        <small>${decision ? `Earned +${awarded.xp} XP and +${awarded.coins} coins. New choices rotate as lessons advance.` : "Choose once to earn bonus XP and coins."}</small>
      </div>
    `;
    els.journey.querySelectorAll("[data-journey-option]").forEach((button) => {
      button.addEventListener("click", () => chooseJourneyOption(Number(button.dataset.journeyOption)));
    });
  }

  function renderGuide(root) {
    const firstLesson = getLessons()[0];
    const step1Done = state.progress.completedLessons.includes(firstLesson.id);
    if (!state.guideRead) state.guideRead = new Set();

    const steps = [
      { key: "level", label: "Start your first level", cta: "Start your first level", desc: "Learn one core idea, then answer a few quick questions to lock it in. Wrong answers just turn red — you keep trying until it clicks." },
      { key: "review", label: "Review what you miss", desc: "The Review tab quietly collects any question you get wrong, so you can come back and strengthen weak spots later." },
      { key: "library", label: "Open the Library", desc: "Every Jain concept lives in the Library — a calm reference you can browse anytime, even before you reach that lesson." },
      { key: "progress", label: "Track your Progress", desc: "Earn XP and coins as you learn, climb learner levels, and spend coins on avatar styles on your starry Progress page." },
      { key: "climb", label: "Keep climbing the path", desc: "Finishing a level unlocks the next one. Tap the “☰ Levels” button at the top any time to jump around the whole course." }
    ];

    const canFinish = step1Done;
    const intro = state.progress.profileName ? `Welcome, ${state.progress.profileName}` : "Welcome";

    root.innerHTML = `
      <div class="guide">
        <header class="guide-head">
          <p class="eyebrow">${intro}</p>
          <h2>Your first climb</h2>
          <p class="guide-sub">Take it one step at a time. Start with your first level, then we’ll show you around the app. Each step lights up as you finish it.</p>
        </header>
        <ol class="staircase">
          ${steps.map((step, index) => renderGuideStep(step, index, step1Done)).join("")}
        </ol>
        <div class="guide-actions">
          <button class="primary-btn" id="guideDoneButton" type="button" ${canFinish ? "" : "disabled"}>
            ${canFinish ? "Done with the steps" : "Finish your first level to continue"}
          </button>
        </div>
      </div>
    `;

    const startBtn = root.querySelector("#guideStartLevel");
    if (startBtn) startBtn.addEventListener("click", () => {
      state.guideLessonActive = true;
      startLesson(firstLesson.id);
    });

    root.querySelectorAll("[data-guide-step]").forEach((stepButton) => {
      stepButton.addEventListener("click", () => {
        const key = stepButton.dataset.guideStep;
        if (state.guideRead.has(key)) state.guideRead.delete(key);
        else state.guideRead.add(key);
        renderGuide(root);
      });
    });

    const doneBtn = root.querySelector("#guideDoneButton");
    if (doneBtn) doneBtn.addEventListener("click", () => {
      state.progress.onboarded = true;
      saveProgressState();
      state.guideLessonActive = false;
      state.currentLessonId = getFirstAvailableLesson().id;
      state.phase = "teach";
      state.teachingIndex = 0;
      state.exerciseIndex = 0;
      setView("learn");
      renderLesson();
      renderStats();
      renderPath();
    });
  }

  function renderGuideStep(step, index, step1Done) {
    if (index === 0) {
      const done = step1Done;
      return `
        <li class="stair ${done ? "is-done" : "is-active"}" style="--stair: ${index};">
          <div class="stair-orb">${done ? "✓" : index + 1}</div>
          <div class="stair-card">
            <p class="eyebrow">Step ${index + 1}</p>
            <h3>${step.label}</h3>
            <p>${step.desc}</p>
            <button class="primary-btn" id="guideStartLevel" type="button">${done ? "Replay first level" : step.cta}</button>
          </div>
        </li>
      `;
    }
    const locked = !step1Done;
    const read = state.guideRead.has(step.key);
    return `
      <li class="stair ${read ? "is-done" : ""} ${locked ? "is-locked" : ""}" style="--stair: ${index};">
        <div class="stair-orb">${read ? "✓" : index + 1}</div>
        <button class="stair-card stair-toggle" type="button" data-guide-step="${step.key}" ${locked ? "disabled" : ""} aria-expanded="${read}">
          <p class="eyebrow">Step ${index + 1}</p>
          <h3>${step.label}</h3>
          ${read ? `<p>${step.desc}</p>` : `<span class="stair-hint">${locked ? "Finish your first level to unlock" : "Tap to read"}</span>`}
        </button>
      </li>
    `;
  }

  function renderLesson() {
    document.body.classList.toggle("guide-active", shouldShowGuide());
    if (shouldShowGuide()) {
      if (els.guide) renderGuide(els.guide);
      els.lesson.innerHTML = "";
      return;
    }
    if (els.guide) els.guide.innerHTML = "";
    resetInteractionState();
    const lesson = getLesson(state.currentLessonId);
    if (!lesson) return;
    if (state.phase === "teach") {
      renderTeaching(lesson);
      return;
    }
    const exercise = lesson.exercises[state.exerciseIndex];
    if (!exercise) {
      renderCompletion(lesson);
      return;
    }

    const totalSteps = lesson.teaching.length + lesson.exercises.length;
    const currentStep = lesson.teaching.length + state.exerciseIndex;
    const progress = Math.round((currentStep / totalSteps) * 100);
    els.lesson.innerHTML = `
      <article class="exercise-card">
        <div class="progress-bar" role="progressbar" aria-label="Lesson progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}" aria-valuetext="Practice ${state.exerciseIndex + 1} of ${lesson.exercises.length}">
          <div class="progress-fill" style="--progress: ${progress}%"></div>
        </div>
        <div class="lesson-head">
          <div class="lesson-head-top">
            <span class="lesson-tag is-practice">Practice</span>
            <span class="lesson-stepcount">Question ${state.exerciseIndex + 1} of ${lesson.exercises.length}</span>
          </div>
          <h2>${lesson.title}</h2>
          <p class="lesson-lead">${lesson.summary}</p>
          <div class="lesson-meta">
            <span class="meta-pill">${lesson.level}</span>
            <span class="meta-pill">${lesson.concept}</span>
          </div>
        </div>
        <div class="question">
          <h3>${exercise.prompt}</h3>
          ${exercise.hint ? `<p>${exercise.hint}</p>` : ""}
        </div>
        <div id="exerciseBody"></div>
        <div id="feedback" class="feedback">Choose an answer, then check it.</div>
        <div class="lesson-actions">
          <button class="secondary-btn" id="skipButton" type="button">Skip</button>
          <button class="primary-btn" id="checkButton" type="button">Check</button>
        </div>
      </article>
    `;
    renderExerciseBody(exercise);
    document.getElementById("checkButton").addEventListener("click", checkAnswer);
    document.getElementById("skipButton").addEventListener("click", nextExercise);
  }

  function renderTeaching(lesson) {
    const card = lesson.teaching[state.teachingIndex];
    const totalSteps = lesson.teaching.length + lesson.exercises.length;
    const progress = Math.round((state.teachingIndex / totalSteps) * 100);
    const finalTeachCard = state.teachingIndex === lesson.teaching.length - 1;
    els.lesson.innerHTML = `
      <article class="exercise-card">
        <div class="progress-bar" role="progressbar" aria-label="Lesson progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}" aria-valuetext="Teaching card ${state.teachingIndex + 1} of ${lesson.teaching.length}">
          <div class="progress-fill" style="--progress: ${progress}%"></div>
        </div>
        <div class="lesson-head">
          <div class="lesson-head-top">
            <span class="lesson-tag">Learn</span>
            <span class="lesson-stepcount">Card ${state.teachingIndex + 1} of ${lesson.teaching.length}</span>
          </div>
          <h2>${lesson.title}</h2>
          <p class="lesson-lead">${lesson.summary}</p>
          <div class="lesson-meta">
            <span class="meta-pill">${lesson.level}</span>
            <span class="meta-pill">${lesson.concept}</span>
          </div>
        </div>
        ${state.teachingIndex === 0 ? renderObjectives(lesson) : ""}
        <section class="teach-card">
          <p class="eyebrow">${card.term}</p>
          <h3>${card.title}</h3>
          <p>${card.body}</p>
          <div class="model-box">
            <strong>Example</strong>
            <span>${card.example}</span>
          </div>
        </section>
        ${finalTeachCard ? renderMisconceptions(lesson) : ""}
        <div class="lesson-actions">
          <button class="secondary-btn" id="backTeachButton" type="button" ${state.teachingIndex === 0 ? "disabled" : ""}>Back</button>
          <button class="primary-btn" id="nextTeachButton" type="button">${finalTeachCard ? "Start practice" : "Continue"}</button>
        </div>
      </article>
    `;
    document.getElementById("backTeachButton").addEventListener("click", () => {
      state.teachingIndex = Math.max(0, state.teachingIndex - 1);
      renderLesson();
    });
    document.getElementById("nextTeachButton").addEventListener("click", () => {
      if (finalTeachCard) {
        state.phase = "practice";
        state.exerciseIndex = 0;
      } else {
        state.teachingIndex += 1;
      }
      renderLesson();
    });
  }

  function renderObjectives(lesson) {
    return `<section class="objective-list"><h3>In this lesson</h3><ul>${lesson.objectives.map((item) => `<li>${item}</li>`).join("")}</ul></section>`;
  }

  function renderMisconceptions(lesson) {
    return `<section class="misconception-list"><h3>Do not mix this up</h3><ul>${lesson.misconceptions.map((item) => `<li>${item}</li>`).join("")}</ul></section>`;
  }

  function renderExerciseBody(exercise) {
    const body = document.getElementById("exerciseBody");
    if (exercise.type === "choice" || exercise.type === "trueFalse") {
      const options = exercise.type === "trueFalse" ? ["True", "False"] : exercise.options;
      body.innerHTML = `<div class="choices">${options.map((option) => `<button class="choice" type="button" aria-pressed="false">${option}</button>`).join("")}</div>`;
      body.querySelectorAll(".choice").forEach((button) => {
        button.addEventListener("click", () => {
          clearAnswerFeedback();
          state.selected = button.textContent;
          body.querySelectorAll(".choice").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
        });
      });
    }

    if (exercise.type === "select") {
      body.innerHTML = `<div class="chips">${exercise.options.map((option) => `<button class="chip" type="button" aria-pressed="false">${option}</button>`).join("")}</div>`;
      body.querySelectorAll(".chip").forEach((button) => {
        button.addEventListener("click", () => {
          clearAnswerFeedback();
          const value = button.textContent;
          if (state.selectedSet.has(value)) state.selectedSet.delete(value);
          else state.selectedSet.add(value);
          button.setAttribute("aria-pressed", String(state.selectedSet.has(value)));
        });
      });
    }

    if (exercise.type === "fill") {
      body.innerHTML = `<label class="sr-only" for="textAnswer">Answer</label><input class="text-answer" id="textAnswer" autocomplete="off" />`;
    }

    if (exercise.type === "match") {
      const terms = exercise.pairs.map((pair) => pair[0]);
      const definitions = exercise.pairs.map((pair) => pair[1]).sort();
      body.innerHTML = `
        <div class="match-board">
          <div class="match-column" aria-label="Terms">${terms.map((term) => `<button class="chip" type="button" data-term="${term}" aria-pressed="false">${term}</button>`).join("")}</div>
          <div class="match-column" aria-label="Meanings">${definitions.map((definition) => `<button class="chip" type="button" data-definition="${definition}" aria-pressed="false">${definition}</button>`).join("")}</div>
        </div>
      `;
      let activeTerm = null;
      body.querySelectorAll("[data-term]").forEach((button) => {
        button.addEventListener("click", () => {
          activeTerm = button.dataset.term;
          body.querySelectorAll("[data-term]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
        });
      });
      body.querySelectorAll("[data-definition]").forEach((button) => {
        button.addEventListener("click", () => {
          if (!activeTerm) return;
          state.matched[activeTerm] = button.dataset.definition;
          button.classList.add("is-matched");
          button.textContent = `${button.dataset.definition} -> ${activeTerm}`;
          activeTerm = null;
          body.querySelectorAll("[data-term]").forEach((item) => item.setAttribute("aria-pressed", "false"));
        });
      });
    }

    if (exercise.type === "order") {
      state.ordered = [];
      const shuffled = [...exercise.items].reverse();
      body.innerHTML = `
        <p class="eyebrow">Tap items in order</p>
        <div class="chips">${shuffled.map((item) => `<button class="chip" type="button">${item}</button>`).join("")}</div>
        <ol id="orderList" class="sort-list"></ol>
      `;
      const list = document.getElementById("orderList");
      body.querySelectorAll(".chip").forEach((button) => {
        button.addEventListener("click", () => {
          if (state.ordered.includes(button.textContent)) return;
          state.ordered.push(button.textContent);
          button.disabled = true;
          list.innerHTML = state.ordered.map((item) => `<li>${item}</li>`).join("");
        });
      });
    }

    if (exercise.type === "reflection") {
      body.innerHTML = `<label class="sr-only" for="reflectionAnswer">Reflection</label><textarea class="text-answer" id="reflectionAnswer" rows="5" placeholder="Write two or three sentences."></textarea>`;
    }
  }

  function checkAnswer() {
    const lesson = getLesson(state.currentLessonId);
    const exercise = lesson.exercises[state.exerciseIndex];
    const result = grade(exercise);
    const feedback = document.getElementById("feedback");
    const card = document.querySelector(".exercise-card");

    markChoiceStates(exercise, result.correct);

    if (card) {
      card.classList.remove("is-correct", "is-wrong");
      card.classList.add(result.correct ? "is-correct" : "is-wrong");
    }
    feedback.classList.toggle("is-good", result.correct);
    feedback.classList.toggle("is-bad", !result.correct);
    feedback.innerHTML = `<strong>${result.correct ? "✓ Correct!" : "✗ Not quite — try again"}</strong><span>${exercise.explain || (result.correct ? "Well reasoned." : "Re-read the prompt and give it another go.")}</span>`;
    els.live.textContent = `${result.correct ? "Correct." : "Try again."} ${exercise.explain || ""}`;
    recordResult(lesson.id, result.correct);

    const checkButton = document.getElementById("checkButton");
    if (result.correct) {
      checkButton.textContent = "Continue";
      checkButton.classList.add("is-correct");
      checkButton.removeEventListener("click", checkAnswer);
      checkButton.addEventListener("click", nextExercise, { once: true });
    }
    renderStats();
  }

  function markChoiceStates(exercise, correct) {
    const body = document.getElementById("exerciseBody");
    if (!body) return;
    if (exercise.type !== "choice" && exercise.type !== "trueFalse" && exercise.type !== "select") return;
    const selector = exercise.type === "select" ? ".chip" : ".choice";
    body.querySelectorAll(selector).forEach((btn) => {
      btn.classList.remove("is-correct", "is-wrong");
      if (btn.getAttribute("aria-pressed") === "true") {
        btn.classList.add(correct ? "is-correct" : "is-wrong");
      }
    });
  }

  function clearAnswerFeedback() {
    const card = document.querySelector(".exercise-card");
    if (card) card.classList.remove("is-wrong");
    const feedback = document.getElementById("feedback");
    if (feedback && feedback.classList.contains("is-bad")) {
      feedback.classList.remove("is-bad");
      feedback.textContent = "Choose an answer, then check it.";
    }
    const body = document.getElementById("exerciseBody");
    if (body) body.querySelectorAll(".is-wrong").forEach((el) => el.classList.remove("is-wrong"));
  }

  function grade(exercise) {
    if (exercise.type === "choice") return { correct: state.selected === exercise.answer };
    if (exercise.type === "trueFalse") return { correct: state.selected !== null && (state.selected === "True") === exercise.answer };
    if (exercise.type === "select") return { correct: sameSet([...state.selectedSet], exercise.answer) };
    if (exercise.type === "fill") {
      const value = normalize(document.getElementById("textAnswer").value);
      return { correct: value === normalize(exercise.answer) };
    }
    if (exercise.type === "match") {
      const expected = Object.fromEntries(exercise.pairs);
      return { correct: Object.keys(expected).every((term) => state.matched[term] === expected[term]) };
    }
    if (exercise.type === "order") return { correct: JSON.stringify(state.ordered) === JSON.stringify(exercise.answer) };
    if (exercise.type === "reflection") return { correct: document.getElementById("reflectionAnswer").value.trim().length >= 20 };
    return { correct: false };
  }

  function nextExercise() {
    state.exerciseIndex += 1;
    const lesson = getLesson(state.currentLessonId);
    if (state.exerciseIndex >= lesson.exercises.length) {
      completeLesson(lesson);
      renderCompletion(lesson);
    } else {
      renderLesson();
    }
  }

  function completeLesson(lesson) {
    const reward = getLessonReward(lesson);
    if (!state.progress.completedLessons.includes(lesson.id)) {
      state.progress.completedLessons.push(lesson.id);
      state.progress.xp += reward.xp;
      state.progress.coins += reward.coins;
      state.progress.streak = Math.max(1, state.progress.streak + 1);
      unlockNextLesson(lesson.id);
      state.lastCompletionReward = { ...reward, awarded: true };
      saveProgressState();
    } else {
      state.lastCompletionReward = { ...reward, awarded: false };
    }
  }

  function renderCompletion(lesson) {
    const next = getNextLesson(lesson.id);
    const inGuide = state.guideLessonActive;
    const reward = state.lastCompletionReward || { ...getLessonReward(lesson), awarded: false };
    const level = getLearnerLevel();
    els.lesson.innerHTML = `
      <article class="completion">
        <div class="completion-medal">L${level.level}</div>
        <p class="eyebrow">Lesson complete</p>
        <h2>${lesson.title}</h2>
        <p>${reward.awarded ? `You earned ${reward.xp} XP and ${reward.coins} coins.` : "You already claimed this level reward."} ${next ? "The next level is unlocked." : "You finished the full path."}</p>
        <div class="completion-rewards" aria-label="Completion rewards">
          <span>+${reward.awarded ? reward.xp : 0} XP</span>
          <span>+${reward.awarded ? reward.coins : 0} coins</span>
          <span>${level.name}</span>
        </div>
        <div class="lesson-actions">
          <button class="secondary-btn" id="reviewLessonButton" type="button">Practice again</button>
          <button class="primary-btn" id="nextLessonButton" type="button">${inGuide ? "Back to the steps" : next ? "Next lesson" : "View progress"}</button>
        </div>
      </article>
    `;
    document.getElementById("reviewLessonButton").addEventListener("click", () => startLesson(lesson.id));
    document.getElementById("nextLessonButton").addEventListener("click", () => {
      if (inGuide) {
        state.guideLessonActive = false;
        renderLesson();
        return;
      }
      if (next) startLesson(next.id);
      else setView("progress");
    });
    renderStats();
    renderPath();
    renderJourney();
  }

  function startLesson(id) {
    if (!isLessonUnlocked(id)) return;
    state.currentLessonId = id;
    state.phase = "teach";
    state.teachingIndex = 0;
    state.exerciseIndex = 0;
    state.lastCompletionReward = null;
    renderStats();
    renderPath();
    renderLesson();
  }

  function recordResult(lessonId, correct) {
    const result = state.progress.results[lessonId] || { attempts: 0, correct: 0 };
    result.attempts += 1;
    if (correct) result.correct += 1;
    state.progress.results[lessonId] = result;
    saveProgressState();
  }

  function unlockNextLesson(lessonId) {
    const next = getNextLesson(lessonId);
    if (next && !state.progress.unlockedLessons.includes(next.id)) {
      state.progress.unlockedLessons.push(next.id);
    }
  }

  function resetInteractionState() {
    state.selected = null;
    state.selectedSet = new Set();
    state.matched = {};
    state.ordered = [];
  }

  function getLessons() { return course.flatMap((unit) => unit.lessons); }
  function getLesson(id) { return getLessons().find((lesson) => lesson.id === id); }

  function getNextLesson(id) {
    const lessons = getLessons();
    return lessons[lessons.findIndex((lesson) => lesson.id === id) + 1] || null;
  }

  function getUnitTitle(lessonId) { return course.find((unit) => unit.lessons.some((lesson) => lesson.id === lessonId))?.title || "Course"; }
  function isLessonUnlocked(id) { return state.progress.unlockedLessons.includes(id); }

  function getFirstAvailableLesson() {
    return getLessons().find((lesson) => isLessonUnlocked(lesson.id) && !state.progress.completedLessons.includes(lesson.id)) ||
      getLessons().find((lesson) => isLessonUnlocked(lesson.id)) ||
      getLessons()[0];
  }

  function getDashboardContext() {
    return { course, els, getFirstAvailableLesson, getLearnerLevel, getLessonReward, getLessons, isLessonUnlocked, renderStats, saveProgress: saveProgressState, setProfileName, setView, startLesson, state };
  }

  function chooseJourneyOption(optionIndex) {
    const scenario = getCurrentJourneyChoice();
    if (state.progress.decisions[scenario.id]) return;
    const option = scenario.options[optionIndex];
    if (!option) return;
    state.progress.decisions[scenario.id] = { optionIndex, at: new Date().toISOString() };
    state.progress.xp += option.xp;
    state.progress.coins += option.coins;
    saveProgressState();
    renderStats();
    renderJourney();
    renderProgressView(getDashboardContext());
  }

  function getCurrentJourneyChoice() {
    const index = state.progress.completedLessons.length % journeyChoices.length;
    return journeyChoices[index];
  }

  function getLessonReward(lesson) {
    const rewards = {
      Easy: { xp: 22, coins: 10 },
      Medium: { xp: 28, coins: 14 },
      Hard: { xp: 34, coins: 18 },
      Expert: { xp: 42, coins: 24 }
    };
    return rewards[lesson.level] || { xp: 25, coins: 12 };
  }

  function getLearnerLevel() {
    const xpPerLevel = 60;
    const level = Math.min(28, Math.floor(state.progress.xp / xpPerLevel) + 1);
    const currentFloor = (level - 1) * xpPerLevel;
    const nextFloor = level * xpPerLevel;
    const capped = level >= 28;
    const progress = capped ? 100 : Math.min(100, Math.round(((state.progress.xp - currentFloor) / xpPerLevel) * 100));
    return {
      level,
      name: levelNames[Math.min(levelNames.length - 1, Math.floor((level - 1) / 4))],
      progress,
      remaining: capped ? 0 : Math.max(0, nextFloor - state.progress.xp)
    };
  }

  function saveProgressState() {
    if (!saveProgress(state.progress)) {
      els.live.textContent = "Progress could not be saved in this browser.";
    }
  }

  function sameSet(left, right) { return left.length === right.length && left.every((item) => right.includes(item)); }
  function normalize(value) { return value.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim(); }
  function cleanName(value) { return value.replace(/[^a-zA-Z0-9 .'_-]/g, "").replace(/\s+/g, " ").trim().slice(0, 24); }

  init();
})();
