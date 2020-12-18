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
function graus(event) {
    let num4 = parseFloat(document.getElementById("numero4").value)
    let operacao4 = event.target.textContent
    let resultado4

    switch (operacao4) {
        case "celsius":
            console.log("celsius")
            resultado4 = (num4 - 32) * 5 / 9
            break;

        case "farenheit":
            console.log("farenheit")
            resultado4 = (num4 * 1.8) + 32
            break;

        default:
            console.log("Não é uma operacão")
            break;
    }
    document.getElementById("resultado4").textContent = resultado4
}
function verificar(event) {
    let num = parseInt(document.getElementById("numero").value)
    let resultado5

    if (num % 2 == 0) {
        resultado5 = ("Par")
    } else {
        resultado5 = ("Impar")
    }
    document.getElementById("resultado5").textContent = resultado5
}
function conversao(event) {
    let dolar = parseFloat(document.getElementById("dolar").value)
    let taxa = 5.08;
    let resultado6

    resultado6 = dolar / taxa;

    document.getElementById("resultado6").textContent = resultado6
}
function triangulo(event) {
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let c = parseInt(document.getElementById("c").value)
    let resultado7

    if (a < b + c && b < a + c && c < a + b) {
    }
    if (a == b && b == c) {

        resultado7 = ("Triâgulo Equilátero");
    }
    else if (a == b || a == c || c == b) {
        resultado7 = ("Triâgulo Isósceles");
    }
    else {
        resultado7 = ("Triângulo Escaleno");
    }
    document.getElementById("resultado7").textContent = resultado7
}
function notas(event) {
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
function fatorial(event) {
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