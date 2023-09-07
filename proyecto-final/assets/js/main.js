let carrito = [];
let productos = new Array();

let gestor;

const key_carrito = 'carrito';

document.addEventListener('DOMContentLoaded', () => {
  gestor = new GestionarProductos();
  gestor.iniciar();
});

document.querySelector('#buscar').addEventListener('keyup', () => {
  let q = document.querySelector('#buscar').value;

  if (q.length >= 2) {
    gestor.buscar(q);
  } else {
    gestor.mostrarHeader('Todos nuestros productos');
    gestor.cargarProductos(productos);
  }
});

/**
 * Agrega al carrito un producto
 * @param {*} id  id del producto a agregar
 */
function addCarrito(id) {
  const prod = document.querySelector('#row_' + id);

  let img = prod.querySelector('img').src;
  let titulo = prod.querySelector('.model').textContent;
  //elimina el símbolo $ para poder convertirlo a número
  let price = prod.querySelector('.price').textContent.substring(1);
  let producto = new Producto(img, titulo, price, id);

  gestor.addCart(producto);
}

/**
 * Elimina un producto segun su id
 * @param {*} id ide de producto a eliminar
 */
function eliminar(id) {
  gestor.eliminarProducto(id);
}

/**
 * Slider de imágenes
 */
document.addEventListener('DOMContentLoaded', function () {
  let splide = new Splide('.splide', {
    type: 'loop',
    perPage: 1,
  });
  splide.mount();
});
