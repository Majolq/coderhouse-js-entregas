let carrito = [];
let productos = new Array();

let gestor;

const key_carrito = 'carrito';

document.addEventListener('DOMContentLoaded', () => {
  //UTILIZO OPERADOR OR PARA CHEQUEAR
  carrito = JSON.parse(localStorage.getItem(key_carrito)) || [];

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
  const prod = document.querySelector('#card_' + id);

  let name = prod.querySelector('h4').textContent;
  //elimino el simbolo $ para poder convertir a numero
  let price = prod.querySelector('.price').textContent.substring(1, prod.querySelector('.price').textContent.length);
  let img = prod.querySelector('img').src;

  let producto = new Producto(id, name, price, img);

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
  // var splide = new Splide('.splide');
  splide.mount();
});

/**
 * llamar al archivo json
 * @param {String}
 */
fetch('/assets/json/products.json')
  .then((response) => response.json())
  .then((data) => {
    // Trabajar con los datos del JSON:
    // Acceder a la matriz de productos
    const productos = data.productos;
    // Iterar a través de los productos y hacer algo con ellos
    productos.forEach((producto) => {
      console.log(`ID: ${producto.id}`);
      console.log(`Nombre: ${producto.name}`);
      console.log(`Marca: ${producto.brand}`);
      // ... y así sucesivamente
    });

    console.log(data.productos); // Mostrará la matriz de productos en la consola
  })
  .catch((error) => {
    console.error('Error al cargar el archivo JSON:', error);
  });
