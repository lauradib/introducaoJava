// var teste = document.querySelector("#titulopagina")
// teste.innerHTML = "JQUERY É TOP"

// teste () - imprime string
// html () - imprime string interpretando comandos html

var teste = $("#tituloPagina").text(`${2}`);

var texto = undefined;
// document.querySelector("#textoPagina").innerHTML = texto;
$("#textoPagina").html(texto);

//var span = document.querySelector("#teste");
// spam.addEventListeber("#click", function);
// function () {}
$("#teste").on("click", function(){
    $("#teste").text("Acertou");
    $("#teste").addClass("Teste");
    $("#testeIagem").html("");
   // $("#teste").removeClass("Teste");
})

console.log(teste);