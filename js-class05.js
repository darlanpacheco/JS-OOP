"use strict";

class ContaBancoJS {
  _numConta;
  _tipo;
  _dono;
  _saldo;
  _status;

  constructor(numConta, tipo, dono, saldo, status) {
    this._numConta = numConta;
    this._tipo = tipo;
    this._dono = dono;
    this._saldo = saldo;
    this._status = status;
  }

  statusAtual() {
    console.log(
      `[Conta: ${this.numConta}]\n[Tipo: ${this.tipo}]\n[Dono: ${this.dono}]\n[Saldo: ${this.saldo}]\n[Status: ${this.status}]\n`,
    );
  }

  abrirConta(t) {
    this.tipo = t;
    this.status = true;

    if (t === "CC") {
      this.saldo = 50;
    } else if (t == "CP") {
      this.saldo = 150;
    }
  }

  fecharConta() {
    if (this.saldo > 0 || this.saldo < 0) {
      console.log(`Conta nao pode ser fechada ${this.saldo}`);
    } else {
      this.status = false;
      console.log("Conta aberta!");
    }
  }

  depositar(v) {
    if (this.status === true) {
      this.saldo = this.saldo + v;
      console.log("Deposito realizado com sucesso");
    } else {
      console.log("Impossivel depositar");
    }
  }

  sacar(v) {
    if (this.status === true) {
      if (this.saldo >= v) {
        this.saldo = this.saldo - v;
        console.log("Saque realizado");
      } else {
        console.log("Saldo insuficiente");
      }
    } else {
      console.log("Impossivel realizar saque");
    }
  }

  pagarMensal() {
    let v;

    if (this.tipo === "CC") {
      v = 12;
    } else if (this.tipo === "CP") {
      v = 20;
    }

    if (this.status) {
      this.saldo = this.saldo - v;
      console.log("Mensalidade paga com sucesso");
    } else {
      console.log("Impossivel pagar uma conta fechada");
    }
  }

  get numConta() {
    return this._numConta;
  }

  get tipo() {
    return this._tipo;
  }

  get dono() {
    return this._dono;
  }

  get saldo() {
    return this._saldo;
  }

  get status() {
    return this._status;
  }

  set numConta(numConta) {
    this._numConta = numConta;
  }

  set tipo(tipo) {
    this._tipo = tipo;
  }

  set dono(dono) {
    this._dono = dono;
  }

  set saldo(saldo) {
    this._saldo = saldo;
  }

  set status(status) {
    this._status = status;
  }
}

function main() {
  let conta = new ContaBancoJS(5, "a", "b", 6.5, true);
  conta.dono = "Jubileu";
  conta.numConta = 111;
  conta.abrirConta("CC");

  let conta2 = new ContaBancoJS();
  conta2.dono = "Creuza";
  conta2.numConta = 222;
  conta2.abrirConta("CP");

  conta.depositar(100);
  conta2.depositar(500);
  conta2.sacar(100);

  conta.statusAtual();
  conta2.statusAtual();
}

main();
