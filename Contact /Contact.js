// Navigatie link activeren (zoals andere pagina's)
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav a');
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Simpele form validatie (optioneel uitbreidbaar)
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Bedankt voor je bericht! Ik neem spoedig contact met je op.');
        form.reset();
    });
});
