// Al cargar la página, activamos la animación para la Navbar
window.addEventListener('load', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('animate-navbar');
});

const carritoItems = document.getElementById("carrito-items");
const carritoTotal = document.getElementById("carrito-total");
const btnVaciar = document.getElementById("vaciar-carrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || []; // Cargar desde localStorage si existe

document.addEventListener("DOMContentLoaded", () => {
    // Recuperar el carrito desde localStorage
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const carritoItems = document.getElementById("checkout-items");
    const carritoTotal = document.getElementById("checkout-total");

    if (carrito.length > 0) {
        let total = 0;
        carrito.forEach(producto => {
            const { nombre, precio, cantidad } = producto;
            total += precio * cantidad;

            const item = document.createElement("div");
            item.textContent = `${nombre} - $${precio} x ${cantidad}`;
            carritoItems.appendChild(item);
        });

        carritoTotal.textContent = `Total a Pagar: $${total.toFixed(2)}`;
    } else {
        carritoItems.textContent = "Tu carrito está vacío.";
        carritoTotal.textContent = "Total a Pagar: $0";
    }
});

