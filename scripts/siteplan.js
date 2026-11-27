const temples = [
  {
    templeName: "#000000",
    charac: 'text',
    imageUrl:
    "https://preview.colorkit.co/color/000000.png?type=article-preview-logo&size=social&colorname=Black"
  },
  {
    templeName: "#03285f",
    charac: 'header,footer,heading',
    imageUrl:
    "https://preview.colorkit.co/color/032859.png?size=social&type=opengraph"
  },
  {
    templeName: "#ecdcb1",
    charac: 'background',
    imageUrl:
    "https://preview.colorkit.co/color/ECD7B1.png?type=article-preview-logo&size=social&colorname=Champagne%20Gold"
  },

];

function createTempleCard() {
  const container = document.querySelector(".container");
  if (!container) return;

  container.innerHTML = "";

  temples.forEach(temple => {
    const card = document.createElement("section");
    const name = document.createElement("h3");
    const charac = document.createElement("p");
    const label = document.createElement("span");
    const img = document.createElement("img");

    name.textContent = temple.templeName;

    label.className = "label";
    label.textContent = "Location: ";
    charac.append(label, temple.charac);

    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple`;
    img.loading = "lazy";

    card.append(name, charac, img);
    container.appendChild(card);
  });
}

createTempleCard();

const currentYearSpan = document.querySelector("#currentyear");
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

const lastModifiedParagraph = document.querySelector("#lastmodified");
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
