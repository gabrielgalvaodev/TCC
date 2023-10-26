class Valores {
    constructor(){
        this.Si = 0;
        this.Oi = 0;
        this.Di = 0;
    }
}


class Corpo {
    constructor(){
        this.corpoDique = new Valores();
        this.crista = new Valores();
        this.nucleo = new Valores();
        this.taludeMontanha = new Valores();
        
    }

    calcularCristaRPNI(){
        const RPNI = this.crista.Si * this.crista.Oi * this.crista.Di;
        return RPNI;
    }
}


const corpo1 = new Corpo();
corpo1.crista.Si = 5;
corpo1.crista.Oi = 3;
corpo1.crista.Di = 2;
let rpni = corpo1.calcularCristaRPNI();
console.log(corpo1);
console.log(rpni);