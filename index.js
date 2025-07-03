//LOADER
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const loader = document.querySelector('.loader-container');
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        setTimeout(() => loader.remove(), 500); // lo remueve del DOM
    }, 4000); // espera 4 segundos
});


//Boton de menu para navegación en pantallas pequeñas
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






//Efecto :after de la navbar
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    new Typed('#typed-text', {
        strings: [
            'Donde podrás construir el cuerpo de tus sueños.',
            'Entrena con los mejores profesionales.',
            '¡Transforma tu vida hoy en JR7!'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });
});