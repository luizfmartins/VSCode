const formulario = document.getElementById('form-cadastro')


formulario.addEventListener('reset', function() {
    document.querySelectorAll().innerText = ''
})
formulario.addEventListener('submit', function (event) {
    event.preventDefault()
    cadastrar()
})


function cadastrar() {
    let nome = document.getElementById('nome').value.trim()
    if (nome === '') {
        alert('Participante não pôde ser cadastrado')
        return
    }
    let idade = document.getElementById('idade').value.trim()
    if (idade < 10) {
        alert('Participante não pôde ser cadastrado')
        return
    }
    let email = document.getElementById('email').value.trim()
    if (email === '') {
        alert('Participante não pôde ser cadastrado')
        return
    }
    let senha = document.getElementById('senha').value.trim()
    if (senha === '') {
        alert('Participante não pôde ser cadastrado')
        return
    }
    let data = document.getElementById('data').value.trim()
    if (data === '') {
        alert('Participante não pôde ser cadastrado')
        return
    }
    let personagem = document.getElementById('personagem').value.trim()
    if (personagem === '') {
        alert('Participante não pôde ser cadastrado')
        return
    }

    let dificuldade = document.querySelector('input[name=dificuldade]:checked')
    if (dificuldade === null) {
        alert('Participante não pôde ser cadastrado')
        return
    }

    console.log(nome)
    console.log(idade)
    console.log(email)
    console.log(senha)
    console.log(data)
    console.log(personagem)
    console.log(dificuldade.value)
    alert('Cadastro Concluído com Sucesso')
}