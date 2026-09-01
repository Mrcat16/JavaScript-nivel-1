const prompt = require("prompt-sync")();
let opcion = 0
let carrito = []
const menu_cafeteria = {
    cafe: 1.00,
    pepsi: 2.00,
    pan: 3.00,
}
const menu = () => {
    console.log(`Menu Cafeteria`)
    Object.entries(menu_cafeteria).forEach(([producto,precio],i) => {
        console.log(`\n${producto} = ${precio}\n`)
    })
}
const comprar = () => {
    console.log(`Que producto Desea añadir al carrito?`)
    Object.entries(menu_cafeteria).forEach(([producto,precio],i) => {
        console.log(`${producto} = ${precio}`)
    })
    producto = prompt(``).toLowerCase()
    carrito.push(producto)
    console.log(`\nEl producto ${producto} se a añadido al carrito correctamente\n`)
}
const ver_carrito = () => {
    console.log(`\nTu carrito\n`)
    carrito.slice(0,3).forEach((x, i) => {
        console.log(`\n${i + 1}.${x}\n`)
    })
}
while (true) {
    console.log(`1.Ver Menu`)
    console.log(`2.Comprar`)
    console.log(`4.Ver Carrito`)
    opcion = Number(prompt(`Elija una de las opciones disponibles `))
    if (opcion === 1)
        menu()
    else if (opcion === 2)
        comprar()
    else if (opcion === 4)
        ver_carrito()

}