class Animal{
    constructor(esp){
        this.especie = esp;
    }
    canino(){
        return `Dientes caninos de la especie ${this.especie}`;
    }
}

let objAni = new Animal("Tigres");
console.log(objAni.canino());

class Humano extends Animal{
    constructor(nom,ape,esp){
        super(esp);
        this.nombre = nom;
        this.apellido = ape; 
    }
    informacio(nom,ape){
        return `Informacion completa ${this.nombre} ${nom} ${this.apellido} ${ape} ${this.canino()}`;
    }
    verdientes(){
        return this.canino();
    }
}


let objHum = new Humano("Julian", "Barrera", "Humano");
console.log(objHum.verdientes());
