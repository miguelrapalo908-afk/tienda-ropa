let carrito = [];

function agregarCarrito(producto) {
    carrito.push(producto);
    mostrarCarrito();
}

function mostrarCarrito() {
    let lista = document.getElementById("carrito");
    lista.innerHTML = "";

    carrito.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
    });
}