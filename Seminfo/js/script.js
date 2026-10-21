const participantes = []
// push() -> Adiciona no final
// pop -> Remove no final
// unshift -> Remove o primeiro
// includes() -> Informa se o elemento está no array
// indexOf() -> Informa a posição do elemento

const formulario = document.getElementById('formulario')

const mensagem = document.getElementById('mensagem')

const lista = document.getElementById('participantes')

const total = document.getElementById('total')

formulario.addEventListener('submit', function (event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value.trim()

    if (nome === '') {
        mensagem.innerText = 'Informe um nome.'
        mensagem.style.color = 'red'
        return
    }
    participantes.push(nome)
    mensagem.innerText = 'Inscrição Realizada Com Sucesso'
    mensagem.style.color = 'green'

    mostrarParticipantes()
    formulario.reset()
})

function mostrarParticipantes() {
    lista.innerHTML = ''
    for (let i = 0; i < participantes.length; i++) {
        const item = document.createElement('li')

        item.innerText = participantes[i]
        lista.appendChild(item)
    }
    total.innerText = participantes.length
}

