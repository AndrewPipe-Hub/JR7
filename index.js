const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

let menuOpen = false;

// Toggle icon y navbar
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuOpen = !menuOpen;
    menuIcon.classList.toggle('bx-x');
});

// Cerrar al hacer scroll
window.addEventListener('scroll', () => {
    if (menuOpen) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
        menuOpen = false;
    }
});

// Cerrar al hacer click fuera del menú
document.addEventListener('click', (e) => {
    if (menuOpen && !navbar.contains(e.target) && e.target !== menuIcon) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
        menuOpen = false;
    }
});