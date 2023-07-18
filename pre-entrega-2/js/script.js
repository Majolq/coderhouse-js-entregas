let array_productos = new Array();

let gen_id = 1;
const hoy = new Date();
alert('Bienvenidos al shop online de productos de tecnología\n' + hoy.toLocaleString());

let flag = true;
while (flag) {
  let mensaje = 'Indique lo que desea hacer: ';
  mensaje += '\n1) Cargar un nuevo producto ';
  mensaje += '\n2) Eliminar un producto ';
  mensaje += '\n3) Mostrar los productos en stock ';
  mensaje += '\n4) Aplicar un descuento ';
  mensaje += '\n5) Salir ';

  let resp = prompt(mensaje);

  switch (resp) {
    case '1':
      ingresar_nuevo_producto();
      break;
    case '2':
      eliminar_producto();
      break;
    case '3':
      mostrar_productos();
      break;
    case '4':
      aplicar_descuento();
      break;
    case '5':
      alert('Gracias por utilizar nuestro sitio :) ');
      flag = false;
      break;
    case null:
      alert('Gracias por utilizar nuestro sitio :) ');
      flag = false;
      break;
    default:
      alert('No ingresaste una opción válida');
  }
}

function solicitar_datos_producto() {
  let check = true;

  while (check) {
    let msj = '';
    let marca = prompt('Ingrese marca').trim();
    let modelo = prompt('ingrese modelo').trim();
    let precio = parseFloat(prompt('Ingrese precio'));

    if (!marca) {
      msj += '\nDebe ingresar marca';
    }

    if (!modelo) {
      msj += '\nDebe ingresar modelo';
    }

    if (isNaN(precio)) {
      msj += '\nDebe ingresar un valor numérico en precio';
    }

    if (msj != '') {
      alert(msj);
      check = confirm('Desea cargar de nuevo los datos?');
    } else {
      return new Producto(marca, modelo, precio);
    }
  }

  return false;
}

function ingresar_nuevo_producto() {
  let producto = solicitar_datos_producto();

  if (producto) {
    producto.set_id(gen_id);
    gen_id++;
    array_productos.push(producto);
    alert('Producto agregado con éxito!');
  }
}

function eliminar_producto() {
  if (existen_productos()) {
    mostrar_arreglo();

    let id_ingresado = prompt('Ingrese el id del producto a eliminar').trim();

    if (id_ingresado) {
      let producto_encontrado = array_productos.find((a) => a.id == id_ingresado);

      if (producto_encontrado) {
        let resp = confirm('Estás seguro que deseas eliminar el producto ' + producto_encontrado.mostrar_descripcion() + ' ?');
        if (resp) {
          array_productos = array_productos.filter((a) => a.id != id_ingresado);

          alert('Producto eliminado con éxito');
        }
      }
    }
  }
}

function mostrar_productos() {
  if (existen_productos()) {
    let resp = prompt('La info se mostrara ordenada por precio.\n Deseas verla en forma Ascendente (A) o Desendente (D)').toUpperCase();
    if (resp == 'A') {
      array_productos.sort((a, b) => {
        if (a.precio > b.precio) {
          return 1;
        }
        if (a.precio < b.precio) {
          return -1;
        }

        return 0;
      });
    }

    if (resp == 'D') {
      array_productos.sort((a, b) => {
        if (a.precio > b.precio) {
          return -1;
        }
        if (a.precio < b.precio) {
          return 1;
        }

        return 0;
      });
    }

    mostrar_arreglo();
  }
}

function mostrar_arreglo() {
  let mensaje = 'Los productos en stock son';

  array_productos.forEach((producto) => {
    mensaje += '\n ' + producto.mostrar_descripcion();
  });

  alert(mensaje);
}

function existen_productos() {
  if (array_productos.length == 0) {
    alert('No hay productos en stock');

    return false;
  }

  return true;
}

function aplicar_descuento() {
  if (existen_productos) {
    let descuento = parseInt(prompt('Ingresá el descuento a aplicar'));

    if (!isNaN(descuento)) {
      let desc = 1 - descuento / 100;

      array_productos = array_productos.map((prod) => {
        return {
          marca: prod.nombre,
          modelo: prod.modelo,
          precio: prod.precio * desc,
        };
      });
    }

    mostrar_arreglo();
  }
}
