const currentYear = document.querySelector('#currentYear');
const year = new Date().getFullYear();

const lastModified = document.querySelector('#lastModified');
const modification = document.lastModified;

currentYear.textContent = `${year}`;
lastModified.textContent = `${modification}`;

