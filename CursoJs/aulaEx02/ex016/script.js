function contar() {
    var ini = document.getElementById('txtini').value
    var fim = document.getElementById('txtfim').value
    var passo = document.getElementById('txtpasso').value
    var msg = document.getElementById('msg')
    msg.innerHTML = 'Contando: <br>'
    if (ini.length == 0 || fim.length == 0 || passo.length == 0) {
        msg.innerHTML = 'Impossível Contar!'
    } else {
        ini = Number(ini)
        fim = Number(fim)
        passo = Number(passo)

        if (passo <= 0) {
            alert('Passo Inválido! Considerando PASSO 1')
            passo = 1
        }

        if (ini < fim) {
            for (var i = ini; i <= fim; i += passo) {
                msg.innerHTML += `${i} 👉 `
            }
        } else {
            for (var i = ini; i >= fim; i -= passo) {
                msg.innerHTML += `${i} 👉 `
            }
        }
        msg.innerHTML += '🚩'
    }
}