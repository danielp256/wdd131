const currentYearSpan = document.querySelector("#currentyear");
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

const lastModifiedParagraph = document.querySelector("#lastmodified");
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav'); // Apuntamos al nav completo

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('show');
});