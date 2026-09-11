(() => {
  const LANGUAGE_KEY = "erlingerling-language-v2";
  const elements = document.querySelectorAll("[data-zh][data-en]");
  const toggles = document.querySelectorAll("[data-language-toggle]");

  function preferredLanguage() {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    if (saved === "zh" || saved === "en") return saved;
    return "en";
  }

  function applyLanguage(language) {
    const root = document.documentElement;
    const metaDescription = document.querySelector('meta[name="description"]');
    const titleKey = language === "zh" ? "titleZh" : "titleEn";
    const descriptionKey = language === "zh" ? "descriptionZh" : "descriptionEn";

    root.lang = language === "zh" ? "zh-CN" : "en";
    if (root.dataset[titleKey]) document.title = root.dataset[titleKey];
    if (metaDescription && root.dataset[descriptionKey]) {
      metaDescription.setAttribute("content", root.dataset[descriptionKey]);
    }
    elements.forEach((element) => {
      element.textContent = element.dataset[language];
    });

    toggles.forEach((toggle) => {
      const label = toggle.querySelector("[data-language-label]");
      const next = toggle.querySelector("[data-language-next]");
      label.textContent = language === "zh" ? "中文" : "EN";
      next.textContent = language === "zh" ? "EN" : "中文";
      toggle.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
    });

    localStorage.setItem(LANGUAGE_KEY, language);
  }

  let language = preferredLanguage();
  applyLanguage(language);

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      language = language === "zh" ? "en" : "zh";
      applyLanguage(language);
    });
  });

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear().toString();
  });
})();
