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

//Funcion para determinar si la eleccion de la persona es piedra, papel o tijera.  
function determinarDecision(deicision) {
    const lowerCase = deicision.toLowerCase();
    if (lowerCase === "tijera") {
        return "Tijera"
    } else if (lowerCase === "piedra") {
        return "Piedra"
    } else if (lowerCase === "papel"){
        return "Papel"
    } else {
        return "Invalido"
    }

}


//Funcion para correr el juego solamente una vez.
function onlyOneGame() {
    const decisionPersona = determinarDecision(prompt("Elegir piedra, papel o tijera:"));
    const decisionMaquina = getComputerChoice();
    const resultado = determinarQuienGana(decisionPersona, decisionMaquina);

    if (decisionPersona === "Invalido") {
        alert("Su respuesta es invalida, intentelo denuevo!")
        location.reload()
        return
    }
    return resultado
}


//Funcion para determinar quien gana el juego.

function determinarQuienGana(decisionPersona, decisionMaquina) {
    //Posibles casos con tijera
    if (decisionPersona === "Tijera" && decisionMaquina === "Papel") {
        return true
    } else if (decisionPersona === "Tijera" && decisionMaquina === "Pidra") {
        return false
    } else if (decisionPersona === "Tijera" && decisionMaquina === "Tijera") {
        return undefined
    }
    //Posibles casos con Papel 
    if (decisionPersona === "Papel" && decisionMaquina === "Papel") {
        return undefined
    } else if (decisionPersona === "Papel" && decisionMaquina === "Pidra") {
        return true
    } else if (decisionPersona === "Papel" && decisionMaquina === "Tijera") {
        return false
    }

    //Posibles casos con piedra

    if (decisionPersona === "Piedra" && decisionMaquina === "Papel") {
        return false
    } else if (decisionPersona === "Piedra" && decisionMaquina === "Pidra") {
        return undefined
    } else if (decisionPersona === "Piedra" && decisionMaquina === "Tijera") {
        return true
    }
}

//Funcion para realizar el juego completo (5 Rondas)!

function game() {
    let puntuacionJugador = 0;
    let puntuacionMaquina = 0;

    for (let i = 1; i <= 5; i++) {
        let decisionPersona = determinarDecision(prompt("Elegir piedra, papel o tijera:"));
        let decisionMaquina = getComputerChoice();
        
        while (decisionPersona === "Invalido") {
            alert("Opcion invalida.")
            decisionPersona = determinarDecision(prompt("Elegir piedra, papel o tijera:"));
        }

        let resultado = determinarQuienGana(decisionPersona, decisionMaquina);

        if (resultado === true) {
            alert(`La maquina escogio ${decisionMaquina}`)
            alert(`¡Usted Gana! ${decisionPersona} le gana a ${decisionMaquina}. (Punto para el Jugador!)`)
            ++puntuacionJugador
        } else if (resultado === false) {
            alert(`La maquina escogio ${decisionMaquina}`)
            alert(`¡Ohhh nooo! Has perdido, ${decisionPersona} pierde contra ${decisionMaquina}. (Punto para la Maquina!)`)
            ++puntuacionMaquina
        } else {
            alert(`La maquina escogio ${decisionMaquina}`)
            alert("Es un empate! (Nadie recibe puntos!)")
        }

    }
    alert(`La puntuacion final es: ${puntuacionJugador} - ${puntuacionMaquina}`)

    if (puntuacionJugador > puntuacionMaquina) {
        alert("¡EL JUGADOR GANAAAAA!")
    } else if (puntuacionJugador < puntuacionMaquina) {
        alert("Parece que las maquinas son mejores al final de todo.")
    } else {
        alert("¿Es un empate?")
    }

    confirm("Desea jugar nuevamente?") ? location.reload() : alert(":(");
}

game()