const LEGAL_ADDRESS = Object.freeze({
  name: "Lena Zeise",
  street: "Goebenstraße 9",
  cityLine: "66117 Saarbrücken",
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

document.addEventListener("DOMContentLoaded", applyLegalAddress);
