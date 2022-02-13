var tela = document.getElementById('tela');


function addNumber(num){
    return tela.innerHTML += num;
}

function resultado(){
    return tela.innerHTML = eval(tela.innerHTML);
}


function clean(){
    tela.innerHTML = '';
}


