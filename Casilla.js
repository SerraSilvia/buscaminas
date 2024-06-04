export class Casilla {
    constructor(x, y, mina) {
        this.x = x;
        this.y = y;
        this.mina = mina;
        this.marcada = false;
        this.revelada = false;
        this.bandera = false;
        this.minasAdyacentes = 0;
    }

    revelar() {
        if (this.revelada || this.marcada) return null;

        this.revelada = true;

        if (this.mina) return false;

        return true;
    }

    marcar() {
    }
    
    ponerMina() {
        this.mina = true;
    }
}
