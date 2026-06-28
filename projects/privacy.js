(function renderPrivacyPage() {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("project");
  const project = projectId ? window.PROJECTS[projectId] : null;
  const locale = document.documentElement.lang === "en" ? "en" : "de";
  const text = window.PROJECT_TEXTS[locale];
  const root = document.getElementById("privacyMain");

  const projectHref = `project.html?project=${encodeURIComponent(projectId || "")}`;
  const privacyHref = `privacy.html?project=${encodeURIComponent(projectId || "")}`;
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
  document.title = `${text.privacyHeading} | ${localizedName}`;

  root.innerHTML = `
    <section class="hero">
      <h1>${text.privacyHeading}</h1>
      <p>${localizedName}</p>
    </section>
    <section class="panel">
      <h2>${text.privacyPersonTitle}</h2>
         <p>Lena Zeise<br />
         <p>Goebenstraße 9<br />
         66117 Saarbrücken</p>

      <p>
        E-Mail: lena.maria.zeise@gmail.com
      </p>
      <h2>${text.privacyOverviewTitle}</h2>
      <p>${text.privacyDefaultOverview}</p>
      <h2>${text.privacyDataTitle}</h2>
      <p>${text.privacyDefaultData}</p>
      <h2>${text.privacyServicesTitle}</h2>
      <p>${text.privacyDefaultServices}</p>
      <h2>${text.privacyRetentionTitle}</h2>
      <p>${text.privacyDefaultRetention}</p>
      <h2>${text.privacyContactTitle}</h2>
      <p>${text.privacyDefaultContact}</p>
    </section>
  `;
})();
