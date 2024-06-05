import { Tablero } from "./Tablero.js";

class Juego {
    constructor(jugador) {
        this.jugador = jugador;
        this.tablero = null;
        this.gameOver = false;
        this.time = 0;
        this.time_interval = null;
    }

    initJuego(filas, columnas, bombas) {
        this.tablero = new Tablero(filas, columnas, bombas);

        this.crearTablaDom();

        this.time_interval = setInterval(() => {
            this.time++;
        }, 1000);
    }

    crearTablaDom() {
        const tableroDOM = document.querySelector("#juego");

        tableroDOM.innerHTML = '';

        for (let f = 0; f < this.tablero.filas; f++) {
            for (let c = 0; c < this.tablero.columnas; c++) {
                let casilla = document.createElement("div");
                casilla.setAttribute("id", "f" + f + "_c" + c);
                casilla.dataset.fila = f;
                casilla.dataset.columna = c;
                casilla.addEventListener('click', (event) => {
                    this.revelarCasilla(event)
                });
                casilla.addEventListener('contextmenu', (event) => {
                    event.preventDefault();
                    this.ponerBandera(event);
                });
                tableroDOM.appendChild(casilla);
            }
        }

        this.gameOver = false;
        document.querySelector('#resultado_juego').classList.add('hidden');
    }

    revelarCasilla(event) {
        if (this.gameOver) return;

        const fila = event.target.dataset.fila;
        const columna = event.target.dataset.columna;

        this.tablero.destaparCasilla(fila, columna);

        this.actualizaTablaDOM();
    }

    ponerBandera(event) {
        if (this.gameOver) return;

        const fila = event.target.dataset.fila;
        const columna = event.target.dataset.columna;

        this.tablero.ponerBandera(fila, columna);

        this.actualizaTablaDOM();
    }

    actualizaTablaDOM() {
        /* Obtener el numero de casillas reveladas + casillas con banderas
        si es igual al numero de bombas has ganado, si hay alguna casilla que este
        revelada y tenga una mina has perdido */
        let gameOver = false;
        let numeroNoReveladas = 0;
        let numeroBanderas = 0;

        for (let f = 0; f < this.tablero.filas; f++) {
            for (let c = 0; c < this.tablero.columnas; c++) {
                if (!this.tablero.matriz[f][c].revelada) numeroNoReveladas++;
                if (this.tablero.matriz[f][c].bandera) numeroBanderas++;

                if (this.tablero.matriz[f][c].mina && this.tablero.matriz[f][c].revelada) gameOver = true;
            }
        }

        if (gameOver) {
            /* Partida perdida */
            document.querySelector('#resultado_juego').classList.remove('hidden');
            document.querySelector('#resultado_juego').textContent = "Has perdido 😖😭";
            this.gameOver = true;
            clearInterval(this.time_interval);
            this.jugador.score = this.time;
            localStorage.setItem('buscaminas_jugador', JSON.stringify(this.jugador));

        } else {
            if (numeroBanderas + numeroNoReveladas == this.tablero.numBombas) {
                /* Has ganado */
                document.querySelector('#resultado_juego').classList.remove('hidden');
                document.querySelector('#resultado_juego').textContent = "Has ganado 😎❤";
                this.gameOver = true;
                clearInterval(this.time_interval);
                this.jugador.score = this.time;
                localStorage.setItem('buscaminas_jugador', JSON.stringify(this.jugador));
            }

            if (numeroBanderas == this.tablero.numBombas && numeroNoReveladas == 0) {
                /* Has ganado */
                document.querySelector('#resultado_juego').classList.remove('hidden');
                document.querySelector('#resultado_juego').textContent = "Has ganado 😎❤";
                this.gameOver = true;
                clearInterval(this.time_interval);
                this.jugador.score = this.time;
                localStorage.setItem('buscaminas_jugador', JSON.stringify(this.jugador));
            }

            if (numeroNoReveladas == this.tablero.numBombas && numeroBanderas == 0) {
                /* Has ganado */
                document.querySelector('#resultado_juego').classList.remove('hidden');
                document.querySelector('#resultado_juego').textContent = "Has ganado 😎❤";
                this.gameOver = true;
                clearInterval(this.time_interval);
                this.jugador.score = this.time;
                localStorage.setItem('buscaminas_jugador', JSON.stringify(this.jugador));
            }
        }
    }
}

export default Juego;