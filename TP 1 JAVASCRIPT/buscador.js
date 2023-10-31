// consigna 1:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function determinarParImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}
// consigna 2:
for (let i = 0; i < numeros.length; i++) {
    const resultado = determinarParImpar(numeros[i]);

    document.getElementById("resultado").innerHTML += `El número ${numeros[i]} es ${resultado} <br>`;
}
// consigna 3 :
const frutas = ["manzana", "banana", "uva"];

function agregarFruta(fruta) {
    frutas.push(fruta);
}
document.getElementById("frutas-iniciales").innerHTML = frutas.join("<br>");

// consigna 4:
agregarFruta("naranja");
document.getElementById("frutas-actualizadas").innerHTML = frutas.join("<br>");

// consigna 5:
for (let i = 0; i < frutas.length; i++) {
    document.getElementById("frutas-individuales").innerHTML += frutas[i] + "<br>";
}
//consigna 6: 
function verificarLongitudArray(array) {
    if (array.length % 2 === 0) {
        document.getElementById("longitud-array").textContent = "La longitud del array es par.";
    } else {
        document.getElementById("longitud-array").textContent = "La longitud del array es impar.";
    }
}
verificarLongitudArray(frutas);

//consigna 7:
const frasesAleatorias = [
    "Hola, ¿cómo estás?",
    "Bienvenido a mi página web.",
    "JavaScript es divertido de aprender.",
    "Gracias por visitar."
];
function mostrarFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frasesAleatorias.length);
    document.getElementById("frase-aleatoria").textContent = frasesAleatorias[indiceAleatorio];
}
document.getElementById("boton-aleatorio").addEventListener("click", mostrarFraseAleatoria);

//consigna 8:
function verificarNota() {

    const nombre = document.getElementById("nombre-alumno").value;
    const nota = parseFloat(document.getElementById("nota-alumno").value);

    if (!isNaN(nota)) {
        if (nota > 4) {
            document.getElementById("resultado").textContent = `El alumno ${nombre} aprobó.`;
        } else {
            document.getElementById("resultado").textContent = `El alumno ${nombre} reprobó la cursada.`;
        }
    } else {
        document.getElementById("resultado").textContent = "Por favor, ingresa una nota válida.";
    }
}
//consigna 9: Listas de equipos
const equipoAzul = ["Jugador1", "Jugador2", "Jugador3"];
const equipoAmarillo = ["JugadorA", "JugadorB", "JugadorC"];

function verificarEquipo() {
    const nombreJugador = document.getElementById("nombre-jugador").value;
    
    if (equipoAzul.includes(nombreJugador)) {
        document.getElementById("resultado").textContent = "El jugador es del equipo azul.";
    } 
    
    else if (equipoAmarillo.includes(nombreJugador)) {
        document.getElementById("resultado").textContent = "El jugador es del equipo amarillo.";
    } 
//consigna 10:
    else if (nombreJugador.toLowerCase() === "todos") {
        document.getElementById("resultado").textContent = `Equipo Azul: ${equipoAzul.join(", ")}\nEquipo Amarillo: ${equipoAmarillo.join(", ")}`;
    } 
    
    else {
        document.getElementById("resultado").textContent = "El jugador no se encuentra en ningún equipo.";
    }
}
