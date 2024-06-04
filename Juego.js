import { Tablero } from "./Tablero.js";

class Juego {
    constructor() {
        this.jugador = null;
        this.tablero = null;
    }

    initJuego(filas, columnas, bombas) {
        this.tablero = new Tablero(filas, columnas, bombas);

        this.crearTablaDom();
    }

    crearTablaDom() {
        const tableroDOM = document.querySelector("#juego");

        tableroDOM.innerHTML = ''; // Limpiamos la tabla antes de crearla de nuevo

        for (let f = 0; f < this.tablero.filas; f++) {
            for (let c = 0; c < this.tablero.columnas; c++) {
                let casilla = document.createElement("div");
                casilla.setAttribute("id", "f" + f + "_c" + c);
                casilla.dataset.fila = f;
                casilla.dataset.columna = c;
                casilla.addEventListener('click', (event) => {
                    this.revelarCasilla(event)
                });
                tableroDOM.appendChild(casilla);
            }
        }
    }

    revelarCasilla(event) {
        const fila = event.target.dataset.fila;
        const columna = event.target.dataset.columna;

        this.tablero.destaparCasilla(fila, columna);

        this.actualizaTablaDOM();
    }

    actualizaTablaDOM() {
    }
}

export default Juego;