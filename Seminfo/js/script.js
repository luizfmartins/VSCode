// push() -> Adiciona no final
// pop -> Remove no final
// length -> Informa o tamanho do array
// unshift -> Adiciona no começo
// shift -> Remove no começo
// includes() -> Informa se o elemento está no array
// indexOf() -> Informa a posição do elemento

//Objeto
/*
const participante = {
    nome: 'Jonathan',
    email: 'jonathan@email.com',
    curso: 'SI'
}

console.log(participante)
console.log(participante.nome)
console.log(participante.email)
console.log(participante['curso'])

participante.curso = 'TADS'
console.log(participante['curso'])
participante.idade = 30
console.log(participante)
*/
/*
criando array de Objetos

const participantes = [
    {
        nome: 'Garbielito',
        email: 'garbielito@garbielete',
        curso: 'SI'
    },
    {
        nome: 'Jonathan',
        email: 'jonathan@email',
        curso: 'TADS'
    }
]

*/

const participantes = []

const formulario = document.getElementById('formulario')

const campoNome = document.getElementById('nome')
const campoEmail = document.getElementById('email')
const campoCurso = document.getElementById('curso')

const mensagem = document.getElementById('mensagem')

const lista = document.getElementById('participantes')

const total = document.getElementById('total')

formulario.addEventListener('submit', function (event) {
    event.preventDefault()

    const nome = campoNome.value.trim()
    const email = campoEmail.value.trim()
    const curso = campoCurso.value

    if (nome === '' || email === '' || curso === '') {
        mensagem.innerText = 'Preencha todos os campos.'
        mensagem.style.color = 'red'
        return
    }

    const participante = {
        nome: nome,
        email: email,
        curso: curso
    }


    participantes.push(participante)
    mensagem.innerText = 'Inscrição Realizada Com Sucesso'
    mensagem.style.color = 'green'

    formulario.reset()
})

function mostrarInscricao(){
    document.getElementById('sec-inscricao').style.display = 'block'
    document.getElementById('sec-participantes').style.display = 'none'
}

function mostrarParticipantes() {
    lista.innerHTML = ''
    participantes.forEach(function(participante, indice){
        const itemParticipante = document.createElement('dt')
        const itemNome = document.createElement('dd')
        const itemEmail = document.createElement('dd')
        const itemCurso = document.createElement('dd')
        itemParticipante.innerText = 'Participante: ' + (indice + 1)
        itemNome.innerText = participante.nome
        itemEmail.innerText = participante.email
        itemCurso.innerText = participante.curso

        lista.appendChild(itemParticipante)
        lista.appendChild(itemNome)
        lista.appendChild(itemEmail)
        lista.appendChild(itemCurso)
    })
    total.innerText = participantes.length

    document.getElementById('sec-participantes').style.display = 'block'
    document.getElementById('sec-inscricao').style.display = 'none'
}

