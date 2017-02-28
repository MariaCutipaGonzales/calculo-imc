function calculaIMC(){
  var peso, altura, imc, leyenda;
	  peso=prompt("Ingrese su peso: ");
	  altura=prompt("Ingrese su altura: ");
	  
	  imc=peso/(altura*altura);
  alert("Su Indice de Masa Corporal es de: "  + imc.toFixed(4));
}