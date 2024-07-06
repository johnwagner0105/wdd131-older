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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Porto Alegre Brazil Temple",
    location: "Porto Alegre, Rio Grande do Sul, Brazil",
    dedicated: "2000, December, 17",
    area: 10700,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/porto-alegre-brazil/400x250/porto-alegre-brazil-temple-lds-83426-high-res-print.jpg"
  },
  {
    templeName: "Campinas Brazil Temple",
    location: "Campinas, Sao Paulo, Brazil",
    dedicated: "2002, May, 17",
    area: 48100,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/campinas-brazil-temple-1030031-wallpaper.jpg"
  },
  {
    templeName: "São Paulo Brazil Temple",
    location: "São Paulo, Sao Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 51279,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
  }
  // Add more temple objects here...
];

const displayTemples=()=>{
  let templeDiv=document.getElementById("images");
  let categorySelection=document.getElementById("templeSelection").value;
  templeDiv.innerHTML="";
  let display;
  if(categorySelection=="home"){
    display=temples;
  }else if(categorySelection=="old"){
    display=temples.filter(temple=>temple.dedicated.split(",")[0]<1900);
  }else if(categorySelection=="new"){
    display=temples.filter(temple=>temple.dedicated.split(",")[0]>2000);
  }else if(categorySelection=="large"){
    display=temples.filter(temple=>temple.area>90000);
  }else if(categorySelection=="small"){
    display=temples.filter(temple=>temple.area<10000);
  }
  display.forEach(temple=>{
    templeDiv.innerHTML+=`<div class='temples'><figure><img src='${temple.imageUrl}' alt='${temple.templeName}' loading='lazy'><figcaption>${temple.templeName}</figcaption><p>Location: ${temple.location}</p><p>Dedicated: ${temple.dedicated}</p><p>Size: ${temple.area} sq ft</p></figure></div>`;
  })

}

document.getElementById("btnSelection").addEventListener('click',displayTemples);