const prompt = require("prompt-sync")();
const timsort = (arr) => {
    for (let i = 1; i < 11; i++) {
        try {
                corredores = Number(prompt(`Ingrese el tiempo del ${i} Corredor `))
                if (isNaN(corredores))
                    throw new Error(`Error porfa solo ingrese numeros`)
                arr.push(corredores)
        }
        catch(error){
            console.log(error.message)
            i--
        }
    }
        arr.sort((a,b) => a-b)
        return arr
}
lista = []
timsort(lista)
console.log(`Primeros 3 Lugares`)
lista.slice(0,3).forEach((x, i) => {
    console.log(`${i + 1} = ${x}`)
})
console.log(`Resto de corredores`)
lista.slice(4).forEach((x, i) => {
    console.log(`${i + 4} = ${x}`)
})