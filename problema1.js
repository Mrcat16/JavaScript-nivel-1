const prompt = require("prompt-sync") ()
const luzz = (arr) => {
    while (true) {
    try {
        const luz = Number(prompt(`Cuanto le viene el recibo del luz al mes? `))
    if (isNaN(luz)) {
        throw new Error(`Error dato no valida solo ingrese numeros`)
    }
    arr.push(luz)
    break
    }
    catch(error) {
        console.log(error.message)
    }
}
}
const aguaa = (arr1) => {
    while (true) {
    try {
        const agua = Number(prompt(`Cuanto le viene el recibo del agua al mes? `))
    if (isNaN(agua)) {
        throw new Error(`Eroor dato no valido solo ingrese numeros`)
    }
    arr1.push(agua)
    break
    }
    catch(error) {
        console.log(error.message)
    }
    }
}
const gass = (arr2) => {
    while (true) {
    try {
        const gas = Number(prompt(`Cuanto le viene el recibo del gas al mes? `))
    if (isNaN(gas)) {
        throw new Error(`Error dato no valido solo ingrese numeros`)   
    }
    arr2.push(gas)
    break
    }
    catch (error) {
        console.log(error.message)
    }
    }
}
let lista_luz = []
luzz(lista_luz)
let lista_agua = []
aguaa(lista_agua)
let lista_gas = []
gass(lista_gas)
let total = [...lista_luz,...lista_agua,...lista_gas]
.reduce((suma,valor) => suma + valor, 0);
console.log(`\nEsto es lo que gasta al mes en luz $${lista_luz} dolares\n`)
console.log(`Esto es lo que gasta al mes en agua $${lista_agua} dolares\n`)
console.log(`Esto es lo que gaste de gas al mes $${lista_gas} dolares\n`)
console.log(`Total de lo que gasta al mes $${total} dolares\n`)