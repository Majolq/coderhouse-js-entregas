/**
 * llamar al archivo json
 * @param {String}
 */
fetch('/assets/json/products.json')
  .then((response) => response.json())
  .then((data) => {
    productos = data; // Replace the hard-coded data with fetched data

    // Loop through each product and access its properties
    productos.forEach((producto) => {
      const { id, brand, category, description, price, img } = producto;

      // You can now access these properties and use them as needed
      console.log(`Product ID: ${id}`);
      console.log(`Brand: ${brand}`);
      console.log(`Category: ${category}`);
      console.log(`Description: ${description}`);
      console.log(`Price: ${price}`);
      console.log(`Image: ${img}`);
    });

    let productosDestacados = productos.filter((prod) => prod.destacado == 1);
    this.cargarProductos(productosDestacados);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
