import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;
    _saldo = 0;

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }

        this._saldo += valor;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
