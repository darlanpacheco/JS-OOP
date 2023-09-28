"use strict";

class CanetaJS {
  modelo;
  cor;
  ponta;
  carga;
  tampada;

  constructor(modelo, cor, ponta, carga, tampada) {
    this.modelo = modelo;
    this.cor = cor;
    this.ponta = ponta;
    this.carga = carga;
    this.tampada = tampada;
  }

  rabiscar() {
    if (this.tampada === true) {
      console.log("Erro! Não posso rabiscar.");
    } else {
      console.log("Rabiscando.");
    }
  }

  tampar() {
    this.tampada = true;
  }

  destampar() {
    this.tampada = false;
  }

  status() {
    console.log(
      `[Modelo: ${this.modelo}]\n[Cor: ${this.cor}]\n[Ponta: ${this.ponta}]\n[Carga: ${this.carga}]\n[Tampada: ${this.tampada}]\n`,
    );
  }
}

let minhaCanetaJS = new CanetaJS("BIC", "Azul", "0.7mm", 100, false);
minhaCanetaJS.rabiscar();
minhaCanetaJS.status();

let minhaCanetaJS2 = new CanetaJS("BIC", "Vermelha", "0.5mm", 90, true);
minhaCanetaJS2.destampar();
minhaCanetaJS2.rabiscar();
minhaCanetaJS2.status();
