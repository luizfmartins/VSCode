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

const mensagem = document.getElementById('mensagem')

const tabela = document.getElementById('tabela-participantes')

const total = document.getElementById('total')

formulario.addEventListener('submit', function (event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value.trim()
    const idadeTexto = document.getElementById('idade').value
    const idade = Number(idadeTexto)
    const curso = document.getElementById('curso').value
    const email = document.getElementById('matricula').value.trim().toLowerCase()
    const matricula = document.getElementById('email').value.trim()

    const modalidadeSelecionada = document.querySelector('input[name = modalidade]:checked')
    const turnoSelecionado = document.querySelector('input[name = turno]:checked')
    const caixasMarcadas = document.querySelectorAll('input[name = evento]:checked')

    const modalidade = modalidadeSelecionada?.value || ''
    const minicurso = document.getElementById('minicurso').value
    const eventos = []
    caixasMarcadas.forEach(function(caixa){
        eventos.push(caixa.value)
    })
    const turno = turnoSelecionado?.value || ''
    



    if (!verificarParticipante(nome, idade, curso, matricula, email, modalidade, minicurso, turno)) {
        return
    }

    const participante = {
        nome: nome,
        idade: idade,
        curso: curso,
        matricula: matricula,
        email: email,
        modalidade: modalidade,
        minicurso: minicurso,
        turno: turno,
        eventos: eventos
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
    participantes.forEach(function (participante, indice) {
        tabela.innerHTML = ''
        participantes.forEach(function (participante) {
            const linha = document.createElement('tr')
            const dados = [
                participante.nome,
                participante.idade,
                participante.curso,
                participante.matricula,
                participante.email,
                participante.modalidade,
                participante.minicurso,
                participante.turno,
                participante.eventos.join(', ') || 'Nenhuma'
            ]

            dados.forEach(function (dado) {
                const coluna = document.createElement('td')
                coluna.innerText = dado
                linha.appendChild(coluna)
            })
            tabela.appendChild(linha)
        })
    })

    total.innerText = participantes.length

    document.getElementById('sec-participantes').style.display = 'block'
    document.getElementById('sec-inscricao').style.display = 'none'
}

function verificarParticipante(nome, idade, curso, matricula, email, modalidade, minicurso, turno) {
    if (nome === '' || email === '' || curso === '' || idade === '' || matricula === '' || modalidade === '' || minicurso === '' || turno === '') {
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

