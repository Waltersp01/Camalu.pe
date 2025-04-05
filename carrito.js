let carrito = [];

function agregarAlCarrito(nombre, precio, talla = '') {
  if (!talla) {
    alert("Por favor selecciona una talla.");
    return;
  }

  carrito.push({ nombre, precio, talla });
  actualizarCarrito();
  
  // Mostrar mensaje de confirmación
  alert(`${nombre} (${talla}) ha sido agregado al carrito.`);
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const total = document.getElementById("total-carrito");
  const contador = document.getElementById("cart-count");
  lista.innerHTML = "";

  let totalCompra = 0;
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = `${item.nombre} (Talla: ${item.talla}) - $${item.precio.toFixed(2)}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.className = "btn btn-sm btn-danger";
    btnEliminar.textContent = "X";
    btnEliminar.onclick = () => eliminarDelCarrito(index);

    li.appendChild(btnEliminar);
    lista.appendChild(li);
    totalCompra += item.precio;
  });

  total.textContent = totalCompra.toFixed(2);
  contador.textContent = carrito.length;
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function finalizarCompra() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }

  let mensaje = "Hola, quiero comprar los siguientes productos:%0A";
  carrito.forEach(item => {
    mensaje += `- ${item.nombre} (Talla: ${item.talla}) - $${item.precio.toFixed(2)}%0A`;
  });

  const total = carrito.reduce((sum, item) => sum + item.precio, 0);
  mensaje += `%0ATotal: $${total.toFixed(2)}`;

  const telefono = "51977847948";
  const url = `https://wa.me/${telefono}?text=${mensaje}`;
  window.open(url, "_blank");
}
