// var clienteNome = "Leo";
// var clienteAgencia ="12345-x";
// var clienteTipoDeConta = "corente";
// var clienteCPF = "000.999.888-00";
// var cliente1Saldo = "0";

// var cliente1Saldo = "100";

// var ciente1 = ["nome = Leo"];

class Cliente {
    nome;
    agencia;
    tipoDeConta;
    cpf;
    saldo;
    depositar(valor){
        this.saldo +=  valor; 
        let resultado = document.querySelector("#testeUm");
        resultado.innerHTML = ` <p> NOME DA CONTA: ${this.nome} </p>
         <p> O SALDO DA CONTA: ${this.saldo} </p>`;

    };
    sacar(valor){
        this.saldo +=  valor; 
        let resultado = document.querySelector("#testeUm");
        resultado.innerHTML = ` <p> NOME DA CONTA: ${this.nome} </p>
         <p> O SALDO DA CONTA: ${this.saldo} </p>`;

    };


}
function depositar() {
    let valorInput = Number(document.querySelector("#cadastrar").value); 
    clienteUm.depositar(valorInput);
   
}

var clienteUm = new Cliente();
clienteUm.nome = "Miqueias";
clienteUm.agencia = "12345-x";
clienteUm.tipoDeConta = "poupança";
clienteUm.cpf = "999.999.999-00";
clienteUm.saldo = 0;

console.log(clienteUm);

var cliente2 = new Cliente();
var cliente3 = new Cliente();

class ClientePremium {
    constructor(nome,cpf,saldo){
        this.nome = nome; 
        this.cpf = cpf;
        this.saldo = saldo;
    }
}

var ClienteEspecial = new ClientePremium("Cesar", "99999999", "10000000");
console.log(ClienteEspecial)