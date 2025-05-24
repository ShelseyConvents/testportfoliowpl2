document.addEventListener("DOMContentLoaded", () => {
    // Activeer de actieve link in navbar
    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("open");
        });
    }

    // Simpele form validatie + alert
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            alert('Bedankt voor je bericht! Ik neem spoedig contact met je op.');
            form.reset();
        });
    }
});
