class JSControlador {
  ligar() {}
  desligar() {}
  abrirMenu() {}
  fecharMenu() {}
  maisVolume() {}
  menosVolume() {}
  ligarMudo() {}
  desligarMudo() {}
  play() {}
  pause() {}
}

class JSControleRemoto extends JSControlador {
  constructor() {
    super();
    this._volume = 50;
    this._ligado = false;
    this._tocando = false;
  }

  ligar() {
    this.ligado = true;
  }

  desligar() {
    this.ligado = false;
  }

  abrirMenu() {
    console.log(
      `[Está ligado?: ${this.ligado}]\n[Está tocando?: ${this.tocando}]\n[Volume: ${this.volume}]\n`,
    );
  }

  fecharMenu() {
    console.log("Fechando menu...");
  }

  maisVolume() {
    if (this.ligado) {
      this.volume = this.volume + 5;
    }
  }

  menosVolume() {
    if (this.ligado) {
      this.volume = this.volume - 5;
    }
  }

  ligarMudo() {
    if (this.ligado && this.volume > 0) {
      this.volume = 0;
    }
  }

  desligarMudo() {
    if (this.ligado && this.volume === 0) {
      this.volume = 50;
    }
  }

  play() {
    if (this.ligado && !this.tocando) {
      this.tocando = true;
    }
  }

  pause() {
    if (this.ligado && this.tocando) {
      this.tocando = false;
    }
  }

  get volume() {
    return this._volume;
  }

  get ligado() {
    return this._ligado;
  }

  get tocando() {
    return this._tocando;
  }

  set volume(value) {
    this._volume = value;
  }

  set ligado(value) {
    this._ligado = value;
  }

  set tocando(value) {
    this._tocando = value;
  }
}

class JSMainClass {
  static Main() {
    let c1 = new JSControleRemoto();
    c1.ligar();
    c1.abrirMenu();
    c1.maisVolume();
    c1.ligarMudo();
    c1.play();
    c1.abrirMenu();
  }
}

JSMainClass.Main();
