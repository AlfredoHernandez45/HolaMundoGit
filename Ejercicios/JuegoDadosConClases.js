//Código JavaScript

//Función constructora Jugador

class Jugador{
    #caraDado1 = 0;  //Hacer privado
    #caraDado2 = 0;  //Hacer privado
    
    constructor(nombre) {//define el nombre por default
        this.nombre = nombre;
    }
    get name(){//regresa el nombre
        return this.nombre;
    }

    //seters
    #setdado1(cara){
        this.#caraDado1 = cara;
    }
    #setdado2(cara){
        this.#caraDado2 = cara;
    }
    set caraDado1(cara){
        this.#setdado1(cara);//Hacer privado y sus métodos getter y setter
        //caraDado1 = dado1;  //Hacer privado y sus métodos getter y setter
    }
    set caraDado2(cara){
        this.#setdado2(cara);//Hacer privado y sus métodos getter y setter
        //caraDado2 = dado2;  //Hacer privado y sus métodos getter y setter
    }

    //geters
    #getdado1(){
        return this.#caraDado1;
    }

    #getdado2(){
        return this.#caraDado2;
    }
    get caraDado1(){
        return this.#getdado1();
    }
    get caraDado2(){
        return this.#getdado2();
    }
    
    
}

class JuegoDados{
    
    constructor(numeroJuego, j1, j2){
        this.numeroJuego = numeroJuego;
        this.jugador1 = j1;
        this.jugador2 = j2;
    }
    

    set tirarDados (jugador1) {
        jugador1 = Math.round((Math.random() * 5) + 1);
        /** 
        this.jugador1.caraDado2 = Math.round((Math.random() * 5) + 1);
        this.jugador2.caraDado1 = Math.round((Math.random() * 5) + 1);
        this.jugador2.caraDado2 = Math.round((Math.random() * 5) + 1);
        */
    }

    get tirarDados(){
        this.jugador1 = (Math.floor(Math.random()*(6-1))+1);
        return this.jugador1;
        
    }

    determinaGanador () {
        if ( ((this.jugador1.caraDado1 + this.jugador1.caraDado2) == 7)
            && ((this.jugador2.caraDado1 + this.jugador2.caraDado2) != 7) )
            return this.jugador1
        else if ( ((this.jugador2.caraDado1 + this.jugador2.caraDado2) == 7)
            && ((this.jugador1.caraDado1 + this.jugador2.caraDado1) != 7) )
            return this.jugador2
        else return null;
    }
}

var pedro = new Jugador("Pedro Sánchez");
var antonio = new Jugador("Antonio Ramírez");
var juegos = new JuegoDados(1, pedro, antonio);
pedro.caraDado1 = juegos.tirarDados;
console.log(pedro.caraDado1);

//console.log(juegos);

//pedro.caraDado1 = 2;

//console.log(pedro.name);
//console.log(pedro.caraDado1);

/* Programar la clase que represente al torneo
clase torneoDados
    jugadas //Arreglo de objetos de clase JuegoDados

    juegosGanadosJugador1   //Hacer privado y métodos getter y setter
    juegosGanadosjugador2   //Hacer privado y métodos getter y setter

    función crear
    función jugar
    función resultado     //hacer privado y métodos getter y setter
*/



//Usar clases para demostrar su funcionamiento
/*
    Simular un torneo de dados.
    El torneo se juega hasta que un jugador gana 3 juegos.
    Un jugador gana un juego cuando la suma de los 2 dados es 7 y el otro no obtiene un 7.
    En caso de que en un juego ninguno de los jugadores obtenga 7, se declara empate
*/