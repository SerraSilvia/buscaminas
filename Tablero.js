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
       for(let f = 0; f < this.filas; f++ ) {
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
        while(numBombasPuestas < this.numBombas) {
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
        for(let f = 0; f < this.filas; f++) {
            for(let c = 0; c < this.columnas; c++) {
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
            this.calcularBombasAdyacentes();
        }

        console.log(casilla);
    }

    calcularBombasAdyacentes() {
        /* // Obtener las coordenadas de la casilla clickeada
        const fila = celda.parentNode.rowIndex;
        const columna = celda.cellIndex;

        // Contador para el número de bombas adyacentes
        let bombasAdyacentes = 0;

        // Verificar cada casilla adyacente
        for (let i = fila - 1; i <= fila + 1; i++) {
            for (let j = columna - 1; j <= columna + 1; j++) {
                // Verificar si la casilla está dentro de los límites del tablero
                if (i >= 0 && i < this.filas && j >= 0 && j < this.columnas) {
                    const casillaAdyacente = document.querySelector(`.juego tr:nth-child(${i + 1}) td:nth-child(${j + 1})`);
                    if (casillaAdyacente.classList.contains("bomba")) {
                        bombasAdyacentes++;
                    }
                }
            }
        }

        // Mostrar el número de bombas adyacentes en la casilla
        celda.textContent = bombasAdyacentes; */
    }
}
