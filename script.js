const notas = []
let idUnico = 0

class Nota {
    construcutor(idea) {
        this.idea = idea
        this.id = idUnico++
    }
}

const inputNota = document.getElementById('inputNota')
const btnGuardar = document.getElementById('btnGuardar')
const borrarTodo = document.getElementById('borrarTodo')
const listaNotas = document.getElementById('listaNotas')

btnGuardar.addEventListener('click', () => {
    notas.push(new Nota(inputNota.value))
    console.log(notas)
})