function iniciarAplicacion() {
    alert("Bienvenido a EcoTracker: Aprende sobre el cambio climático y cómo reducir tu impacto en el medio ambiente.");

    let Menu = true;

while (Menu) {
    const opciones = prompt(
        "Escoja un tema escribiendo el número correspondiente:\n" +
        "1. Introducción al Cambio Climático\n" +
        "2. Huella de Carbono Personal\n" +
        "3. Consejos Prácticos para Reducir tu Impacto\n" +
        "4. Salir"
    );

    switch (opciones) {
        case "1":
            moduloIntroduccion();
            break;
        case "2":
            moduloCalculadoraHuella();
            break;
        case "3":
            moduloConsejos();
            break
        case "4":
            alert("Gracias por usar EcoTracker. ¡Hasta luego!");
            Menu = false;
            break;
        default:
            alert("Opción no válida. Por favor, selecciona un número del 1 al 4.");
            break;
    }
}
}



function moduloIntroduccion() {
    alert(
        "- Quema de combustibles fósiles: El carbón, el petróleo y el gas natural liberan dióxido de carbono (CO₂) y otros gases de efecto invernadero (GEI).\n" +
        "- Deforestación: La tala de bosques reduce la capacidad de absorción de CO₂, además de liberar el carbono almacenado en los árboles.\n" +
        "- Ganadería intensiva: Produce metano (CH₄), un GEI muy potente, a través de la digestión de los animales.\n" +
        "- Industrialización: Procesos industriales emiten gases como óxidos de nitrógeno y clorofluorocarbonos (CFC), que atrapan el calor en la atmósfera.\n" +
        "- Uso de fertilizantes: Los fertilizantes nitrogenados liberan óxido nitroso (N₂O), otro GEI potente.\n" +
        "- Desperdicio y residuos: La descomposición de residuos orgánicos en vertederos genera metano."
    );
}


function moduloCalculadoraHuella() {

    const transporte = prompt("¿Con qué frecuencia usas transporte privado? (Responde: diario, semanal, nunca)");
    const carne = confirm("¿Consumes carne roja más de 3 veces por semana? Responde: (Aceptar= si/ Cancelar= no)");

    let huella = 0;

    if (transporte === "diario") {
        huella += 5;
    } else if (transporte === "semanal") {
        huella += 2;
    } else if (transporte === "nunca") {
        huella += 0.5;
    } else {
        alert("Respuesta no válida para transporte. Asignando valor por defecto: 1 tonelada.");
        huellaCarbono += 1;
    }


    if (carne) {
        huella += 2;
    } else {
        huella += 0.5;
    }

    
    alert(`Tu huella de carbono estimada es de ${huella.toFixed()} toneladas de CO₂ al año.\nLa media global es de 4 toneladas.`)
    
    return huella
}

iniciarAplicacion();