const temples = [
  {
    templeName: "Manti Utah",
    charac: 'text',
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    charac: 'header,footer,heading',
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    charac: 'background',
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
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
