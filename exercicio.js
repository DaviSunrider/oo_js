// define abstração
class Personagem {
  constructor(nome) {
    this.nome = nome;
  }

  saudacao() {
    console.log(`Olá, eu sou ${this.nome}.`);
  }
}

// herança
class Jedi extends Personagem {
  usarForca() {
    console.log("Usando a Força.");
  }
}

class Sith extends Personagem {
  usarSabreDeLuz() {
    console.log("Usando um sabre de luz vermelho.");
  }
}

// instâncias
const obiWan = new Jedi("Obi-Wan Kenobi");
const vader = new Sith("Darth Vader");
const luke = new Jedi("Luke Skywalker");


obiWan.saudacao();
obiWan.usarForca();    

vader.saudacao();        
vader.usarSabreDeLuz();  

luke.saudacao();        
luke.usarForca();       