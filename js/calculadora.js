function calcular(event){
    let num1 = parseFloat(document.getElementById("numero1").value)
    let num2 = parseFloat(document.getElementById("numero2").value)
    let operacao =  event.target.textContent
    let resultado 

    switch (operacao) {
        case "+":
            console.log("soma")
            resultado = num1 + num2            
            break;

        case "-":
            console.log("subtração")
            resultado = num1 - num2            
            break;

        case "*":
            console.log("multiplicação")
            resultado = num1 * num2            
            break;

        case "/":
            console.log("divisão")
            resultado = num1 / num2            
            break;
    
        default:
            console.log("Não é uma operacão")
            break;
    }
    document.getElementById("resultado").textContent = resultado
}


function raizQuadrada(event){
    let num3 = parseFloat(document.getElementById("numero3").value)
    let operacao3 =  event.target.textContent
    let resultado3

    switch (operacao3) {
        case "raiz":
            console.log("raiz")
            resultado3 = num3 * num3            
            break;
    
        default:
            console.log("Não é uma operacão")
            break;
    }
    document.getElementById("resultado3").textContent = resultado3
}

function graus(event){
    let num4 = parseFloat(document.getElementById("numero4").value)
    let operacao4 =  event.target.textContent
    let resultado4

    switch (operacao4) {
        case "celsius":
            console.log("celsius")
            resultado4 = (num4 - 32) * 5/9      
            break;
    
        case "farenheit":
            console.log("farenheit")
            resultado4 = (num4*1.8) + 32              
            break;
    
        default:
            console.log("Não é uma operacão")
            break;
    }
    document.getElementById("resultado4").textContent = resultado4
}
function cotacao(event){
    let num5 = parseInt(document.getElementById("numero5").value)
    let operacao5 =  event.target.textContent
    let resultado5

    switch (operacao5) {
        case "dolar":
            console.log("dolar")
            resultado5 = num5  * 5
            break;
    
        case "real":
            console.log("real")
            resultado5 = num5  *  5          
            break;
    
        default:
            console.log("Não é uma operacão")
            break;
    }
    document.getElementById("resultado5").textContent = resultado5
  
    
}



function parImpar(event) {
    let num6 = parseInt(document.getElementById("numero6").value)
    let resultadoParImpar

    if (num6%2==0) {
        resultadoParImpar = ("Par");
    }
    else{
        resultadoParImpar = ("Ímpar");
    }

    document.getElementById("resultadoParImpar").textContent = resultadoParImpar
}

function fatorial(event) {
    let numF = parseInt(document.getElementById("numeroF").value)
    let contador = 1;
    let fatorial = 1;
    let rfatorial;

    while (contador <= numF) {
        fatorial = fatorial * contador;
        contador++;
    }
    rfatorial = (`${numF}! = ${fatorial}`);

    document.getElementById("rfatorial").textContent = rfatorial
}



function triangulo(event) {
    let num9 = parseInt(document.getElementById("numero9").value)
    let num10 = parseInt(document.getElementById("numero10").value)
    let num11 = parseInt(document.getElementById("numero11").value)
    let resultadoTriangulo

    if (num9 == num10 && num10 == num11) {
        resultadoTriangulo = ("Equilátero");
    }
    else if (num9 == num10 || num10 == num11 || num9 == num11) {
        resultadoTriangulo = ("Isósceles");
    }
    else{
        resultadoTriangulo = ("Escaleno");
    }

    document.getElementById("resultadoTriangulo").textContent = resultadoTriangulo
}

function verificaCPF(event) {
    let cpf = document.getElementById("entrada").value
    let resultadoCPF = ""

    let segmento = parseInt(cpf.split("-")[0].split(".")[2].split("")[2])
    
    switch(segmento)
    {
        case 0:
            resultadoCPF = "Rio Grande do Sul"
            break
        case 1:
            resultadoCPF = "Distrito Federal, Goiás, Mato Grosso, Mato Grosso do Sul ou Tocantins"
            break
        case 2:
            resultadoCPF = "Amazonas, Pará, Roraima, Amapá, Acre ou Rondônia"
            break
        case 3:
            resultadoCPF = "Ceará, Maranhão ou Piauí"
            break
        case 4:
            resultadoCPF = "Paraíba, Pernambuco, Alagoas ou Rio Grande do Norte"
            break
        case 5:
            resultadoCPF = "Bahia ou Sergipe"
            break
        case 6:
            resultadoCPF = "Minas Gerais"
            break
        case 7:
            resultadoCPF = "Rio de Janeiro ou Espírito Santo"
            break
        case 8:
            resultadoCPF = "São Paulo"
            break
        case 9:
            resultadoCPF = "Paraná ou Santa Catarina"
            break
        default:
            resultadoCPF = "Invalido"
            break;
    }

    document.getElementById("resultadoCPF").textContent = resultadoCPF
}