// Función para obtener el nombre de usuario y correo electrónico
function obtenerInformacionUsuario() {

    let nombreUsuario = prompt("Ingresa tu nombre de usuario:");
    let correoUsuario = prompt("Ingresa tu correo electrónico:");

  // Se muestra un saludo con el nombre de usuario
    alert("¡Hola, " + nombreUsuario + "! Bienvenido al juego de preguntas sobre fútbol.");
}

// Función para realizar una pregunta y evaluar la respuesta
function hacerPregunta(pregunta, respuestaCorrecta) {
    let respuestaUsuario = prompt(pregunta);

  // Comprobar si la respuesta del usuario es correcta
    if (respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
        alert("¡Respuesta correcta!");
      return 1; // Devolver 1 punto por respuesta correcta
    } else {
        alert("Respuesta incorrecta. La respuesta correcta es: " + respuestaCorrecta);
      return 0; // No sumar puntos por respuesta incorrecta
}
}

// Función principal para ejecutar el juego
function jugarJuego() {
  // Obtener información del usuario
    obtenerInformacionUsuario();

    let puntaje = 0;

  // Arrays de preguntas y respuestas
    let preguntas = [
        "¿Quién es el mejor jugador de fútbol del mundo?",
        "¿En qué equipo juega Cristiano Ronaldo actualmente?",
        "¿Cuántos balones de oro tiene Lionel Messi?",
        "¿En qué país nació Neymar?",
        "¿Cuántas Copas del Mundo ha ganado la selección de Argentina?"
];

    let respuestasCorrectas = [
        "Lionel Messi",
        "All nassr FC",
        "7",
        "Brasil",
        "3"
];

  // Hacer preguntas y acumular puntajes
    for (var i = 0; i < preguntas.length; i++) {
        puntaje += hacerPregunta(preguntas[i], respuestasCorrectas[i]);
}

  // Menú al final del juego
    let opcionMenu;
    do {
       opcionMenu = prompt("¿Qué deseas hacer?\n1. Ver respuestas correctas\n2. Ver puntaje\n3. Volver a jugar\n4. Salir");

    switch (opcionMenu) {
        case "1":
              // Mostrar respuestas correctas
    alert("Respuestas correctas:\n" + respuestasCorrectas.join("\n"));
        break;
        case "2":
              // Mostrar puntaje final
    alert("Tu puntaje final es: " + puntaje);
        break;
        case "3":
              // Volver a jugar
        puntaje = 0;
    for (let j = 0; j < preguntas.length; j++) {
        puntaje += hacerPregunta(preguntas[j], respuestasCorrectas[j]);
}
    break;
        case "4":
              // Salir del juego
        alert("Gracias por jugar. ¡Nos vemos!");
    break;
        default:
              // Opción no válida
        alert("Opción no válida. Inténtalo de nuevo.");
    break;
    }
} while (opcionMenu !== "4");
}

// Llamar a la función para iniciar el juego
jugarJuego();