const prompt = require("prompt-sync") ();
const tienda = (arr) => {
    for (let i = 1; i < 7; i++) {
    const productos = Number(prompt(`Ingrese el precio del ${i} producto $ `))
    arr.push(productos)
}
    arr.sort((a,b) => a - b)
    return arr
}
const lista = []
tienda(lista)
console.log(`\nLos 3 productos mas baratos\n`)
lista.slice(0,3).forEach((x, i) => {
    console.log(`${i + 1} = $${x}`)
})
console.log(`\nLos 3 productos mas caros\n`)
lista.slice(3).forEach((x, i) => {
    console.log(`${i + 4} = $${x}`)
})