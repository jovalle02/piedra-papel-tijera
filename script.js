const piedraDiv = document.querySelector('#piedra');
const papelDiv = document.querySelector('#papel');
const tijeraDiv = document.querySelector('#tijera');
const parrafoDecisionMaquina = document.querySelector('.decisionmaquina');
const informacion = document.querySelector('.info')
const body = document.querySelector('body');

let puntuacionJugador = 0;
let puntuacionMaquina = 0;

const marcador = document.querySelector('.marcador')
marcador.textContent = `${puntuacionJugador} - ${puntuacionMaquina}`


piedraDiv.addEventListener('click', function() {
    onlyOneGame('Piedra')
    ;
  });

papelDiv.addEventListener('click', function() {
    onlyOneGame('Papel');
  });

tijeraDiv.addEventListener('click', function() {
    onlyOneGame('Tijera');
  });


//Funcion para agarrar un numero Random del 1-3 y determinar la eleccion del computador.
function getComputerChoice() {
    let x = Math.floor((Math.random() * 3) + 1);
    //Determinar a que numero corresponde cada decision:
    if (x === 1) {
        return "Papel"
    }
    else if (x === 2) {
        return "Tijera"
    }
    else {
        return "Piedra"
    }
}   


//Funcion para correr el juego solamente una vez.
function onlyOneGame(decision) {
    const decisionPersona = `${decision}`;
    const decisionMaquina = getComputerChoice();
    const resultado = determinarQuienGana(decisionPersona, decisionMaquina);
    parrafoDecisionMaquina.textContent = `La maquina ha elejido ${decisionMaquina}`
    if (resultado === true) {
        informacion.textContent = `¡Felcidades! Has ganado un punto.`;
        informacion.style['color'] = `green`;
        puntuacionJugador += 1;
    } else if (resultado === false) {
        puntuacionMaquina += 1;
        informacion.textContent = `¡Oh noooo! La maquina ha ganado un punto.`;
        informacion.style['color'] = `red`; 
    } else {
        puntuacionJugador += 1;
        puntuacionMaquina += 1;
        informacion.textContent = `¿Es un empate? Todos ganan punto...`;
        informacion.style['color'] = `gray`;
    }
    marcador.textContent = `${puntuacionJugador} - ${puntuacionMaquina}`
    if (puntuacionJugador === 5 || puntuacionMaquina === 5) {
        informacion.style['color'] = `white`;
        if (puntuacionJugador === 5 && puntuacionMaquina === 5){
            informacion.textContent = `ES UN EMPATE`;
            body.style['background-color'] = '#grey'
        } else if (puntuacionJugador === 5) {
            body.style['background-color'] = '#0c8f34'
            informacion.textContent = `¡¡¡GANASTEEEE!!!`;
        } else if (puntuacionMaquina === 5) {
            body.style['background-color'] = '#97080f'
            informacion.textContent = `¡OHHH NOOOO! HAS PERDIDO.`;
        }
    return setTimeout(() => {
        confirm('¿Desea volver a jugar?')? location.reload() : close();
    }, 500);
    }
}


//Funcion para determinar quien gana el juego.

function determinarQuienGana(decisionPersona, decisionMaquina) {
    //Posibles casos con tijera
    if (decisionPersona === "Tijera" && decisionMaquina === "Papel") {
        return true
    } else if (decisionPersona === "Tijera" && decisionMaquina === "Piedra") {
        return false
    } else if (decisionPersona === "Tijera" && decisionMaquina === "Tijera") {
        return undefined
    }
    //Posibles casos con Papel 
    if (decisionPersona === "Papel" && decisionMaquina === "Papel") {
        return undefined
    } else if (decisionPersona === "Papel" && decisionMaquina === "Piedra") {
        return true
    } else if (decisionPersona === "Papel" && decisionMaquina === "Tijera") {
        return false
    }

    //Posibles casos con piedra

    if (decisionPersona === "Piedra" && decisionMaquina === "Papel") {
        return false
    } else if (decisionPersona === "Piedra" && decisionMaquina === "Piedra") {
        return undefined
    } else if (decisionPersona === "Piedra" && decisionMaquina === "Tijera") {
        return true
    }
}