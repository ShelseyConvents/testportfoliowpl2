// Actieve link aanduiden
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // Hamburger toggle
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
});
