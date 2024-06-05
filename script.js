import Juego from "./Juego.js";
import Jugador from "./Jugador.js";

export function init() {
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var nick = document.getElementById("nick");
    var fechaNacimiento = document.getElementById("fechaNacimiento");
    var email = document.getElementById("email");

    var filas = document.getElementById("filas");
    var columnas = document.getElementById("columnas");
    var bombas = document.getElementById("bombas");
    const botonGenerar = document.querySelector("#botonGenerar");


    botonGenerar.addEventListener('click', () => {
        let jugador = new Jugador(nombre.value, apellido.value, nick.value, fechaNacimiento.value, email.value);

        let juego = new Juego(jugador);

        document.querySelector('#juego').classList.remove("hidden");
        document.querySelector('#num_banderas').classList.remove("hidden");

        document.querySelector("html").style.setProperty("--num-filas", filas.value);
        document.querySelector("html").style.setProperty("--num-columnas", columnas.value);

        document.querySelector("#num_banderas span").textContent = bombas.value;

        juego.initJuego(
            filas.value, columnas.value, bombas.value
        );
    });
}