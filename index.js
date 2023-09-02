class product {
    constructor(nombre, precio, thumbnail, descripcion, code, stock){
        this.id = null
        this.nombre = nombre;
        this.precio = precio;
        this.thumbnail = thumbnail;
        this.descripcion = descripcion;
        this.code = code;
        this.stock = stock;
    }
}

class ProductManager {
    constructor() {
        this.productos = [];
        this.nextId = 1;
    }

    agregarProducto(producto){
        const codigoExistente = this.productos.some(prod => prod.code === producto.code);
        if (codigoExistente) {
            console.log (`Error: El código "${producto.code}" ya está usado.`);
            return;
        }

        producto.id = this.nextId;
        this.nextId++;

        this.productos.push(producto);
    }

    getProducts() {
        return this.productos;
    }


    getProductById (id) {
        const productoEncontrado = this.productos.find(prod => prod.id === id);
        if (productoEncontrado) {
            return productoEncontrado
        } else{
            return "El producto no existe."
        }
    }
}


const Manager = new ProductManager();

// Creacion de lo productos
const productos1 = new product ("Zapatillas Nike-Black", 5999, "img Zapatillas Nike-Black", "Zapatillas Running", "**** *** *****", 15);
const productos2 = new product ("Zapatillas Adidas-Blancas", 8949, "img Zapatillas Adidas-Blancas", "Zapatillas Adidas", "**** *** *****", 8);
const productos3 = new product ("Zapatillas NewBalance-New", 7599, "img Zapatillas NewBalance-New", "Running Unisex", "**** *** *****", 10);

Manager.agregarProducto(productos1);
Manager.agregarProducto(productos2);
Manager.agregarProducto(productos3);

// Muestrra de productos y filtra
console.log(Manager.getProducts());
console.log(Manager.getProductById(1));
console.log(Manager.getProductById(5));