function calcularIMC() {
    var peso, altura, imc;
    peso=document.getElementById("peso").value;
    altura=document.getElementById("talla").value/100;
    imc=peso/(altura*altura);

    alert( " IMC :"  + imc.toFixed(2));

    }
