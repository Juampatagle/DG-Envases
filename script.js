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

const carritoItems = document.getElementById("carrito-items");
const carritoTotal = document.getElementById("carrito-total");
const btnVaciar = document.getElementById("vaciar-carrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || []; // Cargar desde localStorage si existe

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio, cantidad = 1) {
    const producto = carrito.find(item => item.nombre === nombre);
    if (producto) {
        producto.cantidad += cantidad;
    } else {
        carrito.push({ nombre, precio: parseFloat(precio), cantidad });
    }
    actualizarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarProducto(nombre) {
    carrito = carrito.filter(item => item.nombre !== nombre);
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    carritoItems.innerHTML = "";  // Limpiar el contenido actual del carrito
    let total = 0;

    carrito.forEach(producto => {
        const { nombre, precio, cantidad } = producto;
        total += precio * cantidad;

        const item = document.createElement("div");
        item.classList.add("carrito-item");

        // Contenido del item
        item.innerHTML = `
            <span>${nombre} - $${precio} x ${cantidad}</span>
            <button class="eliminar-btn" data-nombre="${nombre}">Eliminar</button>
        `;

        // Agregar el item al carrito
        carritoItems.appendChild(item);

        // Añadir evento para el botón de eliminar
        item.querySelector(".eliminar-btn").addEventListener("click", (e) => {
            const nombreProducto = e.target.getAttribute("data-nombre");
            eliminarProducto(nombreProducto);
        });
    });

    carritoTotal.textContent = `Total: $${total.toFixed(2)}`;
    localStorage.setItem("carrito", JSON.stringify(carrito)); // Guardar en localStorage
}

// Función para vaciar el carrito
btnVaciar.addEventListener("click", () => {
    carrito = [];
    actualizarCarrito();
});

// Event listener para los botones "Agregar al Carrito"
document.querySelectorAll(".btn-agregar").forEach(button => {
    button.addEventListener("click", (e) => {
        const nombre = e.target.getAttribute("data-nombre");
        const precio = e.target.getAttribute("data-precio");
        agregarAlCarrito(nombre, precio, 1);
    });
});

// Event listener para los botones "Agregar 100 al Carrito"
document.querySelectorAll(".btn-agregar-100").forEach(button => {
    button.addEventListener("click", (e) => {
        const nombre = e.target.getAttribute("data-nombre");
        const precio = e.target.getAttribute("data-precio");
        agregarAlCarrito(nombre, precio, 100);
    });
});

// Inicializar el carrito cuando se carga la página
actualizarCarrito();




