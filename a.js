function velha(){
  var matriz = [
    [ , , ],
    [ , , ],
    [ , , ]
  ]
  var jogada = ''
  for(var i = 0; i < 9; i++ ){
    if(i % 2 == 0){
      jogada = 'X'
    } else {
      jogada = 'O'
    }
  }
}

function verificarColuna(matriz){
  for(var i = 0; i < matriz.length; i++){
    var numX = 0
    var numO = 0
    for(var j = 0; j < matriz[0].length; j++){
      if(matriz[i][j] == 'X'){
        numX++
      } else if(matriz[i][j] == 'O'){
        numO++
      }
    }
    if(numX >= 3){
      //Vitória X
    } else if (numO >= 3){
      //Vitória O
    }
  }
}

function verificarLinha(matriz){
  for(var i = 0; i < matriz.length; i++){
    var numX = 0
    var numO = 0
    for(var j = 0; j < matriz[0].length; j++){
      if(matriz[j][i] == 'X'){
        numX++
      } else if(matriz[j][i] == 'O'){
        numO++
      }
    }
    if(numX >= 3){
      //Vitória X
    } else if (numO >= 3){
      //Vitória O
    }
  }
}

function verificarDiagonal(matriz){
  for(var i = 0; i < matriz.length; i++){
    var numX = 0
    var numO = 0
    for(var j = 0; j < matriz[0].length; j++){
      if(i==j && matriz[i][j] == 'X'){
        numX++
      } else if(i==j && matriz[i][j] == 'O'){
        numO++
      }
    }
    if(numX >= 3){
      //Vitória X
    } else if (numO >= 3){
      //Vitória O
    }
  }
}

 function verificar(matriz){
   verificarLinha(matriz)
   verificarColuna(matriz)
   verificarDiagonal(matriz)
 }