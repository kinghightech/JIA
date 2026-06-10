const STORAGE_KEY = "jinaPath.progress.v1";

export function getDefaultProgress(lessons) {
  return {
    version: 1,
    profileName: "",
    onboarded: false,
    xp: 0,
    coins: 0,
    streak: 0,
    completedLessons: [],
    unlockedLessons: [lessons[0]?.id].filter(Boolean),
    results: {},
    decisions: {},
    ownedRewards: ["skin-leaf", "hat-none"],
    equipped: {
      skin: "skin-leaf",
      hat: "hat-none"
    }
  };
}

export function loadProgress(lessons) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultProgress(lessons);

    const parsed = JSON.parse(raw);
    const defaults = getDefaultProgress(lessons);
    return {
      ...defaults,
      ...parsed,
      profileName: typeof parsed.profileName === "string" ? parsed.profileName : "",
      onboarded: typeof parsed.onboarded === "boolean" ? parsed.onboarded : false,
      xp: Number.isFinite(parsed.xp) ? parsed.xp : defaults.xp,
      coins: Number.isFinite(parsed.coins) ? parsed.coins : defaults.coins,
      streak: Number.isFinite(parsed.streak) ? parsed.streak : defaults.streak,
      unlockedLessons: Array.isArray(parsed.unlockedLessons) && parsed.unlockedLessons.length
        ? parsed.unlockedLessons
        : defaults.unlockedLessons,
      completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [],
      results: parsed.results && typeof parsed.results === "object" ? parsed.results : {},
      decisions: parsed.decisions && typeof parsed.decisions === "object" ? parsed.decisions : {},
      ownedRewards: Array.isArray(parsed.ownedRewards)
        ? [...new Set([...defaults.ownedRewards, ...parsed.ownedRewards])]
        : defaults.ownedRewards,
      equipped: parsed.equipped && typeof parsed.equipped === "object" ? { ...defaults.equipped, ...parsed.equipped } : defaults.equipped
    };
  } catch {
    return getDefaultProgress(lessons);
  }
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    return true;
  } catch {
    return false;
  }
}
