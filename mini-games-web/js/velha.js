let jogador1 = ''
let jogador2 = ''
let jogada = 0
let jogoAtivo = false
let matriz = [
    [, ,],
    [, ,],
    [, ,]
]
function velha(n, n1, n2) {
    if (jogoAtivo) {
        let tab = document.getElementsByName('tab')[n]
        if (matriz[n1][n2] == undefined) {
            
            if (jogada % 2 == 0) {
                matriz[n1][n2] = jogador1
                tab.innerHTML = jogador1
            } else {
                matriz[n1][n2] = jogador2
                tab.innerHTML = jogador2
            }
            jogada++
            verificar()
            if(jogoAtivo && jogada % 2 == 0){
                document.getElementById('jogador-escolhido').innerHTML = 'Jogador da Vez : ' + jogador1
            }
            if(jogoAtivo && jogada % 2 != 0){
                document.getElementById('jogador-escolhido').innerHTML = 'Jogador da Vez : ' + jogador2
            }
        } else {
            alert('Esse lugar já está ocupado! Tente outro!')
        }
    } else {
        alert('O jogo acabou! Clique para recomeçar.')
    }
}

function verificarLinha() {
    let msg = document.getElementById('msg')
    for (let i = 0; i < matriz.length; i++) {

        if (matriz[i][0] != undefined &&
            matriz[i][0] == matriz[i][1] &&
            matriz[i][1] == matriz[i][2]) {
            msg.innerHTML = `O '${matriz[i][0]}' ganhou!`
            jogoAtivo = false
            return true
        }
    }

    return false
}

function verificarColuna() {

    for (let i = 0; i < matriz.length; i++) {
        let msg = document.getElementById('msg')
        if (matriz[0][i] != undefined &&
            matriz[0][i] == matriz[1][i] &&
            matriz[1][i] == matriz[2][i]) {

            msg.innerHTML = `O '${matriz[0][i]}' ganhou!`
            jogoAtivo = false
            return true
        }
    }

    return false
}

function verificarDiagonal() {
    let msg = document.getElementById('msg')
    if (matriz[0][0] != undefined &&
        matriz[0][0] == matriz[1][1] &&
        matriz[1][1] == matriz[2][2]) {

        msg.innerHTML = `O '${matriz[0][0]}' ganhou!`
        jogoAtivo = false
        return true
    }

    if (matriz[0][2] != undefined &&
        matriz[0][2] == matriz[1][1] &&
        matriz[1][1] == matriz[2][0]) {

        msg.innerHTML = `O '${matriz[0][2]}' ganhou!`
        jogoAtivo = false
        return true
    }

    return false
}

function verificarVelha(){
    let total = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(matriz[i][j] != undefined){
                total++
            }
        }
    }
    if(total >= 9){
        msg.innerHTML = 'O jogo acabou, deu Vanilda👵!'
        jogoAtivo = false
        return true
    }
}

function verificar() {
    if (verificarLinha()) {
        return
    }
    if (verificarColuna()) {
        return
    }
    if (verificarDiagonal()) {
        return
    }
    if(verificarVelha()){
        return
    }
}

function limpar() {
    let msg = document.getElementById('msg')
    jogada = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            matriz[i][j] = undefined
        }
    }
    for (let i = 0; i < 9; i++) {
        let tab = document.getElementsByName('tab')[i]
        tab.innerHTML = ''
    }
    msg.innerHTML = ''
}

function escolherJogador1(emoji) {
    if(jogoAtivo){
        alert('Você não pode trocar de personagem enquanto o jogo estiver ativo')
        return
    }
    jogador1 = emoji
    document.getElementById('jogador1-escolhido').innerHTML = 'Jogador 1: ' + jogador1
}
function escolherJogador2(emoji) {
    if(jogoAtivo){
        alert('Você não pode trocar de personagem enquanto o jogo estiver ativo')
        return
    }
    jogador2 = emoji
    document.getElementById('jogador2-escolhido').innerHTML = 'Jogador 2: ' + jogador2
}

function iniciarJogo() {
    if (jogador1 === '' || jogador2 === '') {
        alert('Os dois jogadores não foram escolhidos')
        return
    }
    jogoAtivo = true
    limpar()
    document.getElementById('jogador-escolhido').innerHTML = 'Jogador da Vez : ' + jogador1
}
