const btnPesquisar = document.querySelector("#btnResposta");
const jogos = ["dota 2","freefire", "league of legends", "red dead 2"]

btnPesquisar.addEventListener('click',pesquisar);

function pesquisar(){
    
    let jogoPesquisado = document.querySelector("#inputPesquisar").value;
    let resposta = document.querySelector("#pesquisarResposta");

    let respostaPesquisa = jogos.includes(jogoPesquisado);

    if(respostaPesquisa == true){
    resposta.innerHTML = `Jogo ${jogoPesquisado} encontrado! `;

    }else{
    resposta.innerHTML = `Jogo ${jogoPesquisado} não encontrado!`;
    }
}

const btnReplace = document.querySelector ("#btnReplace");
const btnreplaceAll = document.querySelector ("#btnReplaceAll");

btnReplace.addEventListener("click",substituirUm);
btnreplaceAll.addEventListener("click",substituirTodos);


function substituirUm(){
    let texto = document.querySelector("#texto").value;
    let acharTermo = document.querySelector("#acharTermo").value;
    let trocarTermo = document.querySelector("#trocarTermo").value;

    let textoAtualizado = texto.replace(acharTermo,trocarTermo);
   document.querySelector("#texto").value = textoAtualizado;
}

function substituirTodos(){
    let texto = document.querySelector("#texto").value;
    let acharTermo = document.querySelector("#acharTermo").value;
    let trocarTermo = document.querySelector("#trocarTermo").value;

    let textoAtualizado = texto.replaceAll(acharTermo,trocarTermo);
   document.querySelector("#texto").value = textoAtualizado;
}