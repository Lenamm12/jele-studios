(function renderPrivacyPage() {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("project");
  const project = projectId ? window.PROJECTS[projectId] : null;
  const locale = resolveLocale(params);
  document.documentElement.lang = locale;
  const text = window.PROJECT_TEXTS[locale];
  const root = document.getElementById("privacyMain");

  const projectHref = `project.html?project=${encodeURIComponent(projectId || "")}`;
  const privacyHref = buildPrivacyUrl(projectId, locale);
  const topProject = document.getElementById("projectLinkTop");
  const topProjectMobile = document.getElementById("projectLinkTopMobile");
  const bottomProject = document.getElementById("projectLinkBottom");
  const topPrivacy = document.getElementById("privacyLinkTop");
  const topPrivacyMobile = document.getElementById("privacyLinkTopMobile");
  const bottomPrivacy = document.getElementById("privacyLinkBottom");
  if (topProject) topProject.href = projectHref;
  if (topProjectMobile) topProjectMobile.href = projectHref;
  if (bottomProject) bottomProject.href = projectHref;
  if (topPrivacy) topPrivacy.href = privacyHref;
  if (topPrivacyMobile) topPrivacyMobile.href = privacyHref;
  if (bottomPrivacy) bottomPrivacy.href = privacyHref;

  if (!root) {
    return;
  }

  if (!project) {
    root.innerHTML = `
      <section class="panel">
        <h1>${text.projectNotFoundTitle}</h1>
        <p>${text.projectNotFoundBody}</p>
        <a class="button" href="../index.html">${text.goToOverview}</a>
      </section>
    `;
    return;
  }

  const localizedName = project.name[locale] || project.name.de;
  const policy = project.privacyPolicy || {};
  document.title = `${text.privacyHeading} | ${localizedName}`;

  root.innerHTML = `
    <section class="privacypolicy">
      <h1>${text.privacyHeading}</h1>
      <p>${text.privacyForLabel}: ${localizedName}</p>
      <div class="languageSwitch" aria-label="${text.privacyLanguageLabel}">
        <a class="${locale === "de" ? "active" : ""}" href="${buildPrivacyUrl(projectId, "de")}">${text.privacyGermanLabel}</a>
        <a class="${locale === "en" ? "active" : ""}" href="${buildPrivacyUrl(projectId, "en")}">${text.privacyEnglishLabel}</a>
      </div>
      <br />
      <h2>${text.privacyPersonTitle}</h2>
      <p>
        Lena Zeise<br />
        Goebenstraße 9<br />
        66117 Saarbrücken
      </p>

      <p>
        E-Mail: lena.maria.zeise@gmail.com
      </p>
      <h2>${text.privacyOverviewTitle}</h2>
      <p>${localizeValue(policy.privacyOverview, locale, text.privacyDefaultOverview)}</p>
      <h2>${text.privacyDataTitle}</h2>
      <p>${localizeValue(policy.privacyData, locale, text.privacyDefaultData)}</p>
      <h2>${text.privacyServicesTitle}</h2>
      <p>${localizeValue(policy.privacyServices, locale, text.privacyDefaultServices)}</p>
      <h2>${text.privacyRetentionTitle}</h2>
      <p>${localizeValue(policy.privacyRetention, locale, text.privacyDefaultRetention)}</p>
    </section>
  `;
})();

function resolveLocale(params) {
  const queryLocale = params.get("lang");
  if (queryLocale === "de" || queryLocale === "en") {
    return queryLocale;
  }

  const browserLocales = navigator.languages?.length
    ? navigator.languages
    : [navigator.language || ""];
  const browserLocale = browserLocales.find((value) => value);
  return browserLocale && browserLocale.toLowerCase().startsWith("de")
    ? "de"
    : "en";
}

function buildPrivacyUrl(projectId, locale) {
  const params = new URLSearchParams();
  if (projectId) {
    params.set("project", projectId);
  }
  params.set("lang", locale);
  return `privacy.html?${params.toString()}`;
}

function localizeValue(value, locale, fallback = "") {
  if (!value) {
    return fallback;
  }

  if (typeof value === "string") {
    return value;
  }

  return value[locale] || value.de || value.en || fallback;
}
