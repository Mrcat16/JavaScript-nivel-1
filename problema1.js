const prompt = require("prompt-sync") ();
const hogar = () => {
    try {
        const gastos = Number(prompt(`Cuantos gastas en luz al mes?`))
    if (isNaN)(gastos) => {
        throw new Error(`Error dato no valida ingrese solo numeros porfa`)
        
    }
    hogar.push(gastos)
    }
    catch(error) {
        console.log(error.message)
    }
}