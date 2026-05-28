(function renderProjectPage() {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("project");
  const project = projectId ? window.PROJECTS[projectId] : null;
  const locale = document.documentElement.lang === "en" ? "en" : "de";
  const text = window.PROJECT_TEXTS[locale];

  const privacyHref = `privacy.html?project=${encodeURIComponent(projectId || "")}`;
  const topPrivacy = document.getElementById("privacyLinkTop");
  const topPrivacyMobile = document.getElementById("privacyLinkTopMobile");
  const bottomPrivacy = document.getElementById("privacyLinkBottom");
  if (topPrivacy) topPrivacy.href = privacyHref;
  if (topPrivacyMobile) topPrivacyMobile.href = privacyHref;
  if (bottomPrivacy) bottomPrivacy.href = privacyHref;

  const root = document.getElementById("projectMain");
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
  const localizedDescription =
    project.description[locale] || project.description.de;
  const localizedStatus = project.status[locale] || project.status.de;
  const category = text.category[project.type] || project.type;
  document.title = `${localizedName} | Jele Studios`;

  const links = Array.isArray(project.links)
    ? project.links.filter((link) => link && link.url)
    : [];

  root.innerHTML = `
    <section class="hero">
      <h1>${localizedName}</h1>
      <p>${localizedDescription}</p>
      <div class="metaGrid">
        <div><strong>${text.categoryLabel}:</strong> ${category}</div>
        <div><strong>${text.statusLabel}:</strong> ${localizedStatus}</div>
        <div><strong>${text.techLabel}:</strong> ${project.tech}</div>
      </div>
    </section>
  `;

  if (
    (project.type === "website" || project.type === "webgame") &&
    project.embedUrl
  ) {
    const embedSection = document.createElement("section");
    embedSection.className = "panel";
    embedSection.innerHTML = `
      <h2>${text.embedTitle}</h2>
      <div class="embedWrapper">
        <iframe title="${localizedName}" src="${project.embedUrl}" loading="lazy"></iframe>
      </div>
    `;
    root.appendChild(embedSection);
  }

  const accessSection = document.createElement("section");
  accessSection.className = "panel";
  accessSection.innerHTML = `
    <h2>${text.linksTitle}</h2>
    <div class="accessTile">
      <div class="qrColumn"></div>
      <div class="resourceGrid"></div>
    </div>
  `;

  const qrColumn = accessSection.querySelector(".qrColumn");
  const resourceGrid = accessSection.querySelector(".resourceGrid");
  const qrTarget = resolveQrTarget(project, links);

  if (qrColumn) {
    qrColumn.innerHTML = qrTarget
      ? `
      <h3>${text.qrTitle}</h3>
      <a class="qrLink" target="_blank" rel="noreferrer" href="${qrTarget}">
        <img class="qr" src="https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(qrTarget)}" alt="QR code for ${localizedName}" />
      </a>
    `
      : `<p class="muted">${text.qrMissing}</p>`;
  }

  if (resourceGrid) {
    if (links.length === 0) {
      resourceGrid.innerHTML = `<p class="muted">${text.noLinksYet}</p>`;
    } else {
      const items = [];
      links.forEach((link) =>
        items.push(renderResourceLink(link, text, locale)),
      );
      resourceGrid.innerHTML = items.join("");
    }
  }

  root.appendChild(accessSection);

  if (Array.isArray(project.images) && project.images.length > 0) {
    const mediaSection = document.createElement("section");
    mediaSection.className = "panel";
    mediaSection.innerHTML = `
      <h2>${text.screenshotsTitle}</h2>
      <div class="gallery">
        ${project.images
          .map(
            (path) =>
              `<img src="${path}" alt="${localizedName}" loading="lazy" />`,
          )
          .join("")}
      </div>
    `;
    root.appendChild(mediaSection);
  }

  const privacySection = document.createElement("section");
  privacySection.className = "panel";
  privacySection.innerHTML = `
    <h2>${text.privacy}</h2>
    <div class="linkRow">
      <a class="button" href="${privacyHref}">${text.privacy}</a>
    </div>
  `;
  root.appendChild(privacySection);
})();

function resolveQrTarget(project, links) {
  if (project.qrUrl) {
    return project.qrUrl;
  }

  const prioritiesByType = {
    website: ["website", "external"],
    webgame: ["website", "external", "itchio", "steam", "download"],
    app: ["playstore", "appstore", "external", "website"],
    game: [
      "steam",
      "itchio",
      "playstore",
      "appstore",
      "download",
      "external",
      "website",
    ],
  };

  const priorities = prioritiesByType[project.type] || ["external", "website"];
  for (const type of priorities) {
    const match = links.find((link) => link.type === type && link.url);
    if (match) {
      return match.url;
    }
  }
  return project.embedUrl || "";
}

function renderResourceLink(link, text, locale) {
  const label = link.label?.[locale] || link.label?.de || text.openProject;
  const type = link.type || "external";
  const typeLabel = text.linkTypes?.[type] || text.linkTypes?.external || type;
  const icon = getLinkIcon(type);

  return `
    <a class="resourceLink" target="_blank" rel="noreferrer" href="${link.url}">
      <span class="brandIconWrapper">
        <img class="brandIcon" src="${icon}" alt="${typeLabel}" loading="lazy" />
      </span>
      <span class="resourceText">
        <span class="resourceTitle">${label}</span>
        <span class="resourceMeta">${typeLabel}</span>
      </span>
    </a>
  `;
}

function getLinkIcon(type) {
  const iconMap = {
    steam: "https://cdn.simpleicons.org/steam/ffffff",
    itchio: "https://cdn.simpleicons.org/itchdotio/ffffff",
    appstore: "https://cdn.simpleicons.org/apple/ffffff",
    playstore: "https://cdn.simpleicons.org/googleplay/ffffff",
    download: "../icons/icons8-mobile-app-96.png",
    embed: "../icons/icons8-website-96.png",
    website: "../icons/icons8-website-96.png",
    external: "../icons/icons8-website-96.png",
  };

  return iconMap[type] || iconMap.external;
}
