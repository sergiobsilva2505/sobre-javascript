
import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {

    constructor(cliente) {
        super(100, cliente, 1112);
    }

    sacar(valor) {
        const taxa = 1.01;
        return this._sacar(valor, taxa);
    }

}