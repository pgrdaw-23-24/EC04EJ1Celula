let celulas = []
let hijos = 2

celula = {
    id: 1,
    viva: true,
    tipo: "piel",
    mitosis: function () {
        for (let i = 0; i < hijos; i++) {
            let hijo = { ...this }      // copia de objetos usando desestructuración de objetos
            hijo.id = this.id * 10 + i +1
            celulas.push(hijo)
        }
        delete this.tipo
        delete this.mitosis
        this.viva = false
    }
}

celulas.push(celula)        // primera célula
celulas[0].mitosis()
celulas[2].mitosis()
celulas[4].mitosis()
celulas[5].mitosis()
console.log(celulas)


