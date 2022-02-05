function addNumber(num){

    var numero = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = numero + num;

}

function resultado(){
    var resultado = document.getElementById('tela').innerHTML;
    if(resultado){
        document.getElementById('tela').innerHTML = eval(resultado)

    }else{
        document.getElementById('tela').innerHTML = "";
    }
}

function clean(){
    document.getElementById('tela').innerHTML = "";
}