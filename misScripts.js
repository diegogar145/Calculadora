function mostrarResultado(resultado) {
    document.getElementById("primerResultado").value = resultado;
}

function mostrarResultado2(resultado2){
    document.getElementById("resultadoRedondeo").textContent = resultado2;
}

function sumar(){
    let primerValor = document.getElementById("primerNumero").value;
    let segundoValor = document.getElementById("segundoNumero").value;
    resultado = +primerValor + +segundoValor;

    mostrarResultado(resultado);
   }

function restar(){
    let primerValor = document.getElementById("primerNumero").value;
    let segundoValor = document.getElementById("segundoNumero").value;
    resultado = +primerValor - +segundoValor;
    
    mostrarResultado(resultado);
}

function multiplicar(){
    let primerValor = document.getElementById("primerNumero").value;
    let segundoValor = document.getElementById("segundoNumero").value;
    resultado = +primerValor * +segundoValor;
   
    mostrarResultado(resultado);
}

function dividir(){
    let primerValor = document.getElementById("primerNumero").value;
    let segundoValor = document.getElementById("segundoNumero").value;
    resultado = +primerValor / +segundoValor;
   
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
    let number = document.getElementById("primerResultado").value;
    resultado2 = Math.round(number)
    mostrarResultado2(resultado2);
}

function redondearHaciaAbajo(){
     let number = document.getElementById("primerResultado").value;
    resultado2 = Math.floor(number)
    mostrarResultado2(resultado2);
}

function redondearHaciaArriba(){
     let number = document.getElementById("primerResultado").value;
    resultado2 = Math.ceil(number)
    mostrarResultado2(resultado2);
}