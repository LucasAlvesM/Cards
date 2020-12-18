function calcular(event){
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
            console.log("Não é uma operação");
    }
    document.getElementById("resultado").textContent = resultado
}
function calculo_media(event){
    let nota1 = parseFloat(prompt("Digite a primeira nota bimestral: "));
    let nota2 = parseFloat(prompt("Digite a segunda nota bimestral: "));
    let nota3 = parseFloat(prompt("Digite a terceira nota bimestral: "));
    let nota4 = parseFloat(prompt("Digite a quarta nota bimestral: "));
    let media_final = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media_final >= 7) {
        alert("APROVADO")
    }
    else if (media_final <5) {
        alert("REPROVADO")
    } 
    else 
    {
        alert("RECUPERAÇÃO")
    }
}