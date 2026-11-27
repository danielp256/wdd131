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

function createTempleCard(filteredTemples) {
    document.querySelector('.container').innerHTML = '';
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let charac = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        charac.innerHTML = `<span class ="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class ="label">Dedicated:</span> ${temple.dedicated}`; 
        area.innerHTML = `<span class ="label">Size:</span> ${temple.area} sq ft`; 
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', `${temple.templeName} Temple`);
        img.setAttribute('loading', 'lazy');

        card.appendChild(name);
        card.appendChild(charac);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card);

    });
}

const currentYearSpan = document.querySelector("#currentyear");
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

const lastModifiedParagraph = document.querySelector("#lastmodified");
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
