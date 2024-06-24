const year = new Date().getFullYear();
const element = document.getElementById("currentyear");
element.innerHTML = `&#169; ${year}`;

const now = new Date(document.lastModified).toLocaleDateString();
const time = new Date(document.lastModified).toLocaleTimeString();
document.getElementById("lastModified").innerHTML = `Last Modified: ${now} ${time}`;

const mainNav = document.getElementById("nav");
const button = document.querySelector("#menu");

button.addEventListener("click", () => {
    mainNav.classList.toggle("show");
    button.classList.toggle("show");
});

const title=document.getElementById("title");
const options=document.querySelectorAll(".links");
options.forEach(link=>{
  link.addEventListener("click",(e)=>{
e.preventDefault();
const linkText=link.textContent;
title.textContent=linkText;
  })
})
