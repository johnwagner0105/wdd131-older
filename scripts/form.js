const year = new Date().getFullYear();
const element = document.getElementById("currentyear");
element.innerHTML = `&#169; ${year}`;

const now = new Date(document.lastModified).toLocaleDateString();
const time = new Date(document.lastModified).toLocaleTimeString();
document.getElementById("lastModified").innerHTML = `Last Modified: ${now} ${time}`;