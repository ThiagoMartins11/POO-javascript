class Comprador{

    nome = "";
    idade = null;
    cpf = "";

    constructor(nome, idade, cpf){

        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    infocomprador(){
        console.log("O Sr " + this.nome + " de " + this.idade + " Anos " + "com o cpf de: " + this.cpf)
    }

    comprar(){
        return "";
    }
}