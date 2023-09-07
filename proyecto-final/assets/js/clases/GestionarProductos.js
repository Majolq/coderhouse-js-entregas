class GestionarProductos {
  iniciar() {
    productos = [
      {
        id: 1,
        brand: 'Dell',
        titulo: 'Notebook',
        description: 'Gamer G5 5525 15.6"',
        price: 960000,
        stock: 50,
        img: 'notebook.jpg',
        destacado: 1,
      },
      {
        id: 2,
        brand: 'Apple',
        titulo: 'Celular',
        description: 'Iphone 14 Pro Max',
        price: 570000,
        stock: 50,
        img: 'phone.jpg',
        destacado: 1,
      },
      {
        id: 3,
        brand: 'Amazfit',
        titulo: 'Smartwatch',
        description: 'Bip 3',
        price: 48000,
        stock: 50,
        img: 'smartwatch.jpg',
        destacado: 1,
      },
      {
        id: 4,
        brand: 'Logitech',
        titulo: 'Auriculares',
        description: 'Gamer G435',
        price: 32000,
        stock: 50,
        img: 'auriculares.jpg',
        destacado: 1,
      },
      {
        id: 5,
        brand: 'Logitech',
        titulo: 'Mouse',
        description: 'Large M650 Graphite',
        price: 41000,
        stock: 50,
        img: 'mouse.jpg',
        destacado: 0,
      },
      {
        id: 6,
        brand: 'Microsoft',
        titulo: 'Teclado',
        description: 'Bluetooth Compact Black',
        price: 28000,
        stock: 50,
        img: 'teclado.jpg',
        destacado: 0,
      },
      {
        id: 7,
        brand: 'Viewsonic',
        titulo: 'Monitor',
        description: 'Gamer Elite 27" Xg270qc',
        price: 386000,
        stock: 50,
        img: 'monitor.jpg',
        destacado: 0,
      },
      {
        id: 8,
        brand: 'Trust',
        titulo: 'Silla',
        description: 'Gamer Gxt 708',
        price: 267000,
        stock: 50,
        img: 'silla.jpg',
        destacado: 0,
      },
      {
        id: 9,
        brand: 'JBL',
        titulo: 'Parlante',
        description: 'Flip 6',
        price: 110000,
        stock: 50,
        img: 'parlante.jpg',
        destacado: 0,
      },
      {
        id: 10,
        brand: 'Sandisk',
        titulo: 'Pen Drive',
        description: '32Gb Cruzer Blade 2.0',
        price: 3200,
        stock: 50,
        img: 'pendrive.jpg',
        destacado: 0,
      },
      {
        id: 11,
        brand: 'Logitech',
        titulo: 'Webcam',
        description: 'Cámara Web C505',
        price: 34000,
        stock: 50,
        img: 'webcam.jpg',
        destacado: 0,
      },
      {
        id: 12,
        brand: 'JBL',
        titulo: 'Micrófono',
        description: 'Premium Doble Usb',
        price: 82000,
        stock: 50,
        img: 'microfono.jpg',
        destacado: 0,
      },
      {
        id: 13,
        brand: 'Xiaomi',
        titulo: 'Cargador',
        description: 'Powerbank 20000Mah Fast Charge 18W',
        price: 33000,
        stock: 50,
        img: 'cargador.jpg',
        destacado: 0,
      },
      {
        id: 14,
        brand: 'Samsung',
        titulo: 'Tablet',
        description: 'S7 Fe 12" 6Gb 128Gb',
        price: 465000,
        stock: 50,
        img: 'tablet.jpg',
        destacado: 0,
      },
      {
        id: 15,
        brand: 'Trust',
        titulo: 'Mousepad',
        description: 'Gxt764 Iluminación Rgb',
        price: 27000,
        stock: 50,
        img: 'mousepad.jpg',
        destacado: 0,
      },
      {
        id: 16,
        brand: 'Sony',
        titulo: 'Joystick',
        description: 'Inalámbrico Ps5 Midnight Black',
        price: 74000,
        stock: 50,
        img: 'joystick.jpg',
        destacado: 0,
      },
    ];

    let productosDestacados = productos.filter((prod) => prod.destacado == 1);

    this.cargarProductos(productosDestacados);
  }

  cargarProductos(productos) {
    const divProductos = document.querySelector('#productos');
    divProductos.innerHTML = '';

    if (productos.length == 0) {
      this.mostrarHeader('No se encontraron productos');
      return false;
    } else {
      productos.forEach((producto) => {
        const { id, brand, titulo, description, stock, price, img } = producto;

        let prod = document.createElement('li');
        prod.classList.add('item');
        prod.id = 'row_' + id;
        prod.innerHTML = `
            <article class="card">
              <div class="image">
                  <img src="./assets/images/products/${img}" alt="JavaScript" />
              </div>
              <div class="text">
                  <div class="info-content">
                      <h3 class="brand">${brand}</h3>
                      <h4 class="model">${titulo}</h4>
                      <p class="description">${description.substring(0, 120)}</p>
                  </div>
                  <div class="price-btn-content">
                      <h5 class="price">$${price}</h5>
                      <a href="javascript:addCarrito(${id})" class="button-add">Agregar al carrito</a>
                  </div>
              </div>
            </article>
        `;

        divProductos.appendChild(prod);
      });
    }
  }

  mostrarHeader(msg) {
    const headerProductos = document.querySelector('#headerProductos');
    headerProductos.innerHTML = msg;
  }

  buscar(valor) {
    let resultado = productos.filter((producto) => producto.brand.toLowerCase().includes(valor.toLowerCase()) || producto.titulo.toLowerCase().includes(valor.toLowerCase()) || producto.description.toLowerCase().includes(valor.toLowerCase()));
    this.cargarProductos(resultado);
  }

  addCart(item) {
    const existe = carrito.some((producto) => producto.id === item.id);

    if (existe) {
      // Actualiza la cantidad de productos existentes
      carrito.forEach((producto) => {
        if (producto.id === item.id) {
          producto.stock++;
        }
      });

      Toastify({
        text: 'Se actualizó la cantidad del producto',
        duration: 2000,
        gravity: 'bottom',
      }).showToast();
    } else {
      carrito.push(item);

      Toastify({
        text: 'Producto agregado con éxito',
        duration: 2000,
        gravity: 'bottom',
      }).showToast();
    }

    this.actualizarCarrito();
  }

  /**
   * Actualiza contado de carrito, muestra el estado correcto del carrito y guarda en local storage
   */
  actualizarCarrito() {
    this.actualizarContador();
    this.mostrarCarrito();

    this.guardarCarrito();
  }

  guardarCarrito() {}

  mostrarCarrito() {
    let detalleCarrito = document.querySelector('#idCarritoContent');
    detalleCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach((producto) => {
      const { id, img, titulo, price, stock } = producto;

      const row = document.createElement('div');
      row.classList.add('row');
      total += parseInt(price) * stock;

      row.innerHTML = `
                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            <img src="${img}" width="80"/>
                        </div>

                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            <h4 class="model"> ${titulo} </h4>
                        </div>

                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            <h5 class="price"> $${price} </h5>
                        </div>  
                        
                        <div class="col-1 d-flex align-items-center justify-content-end p-2 border-bottom">
                            <p class="stock"> ${stock} </p>
                        </div>

                        <div class="col-2 d-flex align-items-center justify-content-center p-2 border-bottom">
                          <a href="javascript:eliminar(${id})">
                            <i class="fa-solid fa-trash"></i>
                          </a>
                        </div>            
                        `;

      detalleCarrito.append(row);
    });

    let row = document.createElement('div');
    row.classList.add('row');

    row.innerHTML = `
                    <div class="col-6 d-flex align-items-center justify-content-start p-2 border-bottom cart-footer cart-footer--total">
                        Total a pagar:
                    </div>
                    <div class="col-6 d-flex align-items-center justify-content-end p-2 border-bottom cart-footer cart-footer--price">
                        <b> $ ${total}</b>
                    </div>
                    
                    `;

    detalleCarrito.appendChild(row);
  }

  actualizarContador() {
    let totalCarrito = this.contarProductos();

    let countCarrito = document.querySelector('#badgeCarrito');
    countCarrito.innerHTML = totalCarrito;
  }

  contarProductos() {
    let contarProductos = 0;

    carrito.forEach((producto) => {
      contarProductos = contarProductos + parseInt(producto.stock);
    });

    return contarProductos;
  }

  eliminarProducto(id) {
    // Preguntamos al usuario si desea continuar con el proceso de eliminación
    Swal.fire({
      title: 'Estás segura/o que deseas eliminar el producto?',
      showCancelButton: true,
      confirmButtonColor: '#e65757',
      cancelButtonColor: '#00355e',
      confirmButtonText: 'Si, eliminalo',
      cancelButtonText: 'No, cancela',
    }).then((result) => {
      if (result.isConfirmed) {
        carrito = carrito.filter((articulo) => articulo.id != id);
        this.actualizarCarrito();

        // Notificación de la eliminación del producto
        Toastify({
          text: 'Eliminamos el producto con exito',
          duration: 2000,
          gravity: 'bottom',
          style: {
            background: '#00355e',
          },
        }).showToast();
      }
    });
  }
}
