let jogador1 = ''
let jogador2 = ''
let jogadorAtual = ''

function escolherJogador1(emoji) {
    jogador1 = emoji
    document.getElementById('jogador1-escolhido')
    innerHTML = 'Jogador 1: ' + jogador1
}
function escolherJogador2(emoji) {
    jogador2 = emoji
    document.getElementById('jogador2-escolhido')
    innerHTML = 'Jogador 2: ' + jogador2
}

function iniciarJogo(){

}

function jogar(celula){
    if(!jogoAtivo)
        return

    if(celula.innerText !== '')
        return

    celular.innerText = jogadorAtual

    if(verificarVitoria()){
        document.getElementById('jogador-atual').innerText = 'Jogador' + jogadorAtual + "venceu!"
        jogoAtivo = false
        return
    }
    if(verificarEmpate()){
        document.getElementById('jogador-atual').innerText = 'Deu Vanilda!'
        jogoAtivo = false
        return
    }
    trocarJogador()
}