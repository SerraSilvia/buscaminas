class Jugador extends Juego {
    constructor(nombre, apellido, nick, fechaNacimiento, edad, contraseña, score, fechaScore) {
        super();
        this.nombre = nombre;
        this.apellido = apellido;
        this.nick = nick;
        this.fechaNacimiento = fechaNacimiento;
        this._edad = edad; // Usaremos una propiedad privada para la edad
        this.contraseña = contraseña;
        this.score = score;
        this.fechaScore = fechaScore;
    }

    get edad() {
        const fechaActual = new Date();
        const fechaNac = new Date(this.fechaNacimiento);
        const diff = fechaActual - fechaNac;
        const edad = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); // Convertimos milisegundos a años
        return edad;
    }

    set edad(edad) {
        // No necesitamos hacer nada aquí, ya que la edad se calcula automáticamente desde la fecha de nacimiento
    }
}
