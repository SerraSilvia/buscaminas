export default class Jugador {
    constructor(nombre, apellido, nick, fechaNacimiento, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nick = nick;
        this.fechaNacimiento = fechaNacimiento;
        this.score = 0;
        this.email = email;
    }

    get edad() {
        const fechaActual = new Date();
        const fechaNac = new Date(this.fechaNacimiento);
        const diff = fechaActual - fechaNac;
        const edad = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        return edad;
    }
}
