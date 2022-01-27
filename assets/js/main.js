var num1;
var num2;
var operacion;

//guardamos los elementos de html en variables por medio de los id

function init() {
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("restar");
    var multiplicacion = document.getElementById("multiplicar");
    var dividir = document.getElementById("dividir");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
}

//Capturamos los eventos de click
uno.onclick = function(e) {
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function(e) {
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function(e) {
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function(e) {
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function(e) {
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function(e) {
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function(e) {
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function(e) {
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function(e) {
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function(e) {
    resultado.textContent = resultado.textContent + "0";
}
reset.onclick = function(e) {
    resetear();
}

suma.onclick = function(e) {
    num1 = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e) {
    num1 = resultado.textContent;
    operacion = "2";
    limpiar();
}
multiplicacion.onclick = function(e) {
    num1 = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e) {
    num1 = resultado.textContent;
    operacion = "/";
    limpiar();
}