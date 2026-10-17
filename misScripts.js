function mostrarResultado(resultado) {
    document.getElementById("primerResultado").value = resultado;
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
    let segundoValor = document.getElementById("segundoNumero").value;
    resultado = Math.sqrt(segundoValor)

    mostrarResultado(resultado);
}

function valorAbsoluto(){
    let segundoValor = document.getElementById("segundoNumero").value;
    resultado = Math.abs(segundoValor)
    mostrarResultado(resultado);
}

function random(){
    let segundoValor = document.getElementById("segundoNumero").value;
    resultado = Math.random()
    mostrarResultado(resultado);
}

function redondear(){
    
}