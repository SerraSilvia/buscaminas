export class Casilla {
    constructor(x, y, mina) {
        this.x = x;
        this.y = y;
        this.mina = mina;
        this.revelada = false;
        this.bandera = false;
        this.minasAdyacentes = 0;
    }

    revelar() {
        if (this.revelada || this.bandera) return null;

        this.revelada = true;

        if (this.mina) return false;

        return true;
    }

    ponerBandera() {
        this.bandera = true;
    }

    quitarBandera() {
        this.bandera = false;
    }

    ponerMina() {
        this.mina = true;
    }
}
