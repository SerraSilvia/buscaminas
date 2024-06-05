import { Casilla } from "./Casilla.js";

export class Tablero {
    constructor(filas, columnas, numBombas) {
        this.filas = Number(filas);
        this.columnas = Number(columnas);
        this.numBombas = Number(numBombas);
        this.matriz = [];

        this.generarTablero();
    }

    generarTablero() {
        for (let f = 0; f < this.filas; f++) {
            this.matriz.push([]);

            for (let c = 0; c < this.columnas; c++) {
                this.matriz[f].push(new Casilla(f, c, false));
            }
        }

        this.colocarBombas();

        console.log(this.matriz);
    }

    colocarBombas() {
        let numBombasPuestas = 0;

        /* Generar bombas en posiciones aleatorias */
        while (numBombasPuestas < this.numBombas) {
            let fila = Math.floor(Math.random() * this.filas);
            let columna = Math.floor(Math.random() * this.columnas);

            if (!this.matriz[fila][columna].mina) {
                this.matriz[fila][columna].ponerMina();
                numBombasPuestas++;
            }
        }
    }

    mostrarBombas() {
        // Desvelamos todas las bombas
        for (let f = 0; f < this.filas; f++) {
            for (let c = 0; c < this.columnas; c++) {
                if (this.matriz[f][c].mina) {
                    document.querySelector(`#f${f}_c${c}`).textContent = "💣";
                }
            }
        }
    }

    destaparCasilla(fila, columna) {
        const casilla = this.matriz[fila][columna];

        const resultado = casilla.revelar();

        if (resultado == null) return;

        /* Hay una mina */
        if (!resultado) {
            this.mostrarBombas();
        } else {
            this.calcularBombasAdyacentes(parseInt(fila), parseInt(columna));
        }

        console.log(casilla);
    }

    calcularBombasAdyacentes(fila, columna) {
        let bombasAdyacentes = 0;

        for (let f = fila - 1; f <= fila + 1; f++) {
            for (let c = columna - 1; c <= columna + 1; c++) {
                
                if (f >= 0 && f < this.filas && c >= 0 && c < this.columnas) {
                    /* Comprobamos que no es la celda pulsada */
                    if (f !== fila || c !== columna) {
                        if (this.matriz[f][c].mina)
                            bombasAdyacentes++;
                    }
                }
            }
        }

        document.querySelector(`#f${fila}_c${columna}`).textContent = bombasAdyacentes;
        document.querySelector(`#f${fila}_c${columna}`).classList.add('destapado');
    }

    ponerBandera(fila, columna) {
        const casilla = this.matriz[fila][columna];

        if (!casilla.bandera) {
            casilla.ponerBandera();

            document.querySelector(`#f${fila}_c${columna}`).textContent = "🚩";
    
            let banderasRestantes = parseInt(document.querySelector("#num_banderas span").textContent);
            document.querySelector("#num_banderas span").textContent = banderasRestantes - 1;
        } else {
            casilla.quitarBandera();

            document.querySelector(`#f${fila}_c${columna}`).textContent = "";
    
            let banderasRestantes = parseInt(document.querySelector("#num_banderas span").textContent);
            document.querySelector("#num_banderas span").textContent = banderasRestantes + 1;
        }
    }
}
