function calcular() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
      

    if(document.getElementById("radio-adi").checked){

        var result = num1 + num2; 
        document.getElementById("resposta").innerHTML = "O resultado é: " + result;

    }else if(document.getElementById("radio-sub").checked){

        var result = num1 - num2; 
        document.getElementById("resposta").innerHTML = "O resultado é: " + result;

    }else if(document.getElementById("radio-mult").checked){

        var result = num1 * num2;
        document.getElementById("resposta").innerHTML = "O resultado é: " + result.toFixed(2);
    
    }else if(document.getElementById("radio-divis").checked){
        if(num2 == 0){
            document.getElementById("resposta").innerHTML = "impossivel dividir por 0";
        }else{
            var result = num1 / num2;
            document.getElementById("resposta").innerHTML = "O resultado é: " + result.toFixed(2);
        }
    }else{
        document.getElementById("resposta").innerHTML = "selecione um operador";
    }
    
}

