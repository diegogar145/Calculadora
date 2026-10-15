function sumar(){
    let primerValor = document.getElementById("primerNumero").value;
    let segundoValor = document.getElementById("segundoNumero").value;
    resultado= +primerValor + +segundoValor;

    mostrarResultado(resultado);
   }

function restar(){
    let primerValor = document.getElementById("primerNumero").value;
    let segundoValor = document.getElementById("segundoNumero").value;
    resultado= +primerValor - +segundoValor;
    
    mostrarResultado(resultado);
}

function multiplicar(){
    let primerValor = document.getElementById("primerNumero").value;
    let segundoValor = document.getElementById("segundoNumero").value;
    resultado= +primerValor * +segundoValor;
   
    mostrarResultado(resultado);
}

function dividir(){
    let primerValor = document.getElementById("primerNumero").value;
    let segundoValor = document.getElementById("segundoNumero").value;
    resultado= +primerValor / +segundoValor;
   
    mostrarResultado(resultado);
}


function mostrarResultado(resultado) {
    document.getElementById("priemrResultado").textContent = resultado;
}