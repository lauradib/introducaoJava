

function soma (){
    let valor = Number(window.prompt("Digite o valor da conta:"));
    let clientes = Number(window.prompt("Digite o numero de clientes:"));
    console.log (typeof valor)
    console.log (typeof clientes)

    var  resultados = valor / clientes ;

    window.alert ("O valor para cada um é de:" +resultados)
}

soma()