
let celula0
let celula01
let celula02


celula0 = {
    nombre: "celula0",
    generacion: 1,
    viva: true,
    mitosis: function () {
        console.log('mitoseando')
        celula01 = celula0
        celula01.nombre = celula0.nombre + celula0.generacion
        celula01.generacion = ++celula0.generacion
    }
}

console.log(celula0)
celula0.mitosis()
console.log(celula01)

