let celulas = []        // array para guardar todas las células creadas
let hijos = 2           // células producidas en cada mitosis

celula = {
    id: 1,
    viva: true,
    tipo: "piel",
    mitosis: function () {
        for (let i = 0; i < hijos; i++) {
            let hijo = { ...this }          // copia objeto usando desestructuración
            hijo.id = this.id * 10 + i +1   // id:1221 es la primera hija de id:122
            celulas.push(hijo)
        }
        delete this.tipo
        delete this.mitosis
        this.viva = false
    }
}

celulas.push(celula)        // primera célula
celulas[0].mitosis()
celulas[1].mitosis()
celulas[3].mitosis()
console.log(celulas)


