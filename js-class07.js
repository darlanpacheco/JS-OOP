class JSLutador {
  constructor(
    nome,
    nacionalidade,
    idade,
    peso,
    altura,
    vitorias,
    derrotas,
    empates,
  ) {
    this._nome = nome;
    this._nacionalidade = nacionalidade;
    this._idade = idade;
    this._peso = peso;
    this._altura = altura;
    this._vitorias = vitorias;
    this._derrotas = derrotas;
    this._empates = empates;
    this.setCategoria();
  }

  status() {
    console.log(
      `[Nome: ${this._nome}]\n[Nacionalidade: ${this._nacionalidade}]\n[Categoria: ${this._categoria}]\n[Idade: ${this._idade}]\n[Peso: ${this._peso}]\n[Altura: ${this._altura}]\n[Vitórias: ${this._vitorias}]\n[Derrotas: ${this._derrotas}]\n[Empates: ${this._empates}]\n`,
    );
  }

  ganharLuta() {
    this._vitorias++;
  }

  perderLuta() {
    this._derrotas++;
  }

  empatarLuta() {
    this._empates++;
  }

  setCategoria() {
    if (this._peso < 52.2) {
      this._categoria = "Inválido";
    } else if (this._peso <= 70.3) {
      this._categoria = "Peso Leve";
    } else if (this._peso <= 83.9) {
      this._categoria = "Peso Médio";
    } else if (this._peso <= 120) {
      this._categoria = "Peso Pesado";
    } else {
      this._categoria = "Inválido";
    }
  }
}

function jsMain() {
  let lutadores = [
    new JSLutador("Pretty Boy", "França", 31, 68.9, 1.75, 11, 2, 1),
    new JSLutador("Putscript", "Brasil", 29, 57.8, 1.68, 14, 2, 3),
    new JSLutador("Snapshadow", "EUA", 35, 80.9, 1.65, 12, 2, 1),
    new JSLutador("Dead Code", "Austrália", 28, 81.6, 1.93, 13, 0, 2),
    new JSLutador("UF0Cobol", "Brasil", 37, 119.3, 1.7, 5, 4, 3),
    new JSLutador("Nerdaart", "EUA", 30, 105.7, 1.81, 12, 2, 4),
  ];

  lutadores[0].status();
}

jsMain();
