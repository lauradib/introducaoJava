//array
var filmes = Array();
filmes [0] = "Era do gelo";
filmes [1] = "Jack";
filmes [2] = "v de vingança";
filmes [3] = "Harry potter";
let main = document.querySelector("main");

for(var contador = 0;contador <= 3;contador++){
    main.innerHTML += `<div class = "posts">
        ${filmes[contador]}
    </div>`;
}

//para contador <- 1 ate 0 passo 1

main.innerHTML += `<h1>METODO 2 </h1>`;


//metod 2
var produtos = ["Pen drive", "X salada", "chocolate", "Açai"];



// comando de array
produtos.push("bicicleta");

//remover fim
produtos.pop();

//adicionae no comeco
produtos.unshift("pipa");

//remover no comeco
produtos.shift();

//adicionar ou remover de acordo com o elemento
produtos.splice(2, 1);
var produtosNovos 






produtos.forEach((elemento) => { 
    main.innerHTML += `<div class="posts">
    ${elemento}
    </div>`;
    });

