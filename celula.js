let celulas = []        // array para guardar todas las células creadas
let hijas = 2           // células producidas en cada mitosis

let celula = {
    id: 1,
    viva: true,
    tipo: "piel",
    mitosis: function () {
        for (let i = 0; i < hijas; i++) {
            let hija = { ...this }              // copia objeto usando desestructuración
            hija.id = this.id * 10 + i + 1      // id:1221 es la primera hija de id:122
            celulas.push(hija)                  // añadir hija a celulas[]
        }
        this.viva = false
        delete this.tipo
        delete this.mitosis
    }
}

// test
celulas.push(celula)        // primera célula
celulas[0].mitosis()        // varias mitosis
celulas[1].mitosis()
celulas[3].mitosis()
console.log(celulas)        // resultado


