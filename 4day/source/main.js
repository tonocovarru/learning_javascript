/*var tipo_cambiousd = 18.88;
var precio_litrogasolina = 19.37;

function validaNumero(numero){
    return (numero!=undefined && numero != null && typeof(numero) === "number");    
}

function ConversionUSD2MXP(importUSD){
    if(validaNumero(importUSD)){
        return importUSD * tipo_cambiousd;
    }
    return 0;
}

function ConversionMXP2LitroGasolina(importeMXP){
    if(validaNumero(importeMXP)){
        return importeMXP / precio_litrogasolina;
    }
    return 0;
}

function USD2LitrosGasolina(importeUSD){
    return ConversionMXP2LitroGasolina(ConversionUSD2MXP(importeUSD));
}

//console.log(ConversionUSD2MXP(2));
console.log(USD2LitrosGasolina(2));
*/




/*
input   30920
output  02903
*/

/*
function reverseString(valor_entrada){
    valor_entrada = ""+valor_entrada;
    return valor_entrada.split("").reverse().join("");
}

console.log(reverseString(30920));
console.log(reverseString("HOLA"));
*/
/*
function reverString(entrada){
    var entrada_reversa ="";
    for(var i=entrada.length-1;i>=0;i--){
        entrada_reversa += entrada[i];
    }
    return entrada_reversa;
}
console.log(reverString("30920"));
*/
// con ASCII

//INPUT - 'hola a todos'
//OUTPUT - 'Hola A Todos'


function capitalizeWord(word){
    var wordArray = word.split(" ");
    for(var i=0;i<wordArray.length;i++){
        wordArray[i] = wordArray[i].substr(0,1).toUpperCase() +  wordArray[i].substr(1);
    }
    return wordArray.join(" ");
}



function capitlize(word){
    return word.split(" ").map(function (element){
        var wordArray= element.split("");
        wordArray[0] = wordArray[0].toUpperCase();
        return wordArray.join("");
    }).join(" ");
};


console.log(capitlize("hola a todos"));
