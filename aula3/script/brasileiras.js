// get element
 let valorTotalhtml = document.getElementById("valorTotal");

//querySelector
//document.querySelector("a");

//querySelectorAll
//document.querySelectorAll("a");

let valorTotal = 0;

function atualizarValorTotal(){
    valorTotalhtml.innerHTML = `valor total : R$ ${valorTotal.toFixed(2)}`
}

function adicionarValorTotal(valorItem){
    valorTotal += valorItem;
    atualizarValorTotal();

}
