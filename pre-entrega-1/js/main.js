document.addEventListener('DOMContentLoaded', () => {
  // Variables Globales
  let total = 0;
  let productos = '';

  let articulo = '';

  // while
  do {
    articulo = solicitarCodigo();

    if (articulo != -1) {
      let descripcion = getDescripcionArticulo(articulo);

      if (descripcion == '') {
        alert('articulo no encontrado');
      } else {
        let importe = getImporte(articulo);

        productos += descripcion;
        total += importe;
      }
    }
  } while (articulo != 'terminar' && articulo != -1);

  // Solo se muesra si el total es mayor a 0.
  if (total > 0) {
    //visualizo la data (se podria hacer alert o console.log)
    document.write('Lista de productos comprados : <br>' + productos + '<br>');
    document.write('El total de la compra es: $' + total);
  } else {
    document.write('Compra vacia!');
  }
});

/**
 * Solicitar dato al usuario
 * @returns el dato ingresado o -1 en caso que no pase los chequeos
 */
function solicitarCodigo() {
  //declaracion de variable local. Esta variable artículo es local a la funcion solicitarCodigo.
  //No se puede acceder desde afuera.
  let articulo = prompt('¿Qué deseas comprar? Ingresa el código del artículo (del 1 al 4). O apreta ¨Cancel¨ para finalizar la compra');

  if (validarInput(articulo)) {
    return articulo;
  }

  return -1;
}

/**
 * Valida un input y muestra mensaje al usuario
 * @param {*} input a validar
 * @returns true o false
 */
function validarInput(input) {
  if (input == '') {
    alert('Codigo vacio!');
    return false;
  }

  if (!input || input.toLowerCase() == 'terminar') {
    return false;
  }

  if (isNaN(parseInt(input))) {
    alert('Debe ingresar un numero');
    return false;
  }

  return true;
}

/**
 * Obtener una descripión de artículo
 * @param {*} articulo  artículo a buscar
 * @returns descripción de artículo. vacio sino se encuentra
 */
function getDescripcionArticulo(articulo) {
  // Parámetro artículo es local a la función getDescripcionArticulo.

  let descripcion = '';

  switch (articulo) {
    case '1':
      descripcion = 'Notebook - $80000' + '<br>';
      break;

    case '2':
      descripcion = 'Celular - $60000' + '<br>';
      break;

    case '3':
      descripcion = 'Smartwatch - $20000' + '<br>';
      break;

    case '4':
      descripcion = 'Auriculares - $10000' + '<br>';
      break;
  }

  return descripcion;
}

/**
 * Obtener importe de artículo
 * @param {*} articulo  artículo a buscar
 * @returns el importe del artículo. -1 si no se encuentra
 */
function getImporte(articulo) {
  let importe = -1;
  switch (articulo) {
    case '1':
      importe = 80000;
      break;

    case '2':
      importe = 60000;
      break;

    case '3':
      importe = 20000;
      break;

    case '4':
      importe = 10000;
      break;
  }

  return importe;
}
