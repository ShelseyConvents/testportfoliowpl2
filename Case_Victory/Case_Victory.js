<script>
    document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(link => {
    if (link.href === window.location.href) {
    link.classList.add("active");
}
});

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav");

    if (hamburger) {
    hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});
}
});
</script>
