import cipher from './cipher.js';

console.log(cipher);

const homeTab = document.getElementById("home-tab");
const aboutTab = document.getElementById("about-tab");
const contactTab = document.getElementById("contact-tab");
const cipherEncrypt = document.getElementById("cipher-encrypt");

homeTab.style.display = "block"
aboutTab.style.display = "none";
contactTab.style.display = "none";
cipherEncrypt.style.display = "block";

const btnhome = document.getElementById("home");
btnhome.addEventListener("click",home);

const btnabout = document.getElementById("about");
btnabout.addEventListener("click",about);

const btncontact = document.getElementById("contact");
btncontact.addEventListener("click",contact);

function home() {
    homeTab.style.display = "block";
    aboutTab.style.display = "none";
    contactTab.style.display = "none";
    cipherEncrypt.style.display = "block";
}

function about() {
    aboutTab.style.display = "block";
    homeTab.style.display = "none";
    contactTab.style.display = "none";
    cipherEncrypt.style.display = "none";
}

function contact() {
    contactTab.style.display = "block";
    homeTab.style.display = "none";
    aboutTab.style.display = "none";
    cipherEncrypt.style.display = "none";
}
