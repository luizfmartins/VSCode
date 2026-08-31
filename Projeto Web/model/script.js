var jogada = 0
var matriz = [
    [, ,],
    [, ,],
    [, ,]
]
msg = document.getElementById('msg')
function velha(n, n1, n2) {
    var tab = document.getElementsByName('tab')[n]
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
}

function verificarLinha() {

    for (var i = 0; i < matriz.length; i++) {

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

    for (var i = 0; i < matriz.length; i++) {

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
    if (verificarLinha())
        return
    if (verificarColuna())
        return
    if (verificarDiagonal())
        return
}