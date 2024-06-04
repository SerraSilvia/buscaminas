import Juego from "./Juego.js";

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

    let juego = new Juego();

    botonGenerar.addEventListener('click', () => {
        document.querySelector('#juego').classList.remove("hidden");
        
        document.querySelector("html").style.setProperty("--num-filas", filas.value);
        document.querySelector("html").style.setProperty("--num-columnas", columnas.value);

        juego.initJuego(
            filas.value, columnas.value, bombas.value
        );
    });
}