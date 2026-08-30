function tabuada(){
    var num = document.getElementById('txtnum').value
    var tab = document.getElementById('seltab')
    if(num.length == 0){
        alert('Por favor digite um número!')
    } else {
        num = Number(num)
        tab.innerHTML = ''
        for(var i = 1; i <= 10; i++){
            var item = document.createElement('option')
            item.text = `${num} x ${i} = ${num * i}`
            tab.appendChild(item)
        }
    }
}