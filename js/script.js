var email_salvo = "lucas123@gmail.com"
var usuario_salvo = "lucas"
var senha_salva = "lucas123"

function verificarCredenciais(){
    let email_digitado = document.getElementById("email").value
    let usuario_digitado = document.getElementById("usuario").value
    let senha_digitada = document.getElementById("senha").value

        if((usuario_digitado == usuario_salvo) && (senha_digitada == senha_salva) && (email_digitado == email_salvo)){
            document.body.style.backgroundColor = "green"
        }else{
            document.body.style.backgroundColor = "red"
        }
}

function cadastrarCredenciais(){
    email_salvo = document.getElementById("email").value
    usuario_salvo = document.getElementById("usuario").value
    senha_salva = document.getElementById("senha").value
}