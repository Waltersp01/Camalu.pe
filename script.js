let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('lista-carrito');
  const totalSpan = document.getElementById('total');
  lista.innerHTML = '';
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - S/ ${item.precio.toFixed(2)}`;
    lista.appendChild(li);
  });
  totalSpan.textContent = total.toFixed(2);
}

function pagar() {
  alert('Simulación de pago: Redirigiendo a pasarela de pago...');
}
