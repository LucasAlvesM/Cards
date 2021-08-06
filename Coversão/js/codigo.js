function calcular(event) {
    let num1 = parseFloat(document.getElementById("numero1").value)
    let num2 = parseFloat(document.getElementById("numero2").value)
    let operacao = event.target.textContent
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
    let operacao2 =  event.target.textContent
    let resultado2

    switch (operacao2) {
        case "raiz":
            console.log("raiz")
            resultado2 = num3 * num3           
            break;
    
        default:
            console.log("Não é uma operacão")
            break;
    }
    document.getElementById("resultado3").textContent = resultado3
}

function graus(event) {
    let num4 = parseFloat(document.getElementById("numero4").value)
    let operacao4 = event.target.textContent
    let resultado3

    switch (operacao4) {
        case "celsius":
            console.log("celsius")
            resultado3 = (num4 - 32) * 5 / 9
            break;

        case "farenheit":
            console.log("farenheit")
            resultado3 = (num4 * 1.8) + 32
            break;

        default:
            console.log("Não é uma operacão")
            break;
    }
    document.getElementById("resultado3").textContent = resultado3
}
function conversao() {
    let num5 = parseFloat(document.getElementById("numero5").value)
    let taxa = 5.24;
    let resultado4

    resultado4 = num5 / taxa;

    document.getElementById("resultado4").textContent = resultado4
}
function verificar() {
    let num6 = parseInt(document.getElementById("numero6").value)
    let resultado5

    if (num6 % 2 == 0) {
        resultado5 = ("Par")
    } else {
        resultado5 = ("Impar")
    }
    document.getElementById("resultado5").textContent = resultado5
}
function triangulo() {
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let c = parseInt(document.getElementById("c").value)
    let resultado6

    if (a < b + c && b < a + c && c < a + b) {
    }
    if (a == b && b == c) {

        resultado6 = ("Triâgulo Equilátero");
    }
    else if (a == b || a == c || c == b) {
        resultado6 = ("Triâgulo Isósceles");
    }
    else {
        resultado6 = ("Triângulo Escaleno");
    }
    document.getElementById("resultado6").textContent = resultado6
}
function notas() {
    let n1 = parseInt(document.getElementById("n1").value)
    let n2 = parseInt(document.getElementById("n2").value)
    let n3 = parseInt(document.getElementById("n3").value)
    let n4 = parseInt(document.getElementById("n4").value)
    let mf
    let resultado8

    mf = (n1 + n2 + n3 + n4) / 4;

    if (mf < 5) {
        resultado8 = ("Você foi Reprovado...");
    }
    else if (mf >= 7) {
        resultado8 = ("Você foi Aprovado...");
    }
    else {
        resultado8 = ("Recuperação...");
    }

    document.getElementById("resultado8").textContent = resultado8
}
function fatorial() {
    let num6 = parseInt(document.getElementById("num6").value)
    let contador = 1;
    let fatorial = 1;
    let resultado9;

while (contador <= num6) {
    fatorial = fatorial * contador;
    contador++;
}
 resultado9=`${num6}!=${fatorial}`;

 document.getElementById("resultado9").textContent = resultado9
}

function verificaCPF() {
    let cpf = document.getElementById("entrance").value
    // let very = event.target.textContent
    let result 
  
    //Obtendo o terceiro segmento do CPF
    let segment = parseInt(cpf.split("-")[0].split(".")[2].split("")[2])
  
    switch (segment) {
      case 0:
        result = "RS"
        break;
      case 1:
        result = "DF, GO, MT, MS, TO"
        break;
      case 2:
        result = "AM, PA, RR, AP, AC, RO"
        break;
      case 3:
        result = "CE, MA, PI"
        break;
      case 4:
        result = "PB, PE, AL, RN"
        break;
      case 5:
        result = "BA, SE"
        break;
      case 6:
        result = "MG"
        break;
      case 7:
        result = "RJ, ES"
        break;
      case 8:
        result = "SP"
        break;
      case 9:
        result = "PR, SC"
        break;
    }
  
    document.getElementById("exit").textContent = result
  }