const prompt = require("prompt-sync")();
let edadValida = false
const bar = () => {
    while(!edadValida) {
        try {
            const edad = Number(prompt(`Ingrese su edad `))
            if (isNaN(edad))
                throw new Error(`Error porfa solo ingrese su edad y nada de numeros`)
                if (edad >= 18)  {
                console.log(`Puedes ingresar al bar`)
        }
        else{
            console.log(`No puedes ingresar al bar eres menor de edad`)
            edadValida = true
        }
    }
    catch(error){
        console.log(error.message)
    }      
    }
}
bar()