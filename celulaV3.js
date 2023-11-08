
let celulas = []
let idpadre = 1
let idhijo = 1


celula = {
    id: idhijo,
    nombre: "celula"+idhijo,
    viva: true,
    mitosis: function () {
        idpadre = this.id
        console.log('*** mitosis 1 ***')
        idhijo = idpadre*10+1
        celulas[idhijo] = this                  // crear copia exacta y guardar en array celulas
        celulas[idhijo].id = idhijo
        console.log(celulas[idhijo])
        
        console.log('*** mitosis 2 ***')
        idhijo = idpadre*10+2
        celulas[idhijo] = this                  // crear copia exacta y guardar en array celulas
        celulas[idhijo].id = idhijo
        console.log(celulas[idhijo])

    }
}

console.log(celulas)
celulas[idhijo].mitosis()
console.log(celulas)
