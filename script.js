// Obtener todos los elementos con la clase 'animate-text'
const elementos = document.querySelectorAll('.animate-text');

// Función para verificar si un elemento está en la pantalla
const observer = new IntersectionObserver((entradas, observer) => {
    entradas.forEach(entrada => {
        // Si el elemento está en la pantalla, activar la animación
        if (entrada.isIntersecting) {
            entrada.target.classList.add('animate-in-llamativa');
            observer.unobserve(entrada.target); // Dejar de observar el elemento una vez que ha sido animado
        }
    });
}, {
    threshold: 0.5 // Se activará cuando el 50% del elemento sea visible
});

// Comenzar a observar cada elemento
elementos.forEach(elemento => {
    observer.observe(elemento);
});

// Al cargar la página, activamos la animación para la Navbar
window.addEventListener('load', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('animate-navbar');
});

