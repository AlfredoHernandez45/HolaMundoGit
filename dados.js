/**
 * -------------------
 * |CÓDIGO JAVASCRIPT|
 * -------------------
 * 
 * Determinar el primer ganador de 3 juegos y cuantos juegos hubo
 * 
 */

//Función de jugador
function Jugador(nombre){
    this.nombre = nombre;
    this.caraDado1 = 0;
    this.caraDado2 = 0;
}

//Función del jugeo de dados
function JuegoDados(numeroJuego, j1, j2){
    this.numeroJuego = numeroJuego;
    this.jugador1 = j1;
    this.jugador2 = j2;
    
    //función de TirarDados
    this.tirarDados = function() {
        this.jugador1.caraDado1 = (Math.floor(Math.random()*(6-1))+1); //usar random(1,6)
        this.jugador1.caraDado2 = (Math.floor(Math.random()*(6-1))+1); //usar random(1,6)
        
        this.jugador2.caraDado1 = (Math.floor(Math.random()*(6-1))+1); //usar random(1,6)
        this.jugador2.caraDado2 = (Math.floor(Math.random()*(6-1))+1); //usar random(1,6)
    }

    //función para determinar el ganador 
    this.determinaGanador = function() {
        //Si gana Pedro Sánchez
        if ( (this.jugador1.caraDado1 + this.jugador1.caraDado2 == 7)
            && (this.jugador2.caraDado1 + this.jugador2.caraDado2 != 7) ) {
            return this.jugador1.nombre
        }
        //Si gana Antonio Ramírez
        else if ( (this.jugador2.caraDado1 + this.jugador2.caraDado2 == 7)
            && (this.jugador1.caraDado1 + this.jugador2.caraDado1 != 7) ) {
            return this.jugador2.nombre
        }
        else return "Empate";
    }
}

//Declaración de variables locales
let pedro = new Jugador("Pedro Sánchez");
let antonio = new Jugador("Antonio Ramírez");
let numJuego = 1;
let ganoJ1 = 0;
let ganoJ2 = 0;
let ganadorTorneo = " ";

//Ciclo del programa
while (ganadorTorneo == " "){
    
    //Creación del objeto juego1
    let juego1 = new JuegoDados(numJuego, pedro, antonio);

    //Llama a la función tirar datos
    juego1.tirarDados();

    //Se asigna el ganador o empate del juego n 
    let ganador = juego1.determinaGanador();
    
    //Aumenta el numero del juego 
    numJuego ++;

    //Si Pedro gana un juego
    if(ganador == "Pedro Sánchez"){
        ganoJ1++; //aumenta contador
    } //Si Antonio gana un juego
    else if(ganador == "Antonio Ramírez"){
        ganoJ2++; //aumenta contador
    } 

    //Si se gano el torneo se asigna el ganador FINAL
    if(ganoJ1 == 3){
        ganadorTorneo = "Pedro Sánchez";
    }else if (ganoJ2 == 3){
        ganadorTorneo = "Antonio Ramírez";
    }
}
console.log("El ganador del torneo es "+ ganadorTorneo);
console.log("Se jugaron "+ numJuego +" juegos");
