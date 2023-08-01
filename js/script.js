let productos = [
    {
        id: 1,
        nombreProducto: "Colombiano",
        precio: 3500
    },
    {
        id: 2,
        nombreProducto: "Bonafide",
        precio: 2000
    },
    {
        id: 3,
        nombreProducto: "Starbucks",
        precio: 1200
    },
    {
        id: 4,
        nombreProducto: "Dolca",
        precio: 900
    },
    {
        id: 5,
        nombreProducto: "Arlistan",
        precio: 700
    },
    {
        id: 6,
        nombreProducto: "Morenita",
        precio: 400
    },
]

let carrito = []
let producto;

function buscarProducto() {
    let seleccion = prompt("¿Que café desea comprar?: (Colombiano, Bonafide, Starbucks, Dolca, Arlistan, Morenita)")
    producto = productos.find((p) => p.nombreProducto.toLowerCase() == seleccion.toLowerCase());
}

function agregarCarrito() {
    if (producto) {
        let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"))
        carrito.push({
            producto: producto.nombreProducto,
            cantidad: cantidad,
            subtotal: producto.precio * cantidad,

        })
    } else {
        alert("El producto seleccionado no existe. Por favor ingrese un producto valido")
    }
}

function confirmarCarrito() {
    while (true) {
        buscarProducto()
        agregarCarrito()
        if (!confirm("¿Desea agregar otro producto al carrito?")) {
            break;
        }

    }
}

function calcularTotal() {
    console.log("Carrito de compras:")
    carrito.forEach((item) => {
        console.log(`- ${item.cantidad} ${item.producto} : ${item.subtotal}`)

    })

    let total = carrito.reduce((sum, item) => sum + item.subtotal, 0)
    console.log(`Total a pagar: ${total}`)
}

function vaciarCarrito() {
    carrito = []
    console.log("El carrito ha sido vaciado")
}

confirmarCarrito()

if (carrito.length > 0) {
    if (confirm("Desea vaciar el carrito?")) {
        vaciarCarrito()
    }
}

calcularTotal()
