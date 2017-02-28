function calculaIMC(){
  var peso, altura, imc;
  peso=prompt("Ingrese el Dato de Peso");
  altura=prompt("Ingrese el Dato de la Altura");
  imc=peso/(altura*altura);
  alert( " IMC :"  + imc.toFixed(4) );
}
