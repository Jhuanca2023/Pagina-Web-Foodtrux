let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    mostrarCarrito();
}

function mostrarCarrito() {
    const carritoElement = document.getElementById('carrito');
    carritoElement.innerHTML = '';

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        carritoElement.appendChild(li);
    });
}
 







function agregarAlCarrito(nombre, precio) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({ nombre, precio });
    localStorage.setItem('carrito', JSON.stringify(carrito));
    // Redirige a la página del carrito
    window.location.href = 'carrito.html';
  }



  






  



  