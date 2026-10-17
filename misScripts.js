function mostrarResultado(resultado) {
    document.getElementById("primerResultado").value = resultado;
}

function mostrarResultado2(resultado2){
    document.getElementById("resultadoRedondeo").textContent = resultado2;
}

function sumar(){
    let primerValor = document.getElementById("primerNumero").value;
    let segundoValor = document.getElementById("segundoNumero").value;
    
    mostrarResultado(+primerValor + +segundoValor);
   }

function restar(){
    let primerValor = document.getElementById("primerNumero").value;
    let segundoValor = document.getElementById("segundoNumero").value;
        
    mostrarResultado(primerValor - +segundoValor);
}

function multiplicar(){
    let primerValor = document.getElementById("primerNumero").value;
    let segundoValor = document.getElementById("segundoNumero").value;
      
    mostrarResultado(+primerValor * +segundoValor);
}

function dividir(){
    let primerValor = document.getElementById("primerNumero").value;
    let segundoValor = document.getElementById("segundoNumero").value;
       
    mostrarResultado(+primerValor / +segundoValor);
}

function potencia(){
    let primerValor = document.getElementById("primerNumero").value;
    let segundoValor = document.getElementById("segundoNumero").value;

    mostrarResultado(Math.pow(primerValor, segundoValor));
}

function raizCuadra(){
    let segundoValor = document.getElementById("segundoNumero").value;
    
    mostrarResultado(Math.sqrt(segundoValor));
}

function valorAbsoluto(){
    let segundoValor = document.getElementById("segundoNumero").value;
    
    mostrarResultado(Math.abs(segundoValor));
}

function random(){
    let segundoValor = document.getElementById("segundoNumero").value;
    
    mostrarResultado(Math.random());
}

function redondear(){
    let number = document.getElementById("primerResultado").value;
    
    mostrarResultado2(Math.round(number));
}

function redondearHaciaAbajo(){
     let number = document.getElementById("primerResultado").value;
    
    mostrarResultado2(Math.floor(number));
}

function redondearHaciaArriba(){
     let number = document.getElementById("primerResultado").value;
    
    mostrarResultado2(Math.ceil(number));
}