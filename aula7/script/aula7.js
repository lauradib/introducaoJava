function replaceEcma(){
    var frase = "Ola mundo, o mundo esta maravilhoso, pois todo mundo esta sorrindo";
        var resposta = document.querySelector("#resposta");

        resposta.innerHTML = frase;


        //replace = substituir um termo de string
        var fraseModificada = frase.replace ("mundo", "arroz");
         resposta.innerHTML += `<br>${fraseModificada}`;

        //replace = substituir todos os termos de string
         var fraseModificada = frase.replaceAll ("mundo", "feijao");
         resposta.innerHTML += `<br>${fraseModificada}`;

}

function pesquisar(){
    //incluides apena verifica se o termo existe!
    var filmes = ["vingadores", "ironman", "coringa", "batman", "spiderman"];
    var pesquisa = filmes.includes ("pokemon");
    var resposta2 = document.querySelector("#resposta2");

    if(pesquisa == true){
        resposta2.innerHTML = `Opa, o tema foi encontrado`;
    }else{
        resposta2.innerHTML = `O tema não foi encontrado`;
    }

    // indexOf verifica se existe, tambem retorna indece
    var termoPesquisado = "vingadores";
    var pesquisa2 = filmes.indexOf (termoPesquisado);

    if(pesquisa2 == -1){
        resposta2.innerHTML += `<br>O elemento digtado não foi encontrado!`;
    }else{
        resposta2.innerHTML += `<br>O elemento ${filmes[pesquisa2]} foi encontrado!`;
    }

    resposta2.innerHTML += pesquisa2;

}

function pad(){
    var nome = "Laura";
    var sobrenome = " Dib";
    var cartaoFinal = 9999;
    var totalCaracteres = (nome + sobrenome).length
    var resposta3 = document.querySelector ("#resposta3");

    resposta3.innerHTML = nome.padStart(totalCaracteres,sobrenome);
    resposta3.innerHTML += "<br>"+nome.padEnd(totalCaracteres, sobrenome);
    resposta3.innerHTML += "<br>"+cartaoFinal.padStart(16, "*");
}

function objectEntries(){

}

function subject(){

}

//executar functions
replaceEcma();
pesquisar();
pad()