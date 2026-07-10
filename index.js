const LEGAL_ADDRESS = Object.freeze({
  name: "Lena Zeise",
  street: "Sofienstraße 36",
  cityLine: "66333 Völklingen",
});

function buildLegalAddressHtml() {
  return `${LEGAL_ADDRESS.name}<br />${LEGAL_ADDRESS.street}<br />${LEGAL_ADDRESS.cityLine}`;
}

function applyLegalAddress() {
  const addressTargets = document.querySelectorAll("[data-legal-address]");
  const addressHtml = buildLegalAddressHtml();

  addressTargets.forEach((target) => {
    target.innerHTML = addressHtml;
  });
}

function revealSectionItems(section) {
  const items = section.querySelectorAll(".card, .overview .container > div");

  items.forEach((item, index) => {
    item.style.setProperty("--card-reveal-delay", `${index * 200}ms`);
    item.classList.add("is-visible");
  });
}

function setupCardRevealAnimations() {
  const sections = document.querySelectorAll("main > .section");

  if (sections.length === 0) {
    return;
  }

  document.body.classList.add("js-card-reveal");

  if (!("IntersectionObserver" in window)) {
    sections.forEach(revealSectionItems);
    return;
  }

  const scrollRoot = document.querySelector("main");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        revealSectionItems(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      root: scrollRoot,
      threshold: 0.35,
    },
  );

  sections.forEach((section) => observer.observe(section));
}

document.addEventListener("DOMContentLoaded", () => {
  applyLegalAddress();
  setupCardRevealAnimations();
});
