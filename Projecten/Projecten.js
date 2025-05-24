document.addEventListener("DOMContentLoaded", () => {
    // Actieve menu-item aanduiden
    const navLinks = document.querySelectorAll(".nav a");
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Hamburger menu togglen
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
});
