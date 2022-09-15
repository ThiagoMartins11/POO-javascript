class Moto extends CaracteristicaMoto{
    constructor(cor, modelo, marca){

        super(cor, modelo, marca);

        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;
    }

    infomoto(){
        console.log("Comprou uma moto: " + this.marca + " " +this.modelo + " da cor: " + this.cor)
    }
}

