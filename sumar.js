const prompt = require("prompt-sync")();
const multi = 2
const sumarr = (arr) => {
    while(true) {
        try {
            let sumar = Number(prompt(`Ingrese el Numero que quiere sumar y despues multiplicarlo por 2 `))
        if (isNaN(sumar)) {
            throw new Error(`Porfa solo ingrese Numeros`)
        }
        arr.push(sumar)
        break
        }
        catch(error) {
            console.log(error.message)
        }
        
    }
}
const lista = []
sumarr(lista)
let resultado = lista * multi
console.log(`Resultado de el Numero ingresado multiplicado por 2 Es: ${resultado}`)