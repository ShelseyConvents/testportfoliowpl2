/*
// script.js

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
});
*/


/*
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav a");

    // Actieve link op basis van URL
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("open");
        });
    }
});*/

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    // Actieve link instellen (optioneel, afhankelijk van je routing)
    const links = document.querySelectorAll(".nav a");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
});
