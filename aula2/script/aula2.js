function ifelse(){
    //se (condição) faca..fimse, senao

    if(false){
        console.log("estou no if");
    }else{
        console.log("estou no else");
    }

// VERIFICA IDADE
//input - idade
//output - resposta
// verifica a idade do usuário de é maior de idade
alert("Seja bem vindo(a)");
let idade = Number(prompt("Insira sua idade)"));

if(idade >= 18){
    //entrar
    alert("aproveite nosso sistema!");
    let resposta = document.querySelector("#respostas")
    respostas.innerHTML = ` <h3> ${idade} </h3>`
    
}else{
    //nao entrar
    alert("Idade invalida");
    location.href = "https://www.google.com.br"

}

}



function switchcase() {
    alert("lojinha brasileira");
    let opcao = prompt ("escolha a sua opção: A) pendrive   B) bola    C)chocolate");

    switch(opcao){
        case "a":
            alert("você comprou um pendrive");
            break
        case "b":
            alert("Você comprou uma bola");
            break
        case "c":
            alert("voce comprou um chocolate");
            break

        default:
            alert("Invalido");
            
    }
}

function atividade(){

}