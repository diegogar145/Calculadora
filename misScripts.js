function mostrarResultado(resultado) {
    document.getElementById("priemrResultado").textContent = resultado;
}

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

function potencia(){
    let primerValor = document.getElementById("primerNumero").value;
    let segundoValor = document.getElementById("segundoNumero").value;
    resultado = Math.pow(primerValor, segundoValor)

    mostrarResultado(resultado);
}

function raizCuadra(){
    let primerValor = document.getElementById("primerNumero").value;
    let segundoValor = document.getElementById("segundoNumero").value;
    resultado = Math.sqrt(primerValor, segundoValor)

    mostrarResultado(resultado);
}

function redondear(){
    
}