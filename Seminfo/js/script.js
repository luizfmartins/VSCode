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
const campoIdade = document.getElementById('idade')
const campoCurso = document.getElementById('curso')
const campoMatricula = document.getElementById('matricula')
const campoEmail = document.getElementById('email')

const mensagem = document.getElementById('mensagem')

const lista = document.getElementById('participantes')

const total = document.getElementById('total')

formulario.addEventListener('submit', function (event) {
    event.preventDefault()

    const nome = campoNome.value.trim()
    const idade = campoIdade.value
    const curso = campoCurso.value
    const email = campoEmail.value.trim()
    const matricula = campoMatricula.value.trim()

    if(!verificarParticipante(nome, idade, curso, matricula, email)){
        return
    }

    const participante = {
        nome: nome,
        idade: idade,
        curso: curso,
        matricula: matricula,
        email: email
    }


    participantes.push(participante)
    mensagem.innerText = 'Inscrição Realizada Com Sucesso'
    mensagem.style.color = 'green'

    formulario.reset()
})

function mostrarInscricao() {
    document.getElementById('sec-inscricao').style.display = 'block'
    document.getElementById('sec-participantes').style.display = 'none'
}

function mostrarParticipantes() {
    lista.innerHTML = ''
    participantes.forEach(function (participante, indice) {
        const itemParticipante = document.createElement('dt')
        const itemNome = document.createElement('dd')
        const itemIdade = document.createElement('dd')
        const itemCurso = document.createElement('dd')
        const itemMatricula = document.createElement('dd')
        const itemEmail = document.createElement('dd')
        itemParticipante.innerText = 'Participante: ' + (indice + 1)
        itemNome.innerText = 'Nome: ' + participante.nome
        itemIdade.innerText = 'Idade: ' + participante.idade
        itemCurso.innerText = 'Curso: ' + participante.curso
        itemMatricula.innerText = 'Matrícula: ' + participante.matricula
        itemEmail.innerText = 'Email: ' + participante.email

        lista.appendChild(itemParticipante)
        lista.appendChild(itemNome)
        lista.appendChild(itemIdade)
        lista.appendChild(itemCurso)
        lista.appendChild(itemMatricula)
        lista.appendChild(itemEmail)
    })
    total.innerText = participantes.length

    document.getElementById('sec-participantes').style.display = 'block'
    document.getElementById('sec-inscricao').style.display = 'none'
}

function verificarParticipante(nome, idade, curso, matricula, email) {
    if (nome === '' || email === '' || curso === '' || idade === '' || matricula === '') {
        mensagem.innerText = 'Preencha todos os campos corretamente.'
        mensagem.style.color = 'red'
        return false
    }
    for (let i = 0; i < participantes.length; i++) {
        if (participantes[i].matricula === matricula || participantes[i].email === email) {
            mensagem.innerText = 'Participante já cadastrado.'
            mensagem.style.color = 'red'
            return false
        }
    }
    return true
}

