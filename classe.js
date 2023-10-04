class heroi{
    constructor(nome,idade,tipo){
        this.nome=nome
        this.idade=idade
        this.tipo=tipo
    }

    tipoataque(){
        let ataque;
        switch (this.tipo) {
            case "mago":
              ataque = "magia";
              break;
            case "guerreiro":
              ataque = "espada";
              break;
            case "monge":
              ataque = "artes marciais";
              break;
            case "ninja":
              ataque = "shuriken";
              break;
          }
          return ataque
    }

    escrever(){
        const ataque = this.tipoataque();
        console.log("O "+ this.tipo + " atacou usando "+ ataque)
    }
}

let novoheroi = new heroi("Laryssa", 18, "mago")
novoheroi.escrever()
