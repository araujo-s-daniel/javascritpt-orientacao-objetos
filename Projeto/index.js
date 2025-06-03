import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.cliente = new Cliente();
contaCorrenteAlice.cliente.nome = "Alice";
contaCorrenteAlice.cliente.cpf = 88822233309;
contaCorrenteAlice.agencia = 102;

let valor = 200;
contaCorrenteRicardo.transferir(valor, contaCorrenteAlice);
console.log(contaCorrenteAlice);
