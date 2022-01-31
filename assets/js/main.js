//JavaScript de la Calculadora

const historico = [];

function myFunction(id) {
    document.calc.result.value += id;
}

function clearScreen() {
    document.calc.result.value = "";
}

function calculate() {
    try {
        var input = eval(document.calc.result.value);
        historico.push(input)
        console.log(historico)
        document.calc.historico.value = historico;
        document.calc.result.value = input;
    } catch (err) {
        document.calc.result.value = "Error";
    }
}


//JavaScript del juego

const opcionPiedra = document.getElementById("piedra");
const opcionPapel = document.getElementById("papel");
const opcionTijera = document.getElementById("tijera");


//Leemos la entrada del resultado

const resultadoJuego = document.getElementById("resultado-juego");

//Iniciamos el juego
opcionPiedra.addEventListener("click", () => {
    iniciarJuego("piedra");
});

opcionPapel.addEventListener("click", () => {
    iniciarJuego("papel");
});

opcionTijera.addEventListener("click", () => {
    iniciarJuego("tijera");
});

function iniciarJuego(opcion) {
    //jugada de la pc
    const movPc = movimientoPc();
    //jugada del usuario
    const movUsuario = opcion;
    //comparacion de movimiento
    const comp = comparacion(movPc, movUsuario);
    //resultado
    if (comp == 1) {
        resultadoJuego.innerHTML = " Tu eliges: " + movUsuario + "<br> El ordenador elige: " + movPc + "<br> <span class='ganador'>Has ganado!😄</span>";
    }
    if (comp == 2) {
        resultadoJuego.innerHTML = " Tu eliges: " + movUsuario + "<br> El ordenador elige: " + movPc + "<br> <span class='perdedor'>Has perdido😥</span>";
    }
    if (comp == 3) {
        resultadoJuego.innerHTML = " Tu eliges: " + movUsuario + "<br> El ordenador elige: " + movPc + "<br> <span class='empate'>Ha habido un  empate 🤨</span>";
    }
};

function movimientoPc() {
    const opciones = ['piedra', 'papel', 'tijera'];
    const random = Math.floor(Math.random() * 3);
    const mov = opciones[random];
    return (mov);
};

function comparacion(pc, usuario) {
    switch (pc + usuario) {
        case "piedratijera":
        case "papelpiedra":
        case "tijerapapel":
            return 1; //gana
            break;
        case "tijerapiedra":
        case "piedrapapel":
        case "papeltijera":
            return 2; //pierde
            break;
        case "papelpiedra":
        case "piedrapiedra":
        case "tijeratijera":
            return 3; //empate
            break;

    }
}