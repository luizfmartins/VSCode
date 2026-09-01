let jogada = 0
let fim = false
let matriz = [
    [, ,],
    [, ,],
    [, ,]
]
let msg = document.getElementById('msg')
function velha(n, n1, n2) {
    if (!fim) {
        let tab = document.getElementsByName('tab')[n]
        if (matriz[n1][n2] == undefined) {
            if (jogada % 2 == 0) {
                matriz[n1][n2] = 'X'
                tab.innerHTML = 'X'
            } else {
                matriz[n1][n2] = 'O'
                tab.innerHTML = 'O'
            }
            jogada++
            verificar()
        } else {
            alert('Esse lugar já está ocupado! Tente outro!')
        }
    } else {
        alert('O jogo acabou! Clique para recomeçar.')
    }
}

function verificarLinha() {

    for (let i = 0; i < matriz.length; i++) {

        if (matriz[i][0] != undefined &&
            matriz[i][0] == matriz[i][1] &&
            matriz[i][1] == matriz[i][2]) {

            msg.innerHTML = `O '${matriz[i][0]}' ganhou!`
            return true
        }
    }

    return false
}

function verificarColuna() {

    for (let i = 0; i < matriz.length; i++) {

        if (matriz[0][i] != undefined &&
            matriz[0][i] == matriz[1][i] &&
            matriz[1][i] == matriz[2][i]) {

            msg.innerHTML = `O '${matriz[0][i]}' ganhou!`
            return true
        }
    }

    return false
}

function verificarDiagonal() {

    if (matriz[0][0] != undefined &&
        matriz[0][0] == matriz[1][1] &&
        matriz[1][1] == matriz[2][2]) {

        msg.innerHTML = `O '${matriz[0][0]}' ganhou!`
        return true
    }

    if (matriz[0][2] != undefined &&
        matriz[0][2] == matriz[1][1] &&
        matriz[1][1] == matriz[2][0]) {

        msg.innerHTML = `O '${matriz[0][2]}' ganhou!`
        return true
    }

    return false
}

function verificar() {
    if (verificarLinha()) {
        fim = true
        return
    }
    if (verificarColuna()) {
        fim = true
        return
    }
    if (verificarDiagonal()) {
        fim = true
        return
    }
}

function recomeçar() {
    jogada = 0
    fim = false
    for(let i = 0; i < matriz.length ; i++){
        for(let j = 0; j < matriz[0].length; j++){
            matriz[i][j] = undefined
        }
    }
    for(let i = 0; i < 9; i++){
       let tab = document.getElementsByName('tab')[i]
        tab.innerHTML = ''
    }
    msg.innerHTML = ''
}