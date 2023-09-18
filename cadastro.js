let emailLogin = document.querySelector("input#email");
let senhaLogin = document.querySelector("input#senha");

email.style.width = "100%";
senha.style.width = "100%";

function enviar(){
    if(this.emailLogin == 'user@email.com' && this.senhaLogin == '1234'){
        alert("Sucesso!") 
    } else {
        alert("Dados incorretos!")
    }
}

function teste(){
    alert("Testandoo!")
    console.log("Olá! testando")
}