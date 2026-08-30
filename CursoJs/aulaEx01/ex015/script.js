function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var mes = data.getMonth() + 1
    var dia = data.getDate()
    var fAno = document.getElementById('txtano')
    var fMes = document.getElementById('txtmes')
    var fDia = document.getElementById('txtdia')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var idade = 0

    //Cálculo da idade
    if (fMes.value > mes || fMes.value == mes && fDia.value > dia) {
        idade = ano - fAno.value - 1
    } else {
        idade = ano - fAno.value
    }
    if (!validacao(fAno, fMes, fDia, ano)) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 13) {
                img.src = 'Images/homem-crianca.png'
            } else if (idade < 21) {
                img.src = 'Images/homem-jovem.png'
            } else if (idade < 48) {
                img.src = 'Images/homem-adulto.png'
            } else {
                img.src = 'Images/homem-idoso.png'
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 13) {
                img.src = 'Images/mulher-crianca.png'
            } else if (idade < 21) {
                img.src = 'Images/mulher-jovem.png'
            } else if (idade < 48) {
                img.src = 'Images/mulher-adulta.png'
            } else {
                img.src = 'Images/mulher-idosa.png'
            }
        }
        msg.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}

function validacao(fAno, fMes, fDia, ano) {
    if (fMes.value < 1 || fMes.value > 12 || fDia.value < 1 || fDia.value > 31 || fAno.value.length == 0 || Number(fAno.value) > ano) {
        return false
    }
    return true
}