function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
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