const currentYearSpan = document.querySelector("#currentyear");
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

const lastModifiedParagraph = document.querySelector("#lastmodified");
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;