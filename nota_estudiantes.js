const prompt = require(`prompt-sync`) ();
const nota_final_estudiantes = (arr) => {
    for (let i = 1; i < 9; i++) {
        const estudiantes = Number(prompt(`Ingrese su nota final del 1 al 100 ${i} `))
        console.log()
        arr.push(estudiantes)
    }
    arr.sort((a,b) => b- a);
    return arr
}
const lista = []
nota_final_estudiantes(lista)
console.log(`Primeros 3 Lugares`)
console.log()
lista.slice(0,3).forEach((x, i) => {
    console.log(`${i + 1} = ${x}`)
console.log()
})
console.log(`Puestos del 4 al 8`)
console.log()
lista.slice(3).forEach((x, i) => {
    console.log(`${i + 4} = ${x}`)
console.log()
})