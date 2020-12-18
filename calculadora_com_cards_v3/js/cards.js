function calcular(event) {
    let num1 = parseFloat(document.getElementById("n1").value)
    let num2 = parseFloat(document.getElementById("n2").value)
    let operacao = event.target.textContent
    let resultado

    switch (operacao) {
        case "Soma":
            console.log("soma");
            resultado = num1 + num2;
            break;
    
        case "Subtração":
            console.log("subtração");
            resultado = num1 - num2;
            break;
        case "Multiplicação":
            console.log("multiplicação");
            resultado = num1 * num2;
            break;
        case "Divisão":
            console.log("divisão");
            resultado = num1 / num2;
            break;
        default:
            console.log("Não é uma operação");
    }
    document.getElementById("resultado").textContent = resultado
}

function graus_temp(event) {
    let num2 = parseFloat(document.getElementById("numero2").value)
    let operacao2 = event.target.textContent
    let resultado2

    switch (operacao2) {
        case "Fahrenheit para Celsius":
            console.log("celsius");
            resultado2 = (num2 - 32) * 5/9;
            break;
    
        case "Celsius para Fahrenheit":
            console.log("fahrenheit");
            resultado2 = (num2 * 1.8) + 32;
            break;

        default:
            console.log("Não é uma operação");
            break;
    }
    document.getElementById("resultado2").textContent = resultado2
}

function parImpar(event) {
    let num3 = parseInt(document.getElementById("numero3").value)
    let resultado3

    if (num3%2==0) {
        resultado3 = ("Este número é Par");
    }
    else{
        resultado3 = ("Este número é Ímpar");
    }

    document.getElementById("resultado3").textContent = resultado3
}

function triangulo(event) {
    let num4 = parseInt(document.getElementById("numero4").value)
    let num5 = parseInt(document.getElementById("numero5").value)
    let num6 = parseInt(document.getElementById("numero6").value)
    let resultado4

    if (num4 == num5 && num5 == num6) {
        resultado4 = ("Equilátero");
    }
    else if (num4 == num5 || num5 == num6 || num4 == num6) {
        resultado4 = ("Isósceles")
    }
    else{
        resultado4 = ("Escaleno");
    }

    document.getElementById("resultado4").textContent = resultado4
}

function conversor_moedas(event) {
    let precoReal = parseFloat(document.getElementById("numero7").value)
    let taxa = 5.05
    let resultado5 

    resultado5 = precoReal / taxa;

    document.getElementById("resultado5").textContent = resultado5
}

function equacao2grau(event) {
    let num8 = parseFloat(document.getElementById("numero8").value)
    let num9 = parseFloat(document.getElementById("numero9").value)
    let num10 = parseFloat(document.getElementById("numero10").value)
    let delta 
    let x1
    let x2
    let resultado6

    delta = (num9 * num9) - 4 * num8 * num10;

    alert("A soma dos números resulta em: " + delta);
    
    x1 = (-num9 + Math.Sqrt(delta)) / 2 * num8;
    x2 = (-num9 - Math.Sqrt(delta)) / 2 * num8;
    
    if (delta > 0) {
        resultado6 = ("Duas Raízes reais foram obtidas:" + x1 + x2);
        
    }
    else if (delta == 0) {
        resultado6 = ("Duas Raízes reais iguais foram obtidas:" + x1 + x2);
        
    }
    else{
        resultado6 = ("Não possui raízes reais");
    }

    document.getElementById("resultado6").textContent = resultado6
}

function notas(event) {
    let n11 = parseFloat(document.getElementById("numero11").value)
    let n12 = parseFloat(document.getElementById("numero12").value)
    let n13 = parseFloat(document.getElementById("numero13").value)
    let n14 = parseFloat(document.getElementById("numero14").value)
    let resultado7
    let media

    media = (n11 + n12 + n13 + n14) /4;

    if (media >= 7){
        resultado7 = ("Parabéns, você foi aprovado!");
    }
    else if (media < 5){
        resultado7 = ("Você foi reprovado, estude mais da próxima vez!");
    }
    else{
        resultado7 = ("Você ficou de recuperação, essa é a sua última chance!");
    }

    document.getElementById("resultado7").textContent = resultado7
}

function fatorial(event) {
    let num15 = parseInt(document.getElementById("numero15").value)
    let contador = 1;
    let fatorial = 1;
    let resultado8;

    while (contador <= num15) {
        fatorial = fatorial * contador;
        contador++;
    }
    resultado8 = (`${num15}! = ${fatorial}`);

    document.getElementById("resultado8").textContent = resultado8
}

function Verificarcpf(event) {
    let cpf = document.getElementById("entrada").value
    let resultado = ""

    let segmento = parseInt(cpf.split("-")[0].split(".")[2].split("")[2])
    
    switch(segmento)
    {
        case 0:
            resultado = "Rio Grande do Sul"
            break
        case 1:
            resultado = "Distrito Federal, Goiás, Mato Grosso, Mato Grosso do Sul ou Tocantins"
            break
        case 2:
            resultado = "Amazonas, Pará, Roraima, Amapá, Acre ou Rondônia"
            break
        case 3:
            resultado = "Ceará, Maranhão ou Piauí"
            break
        case 4:
            resultado = "Paraíba, Pernambuco, Alagoas ou Rio Grande do Norte"
            break
        case 5:
            resultado = "Bahia ou Sergipe"
            break
        case 6:
            resultado = "Minas Gerais"
            break
        case 7:
            resultado = "Rio de Janeiro ou Espírito Santo"
            break
        case 8:
            resultado = "São Paulo"
            break
        case 9:
            resultado = "Paraná ou Santa Catarina"
            break
        default:
            resultado = "Este CPF não existe"
            break;
    }

    document.getElementById("saida").textContent = resultado
}

function bissexto(event) {
    let ano = parseInt(document.getElementById("numero16").value)
    let resultado9

    if (ano % 100 != 0 && ano % 4 == 0 || ano % 400 == 0) {
        resultado9 = ("Este ano é Bissexto");
    }
    else{
        resultado9 = ("Este ano não é Bissexto");
    }

    document.getElementById("resultado9").textContent = resultado9
}