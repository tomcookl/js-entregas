const notas = []
let idUnico = 0

class Nota {
    constructor(idea) {
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
    crearIdea()
})


function crearIdea() {
    const idea = document.createElement('div')
    notas.forEach((e) => {
        idea.innerHTML =
        `
        <div class="card">
            <div class="cardBody">
                <h5 class="cardTitulo"> ${e.idea}</h5>
                <button class="btnSi">Realizado</button>
                <button class="btnNo ${notas.id}">Eliminar</button>
            </div>
        </div>
        `
    })
    listaNotas.appendChild(idea)
    eliminarIdea()
}

function eliminarIdea (){
    let ideaAEliminar = document.querySelectorAll(`.${notas.id}`)
    ideaAEliminar.forEach((idea) => {
        idea.addEventListener('click', (e) => {
            ideaAEliminar = e.target
            let cardIdea = ideaAEliminar.closest('.card') //closest selecciona al elemento +cercano
            notas.splice(cardIdea, 1)
            cardIdea.remove()
        })
    })
}