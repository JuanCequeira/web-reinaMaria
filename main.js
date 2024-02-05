class Productos {
    constructor (id, precio, modelo, marca, imagen){
        this.id = id,
        this.precio = precio,
        this.modelo = modelo,
        this.marca = marca, 
        this.imagen = imagen
    }
    mostrarProducto(){
        console.log(`El modelo es ${this.modelo} de la marca ${this.marca} y el precio es ${this.precio}`)
    }
}
const producto0 = new Productos (1, 21500, "PRODUCTO 1", "Liarte", "../img/producto0.jpeg") 
const producto1 = new Productos (2, 40800, "PRODUCTO 2", "Liarte", "../img/producto1.jpeg")
const producto2 = new Productos (3, 35100, "PRODUCTO 3", "Liarte", "../img/producto2.jpeg")
const producto3 = new Productos (4, 59900, "PRODUCTO 4", "Liarte", "../img/producto3.jpeg")
const producto4 = new Productos (5, 21500, "PRODUCTO 5", "Liarte", "../img/producto4.jpeg") 
const producto5 = new Productos (6, 40800, "PRODUCTO 6", "Liarte", "../img/producto5.jpeg")
const producto6 = new Productos (7, 35100, "PRODUCTO 7", "Liarte", "../img/producto6.jpeg")
const producto7 = new Productos (8, 59900, "PRODUCTO 8", "Liarte", "../img/producto7.jpeg")
const producto8 = new Productos (9, 21500, "PRODUCTO 9", "Liarte", "../img/producto8.jpeg") 
const producto9 = new Productos (10, 40800, "PRODUCTO 10", "Liarte", "../img/producto9.jpeg")
const producto10 = new Productos (11, 35100, "PRODUCTO 11", "Liarte", "../img/producto10.jpeg")
const producto11 = new Productos (12, 59900, "PRODUCTO 12", "Liarte", "../img/producto11.jpeg")



const stock = [producto0, producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11]
let carrito = [];

// console.log(stock)
let contenedorProductos = document.getElementById("contenedorProductos");
let content = document.createElement(`div`);
content.className = "row mt-3";

stock.forEach((product)=> {
    let productoHTML =`
        <div class="col-sm-6 col-md-4 col-lg-3 py-3">
            <div class="card shadow">
                <img src="${product.imagen}" class="card img-top" alt="productos">
                <div class="card-body">
                    <h5>${product.modelo}</h5>
                    <p class="text-muted">$ ${product.precio}</p>
                    <a href="#" class="btn">Agregar al carrito</a>
                </div>
            </div>
        </div>
`;

    content.innerHTML += productoHTML;
    contenedorProductos.append(content)
})








