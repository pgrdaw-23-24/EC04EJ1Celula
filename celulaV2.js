
let celula
let numCelula = 1

celula[numCelula] = {
    nombre: "celula",
    generacion: 1,
    viva: true,
    mitosis: function () {
        console.log('mitoseando')
        celula[generacion*10+1] = celula[numCelula]
        numCelula=generacion*10+1
        celula01.nombre = celula0.nombre + celula0.generacion
        celula01.generacion = ++celula0.generacion
    }
}

console.log(celula0)
celula0.mitosis()
console.log(celula01)

