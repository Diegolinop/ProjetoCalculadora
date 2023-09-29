var themeValue = 0;

function insert(numum){
    var numerodois = document.getElementById('resultado').innerHTML;
    if (numerodois.toString().length<17){
        document.getElementById('resultado').innerHTML = numerodois + numum;
    } else {
        alert("O VALOR É GRANDE DEMAIS");
    }
}

function theme(){
    if (themeValue == 0){
        document.getElementById("theme").style.background = "#ebe9e4";
        themeValue = 1;
    } else {
        document.getElementById("theme").style.background = "#313233";
        themeValue = 0;
    } 
}

function clean () {
    document.getElementById('resultado').innerHTML = "";
}

function back () {
    var voltar = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = voltar.substring(0, voltar.length -1);
}

function calculator() {
    var calcular = document.getElementById('resultado').innerHTML;

    if(calcular) {
        document.getElementById('resultado').innerHTML = eval(calcular)
    }
}