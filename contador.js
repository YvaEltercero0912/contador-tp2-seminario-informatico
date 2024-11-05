class Contador {

    static cuentaGlobal = 0;

    constructor(nombreResponsable) {
    
        this.nombreResponsable = nombreResponsable;
        this.cuentaIndividual = 0;
    }


    obtenerResponsable() {
        return this.nombreResponsable;
    }


    obtenerCuentaIndividual() {
        return this.cuentaIndividual;
    }


    static obtenerCuentaGlobal() {
        return Contador.cuentaGlobal;
    }

    
    contar() {
        this.cuentaIndividual += 1;
        Contador.cuentaGlobal += 1;
    }
}




const contador1 = new Contador("Alejandro");
const contador2 = new Contador("Daniel");
const contador3 = new Contador("Belen");

contador1.contar();
contador2.contar();
contador3.contar();


console.log(contador1.obtenerResponsable(), contador1.obtenerCuentaIndividual());
console.log(contador2.obtenerResponsable(), contador2.obtenerCuentaIndividual());
console.log(contador3.obtenerResponsable(), contador3.obtenerCuentaIndividual());

console.log(Contador.obtenerCuentaGlobal());
