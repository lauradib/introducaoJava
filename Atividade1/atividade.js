

function atividade1(){
    window.alert("ATIVIDADE 1")
    let valor = Number(window.prompt("Digite o valor da conta:"));
    let clientes = Number(window.prompt("Digite o numero de clientes:"));
    console.log (typeof valor)
    console.log (typeof clientes)

    var  resultados = valor / clientes ;

    window.alert ("O valor para cada um é de:" +resultados)
}


function atividade2(){
    window.alert("Digite um algoritimo:")
    let numero = Number(window.prompt("Digite o primeiro numero:"));

    window.alert (`O numero inserido é ${numero},  sucessor é ${numero=+1} e seu antecessor é de ${numero-1}`)


}
