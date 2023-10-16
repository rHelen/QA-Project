let emailLogin = document.querySelector("input#email");
let senhaLogin = document.querySelector("input#senha");

email.style.width = "100%";
senha.style.width = "100%";

function entrar(){
    if(this.emailLogin.equals('user@email.com') && this.senhaLogin.equals('1234')){
        alert("Sucesso!") 
    } else {
        alert("Dados incorretos!")
    }
} 
