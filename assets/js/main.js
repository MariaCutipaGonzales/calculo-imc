function calcularIMC(){
var formulario = document.getElementById("formulario");

var kilos = formulario.kilos.value;
var altura = formulario.centimetros.value/100;

var imc= Math.round(kilos/(altura * altura));
alert(imc.toFixed(2));
}
