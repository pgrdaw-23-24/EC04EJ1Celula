let celulaMadre
let celulaHija1
let celulaHija2

celulaMadre = {
    tipo: "piel",
    edad: 10,
    viva: true,
    mitosis: function() {
        console.log('mitosiseando')
        celulaHija1.tipo = "piel"
        celulaHija1.edad = celulaMadre.edad
        celulaHija1.viva = celulaMadre.viva
        celulaHija1.mitosis = celulaMadre.mitosis


    }
}

console.log(celulaMadre)
celulaMadre.mitosis()
console.log(celulaMadre)
console.log(celulaHija1)
