// Obtener los elementos de la navbar
const hamburgerIcon = document.getElementById('hamburger-icon');
const navbarMenu = document.querySelector('.navbar-menu');

// Añadir un listener para que el menú se despliegue y repliegue
hamburgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('active'); // Activar o desactivar el menú
});
