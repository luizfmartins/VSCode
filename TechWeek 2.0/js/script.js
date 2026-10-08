const formulario = document.getElementById('formulario')


formulario.addEventListener('reset', function () {
    resetSecFim()
    
    document.querySelectorAll('formulario').innerText = ''
})
formulario.addEventListener('submit', function (event) {
    event.preventDefault()
    resetSecFim()
    cadastrar()
})

function cadastrar() {
    let nome = document.getElementById('nome').value.trim()
    if (nome === '') {
        let insc = document.getElementById('insc')
        insc.innerText = 'Inscrição não pôde ser realizada!'
        insc.style.color = 'red'
        return
    }
    let idade = Number(document.getElementById('idade').value.trim())
    if (idade < 16 || idade > 100) {
        let insc = document.getElementById('insc')
        insc.innerText = 'Inscrição não pôde ser realizada!'
        insc.style.color = 'red'
        return
    }
    let email = document.getElementById('email').value.trim()
    if (email === '') {
        let insc = document.getElementById('insc')
        insc.innerText = 'Inscrição não pôde ser realizada!'
        insc.style.color = 'red'
        return
    }
    let instituicao = document.getElementById('instituicao').value.trim()
    if (instituicao === '') {
        let insc = document.getElementById('insc')
        insc.innerText = 'Inscrição não pôde ser realizada!'
        insc.style.color = 'red'
        return
    }

    let curso = document.getElementById('curso').value.trim()
    if (curso === '') {
        let insc = document.getElementById('insc')
        insc.innerText = 'Inscrição não pôde ser realizada!'
        insc.style.color = 'red'
        return
    }

    let data = new Date(document.getElementById('data').value);
    let dataValida = verificarData(data)
    if (data === '' || dataValida === false) {
        let insc = document.getElementById('insc')
        insc.innerText = 'Inscrição não pôde ser realizada!'
        insc.style.color = 'red'
        return
    }

    let minicurso = document.querySelector('option[class=minicurso]:checked')
    if (minicurso === null) {
        let insc = document.getElementById('insc')
        insc.innerText = 'Inscrição não pôde ser realizada!'
        insc.style.color = 'red'
        return
    }
    let modalidade = document.querySelector('input[name=modalidade]:checked')
    if (modalidade === null) {
        let insc = document.getElementById('insc')
        insc.innerText = 'Inscrição não pôde ser realizada!'
        insc.style.color = 'red'
        return
    }

    let interesse = false
    let interesse1 = document.querySelector('input[name=desenvolvimento]:checked')
    let interesse2 = document.querySelector('input[name=ia]:checked')
    let interesse3 = document.querySelector('input[name=mobile]:checked')
    let interesse4 = document.querySelector('input[name=dados]:checked')
    if (interesse1 !== null) {
        interesse = true
    } else if (interesse2 !== null) {
        interesse = true
    } else if (interesse3 !== null) {
        interesse = true
    } else if (interesse4 !== null) {
        interesse = true
    }
    if (!interesse) {
        let insc = document.getElementById('insc')
        insc.innerText = 'Inscrição não pôde ser realizada!'
        insc.style.color = 'red'
        return
    }

    if (minicurso.value == 'Introdução à IA' && interesse2 === null) {
        let insc = document.getElementById('insc')
        insc.innerText = 'Inscrição não pôde ser realizada!'
        insc.style.color = 'red'
        return
    }

    if (minicurso.value == 'JavaScript para Web' && modalidade.value == 'Online') {
        let insc = document.getElementById('insc')
        insc.innerText = 'Inscrição não pôde ser realizada!'
        insc.style.color = 'red'
        return
    }


    let insc = document.getElementById('insc')
    insc.style.color = 'lightgreen'
    insc.innerText = 'Inscrição Realizada com sucesso!'
    let secFim = document.getElementById('secFim')
    document.getElementById('pParticipante').innerText += nome
    document.getElementById('pEmail').innerText += email
    document.getElementById('pInstituicao').innerText += instituicao
    document.getElementById('pCurso').innerText += curso
    document.getElementById('pMinicurso').innerText += minicurso.value
    document.getElementById('pModalidade').innerText += modalidade.value
    document.getElementById('pInteresse').innerText += interesses(interesse1, interesse2, interesse3, interesse4)
    secFim.style.display = 'flex'
}

function interesses(interesse1, interesse2, interesse3, interesse4) {
    let interesses = ''
    if (interesse1 !== null)
        interesses += interesse1.value + '/ '
    if (interesse2 !== null)
        interesses += interesse2.value + '/ '
    if (interesse3 !== null)
        interesses += interesse3.value + '/ '
    if (interesse4 !== null)
        interesses += interesse4.value + '/ '
    return interesses
}

function resetSecFim() {
    document.getElementById('pParticipante').innerHTML = '<b>Participante: '
    document.getElementById('pEmail').innerHTML = '<b>Email: </b>'
    document.getElementById('pInstituicao').innerHTML = '<b>Instituição: </b>'
    document.getElementById('pCurso').innerHTML = '<b>Curso: </b>'
    document.getElementById('pMinicurso').innerHTML = '<b>Minicurso: </b>'
    document.getElementById('pModalidade').innerHTML = '<b>Modalidade: </b>'
    document.getElementById('pInteresse').innerHTML = '<b>Interesses: </b>'
    document.getElementById('secFim').style.display = 'none'
    document.getElementById('insc').innerText = ''
}

function verificarData(data) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    if (data < hoje) {
       return false
    }
    return true
}

