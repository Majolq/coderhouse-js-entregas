/**
 * Clase que modela la entidad Producto
 */
class Producto {
  /**
   * Constructor
   * @param {*} modelo del Producto
   * @param {*} marca del Producto
   * @param {*} precio  del Producto
   */
  constructor(modelo, marca, precio) {
    this.modelo = modelo;
    this.marca = marca;
    this.precio = precio;
    this.id = -1;
  }

  /**
   * Muestra la descripción completa del Producto
   */
  mostrar_descripcion() {
    return this.id + ' - ' + this.modelo + ' - ' + this.marca + ' - $' + this.precio;
  }

  /**
   * Setea un nuevo id
   * @param {*} nuevo_id a setear
   */
  set_id(nuevo_id) {
    this.id = nuevo_id;
  }
}
