const usuarioCadastro = "ADM";
const senhaCadastrada = "ADM";

function login(){
    let usuarioCorreto = false;
    let tentativas = 0

    while(usuarioCorreto === false){
    let usuario = prompt("Digite o usuario");
    let senha = prompt("Digite a sua senha");
    
    if(usuario != usuarioCadastro || senha != senhaCadastrada){
        alert("Usuário ou senha incorretos! tente novamente!");

        tentativas++;
        alert("NÚMERO DE TENTATIVAS (Max 3):" +tentativas)
        
        if(tentativas === 3){
            alert("Numero de tentativas excedido! Tente novamente mais tarde.");
            break;
        }

    }else{
        alert("Seja bem vindo!!")
        usuarioCorreto = true;
        
    }
  }
}

