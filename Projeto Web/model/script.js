var jogada = 0
var matriz = [
    [, ,],
    [, ,],
    [, ,]
]
msg = document.getElementById('msg')
function velha(n, n1, n2) {
    var tab = document.getElementsByName('tab')[n]
    if (jogada % 2 == 0) {
        matriz[n1][n2] = 'X'
        tab.innerHTML = 'X'
    } else {
        matriz[n1][n2] = 'O'
        tab.innerHTML = 'O'
    }
    jogada++
    verificar()
    
}

function verificarLinha() {
    for (var i = 0; i < matriz.length; i++) {
        var numX = 0
        var numO = 0
        for (var j = 0; j < matriz[0].length; j++) {
            if (matriz[i][j] == 'X') {
                numX++
            } else if (matriz[i][j] == 'O') {
                numO++
            }
        }
        if (numX >= 3) {
            msg.innerHTML = "O 'X' ganhou!"
        } else if (numO >= 3) {
            msg.innerHTML = "O 'O' ganhou!"
        }
    }
}

function verificarColuna(matriz) {
    for (var i = 0; i < matriz.length; i++) {
        var numX = 0
        var numO = 0
        for (var j = 0; j < matriz[0].length; j++) {
            if (matriz[j][i] == 'X') {
                numX++
            } else if (matriz[j][i] == 'O') {
                numO++
            }
        }
        if (numX >= 3) {
            msg.innerHTML = "O 'X' ganhou!"
        } else if (numO >= 3) {
            msg.innerHTML = "O 'O' ganhou!"
        }
    }
}

function verificarDiagonal(matriz) {
    for (var i = 0; i < matriz.length; i++) {
        var numX = 0
        var numO = 0
        for (var j = 0; j < matriz[0].length; j++) {
            if (i == j && matriz[i][j] == 'X') {
                numX++
            } else if (i == j && matriz[i][j] == 'O') {
                numO++
            }
        }
        if (numX >= 3) {
            msg.innerHTML = "O 'X' ganhou!"
        } else if (numO >= 3) {
            msg.innerHTML = "O 'O' ganhou!"
        }
    }
}

function verificar(matriz) {
    verificarLinha(matriz)
    verificarColuna(matriz)
    verificarDiagonal(matriz)
}