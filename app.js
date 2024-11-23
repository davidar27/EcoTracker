function iniciarAplicacion() {
    alert("Bienvenido a EcoTracker: Aprende sobre el cambio climático y cómo reducir tu impacto en el medio ambiente.");

    let Menu = true;
    let reporte = {
        huellaCarbono: 0,
        consejos: [],
    };

    while (Menu) {
        const opciones = prompt(
            "Escoja un tema escribiendo el número correspondiente:\n" +
            "1. Introducción al Cambio Climático\n" +
            "2. Huella de Carbono Personal\n" +
            "3. Consejos Prácticos para Reducir tu Impacto\n" +
            "4. Reporte Final\n" +
            "5. Salir"
        );

        switch (opciones) {
            case "1":
                moduloIntroduccion();
                break;
            case "2":
                reporte.huellaCarbono = moduloCalculadoraHuella(reporte);
                break;
            case "3":
                obtenerDatosConsejos();
                break;
            case "4":
                mostrarReporteFinal(reporte);
                break;
            case "5":
                alert("Gracias por usar EcoTracker. ¡Hasta luego!");
                Menu = false;
                break;
            default:
                alert("Opción no válida. Por favor, selecciona un número del 1 al 5.");
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

function moduloCalculadoraHuella(reporte) {
    const transporte = prompt("¿Con qué frecuencia usas transporte privado? (Responde: diario, semanal, nunca)").toLowerCase();
    const carne = confirm("¿Consumes carne roja más de 3 veces por semana? (Aceptar: sí / Cancelar: no)");

    let huella = 0;

    if (transporte === "diario") {
        huella += 5;
    } else if (transporte === "semanal") {
        huella += 2;
    } else if (transporte === "nunca") {
        huella += 0.5;
    } else {
        alert("Respuesta no válida para transporte. Asignando valor por defecto: 1 tonelada.");
        huella += 1;
    }

    if (carne) {
        huella += 2;
    } else {
        huella += 0.5;
    }

    alert(`Tu huella de carbono estimada es de ${huella.toFixed(2)} toneladas de CO₂ al año.\nLa media global es de 4 toneladas.`);

    moduloConsejos(transporte, carne, reporte);
    return huella;
}

function moduloConsejos(transporte, carne, reporte) {
    let mensaje = "";

    if ((transporte === "diario" || transporte === "semanal") && carne) {
        mensaje =
            "- Optar por transporte público o bicicleta puede reducir tu impacto ambiental significativamente.\n" +
            "- Reducir el consumo de carne roja a una vez por semana puede disminuir tu huella de carbono en 0.5 toneladas al año.";
        reporte.consejos.push("Reduce el uso de transporte privado.");
        reporte.consejos.push("Disminuye el consumo de carne roja.");
    } else if (transporte === "semanal" && !carne) {
        mensaje = "Optar por transporte público o bicicleta puede reducir tu impacto ambiental significativamente.";
        reporte.consejos.push("Usa transporte público.");
    } else if (transporte === "nunca" && carne) {
        mensaje = "- Reducir el consumo de carne roja a una vez por semana puede disminuir tu huella de carbono en 0.5 toneladas al año.";
        reporte.consejos.push("Reduce el consumo de carne roja.");
    } else if (transporte === "nunca" && !carne) {
        mensaje = "¡Felicidades! Ya tienes un impacto ambiental bajo. Gracias por ayudar al medio ambiente.";
    }

    alert(mensaje);
    alert("Regresando al menú principal...");
}

function obtenerDatosConsejos() {
    alert(
        "Consejos prácticos para reducir tu impacto:\n" +
        "- Usa transporte público, bicicleta o camina siempre que sea posible.\n" +
        "- Reduce tu consumo de carne, especialmente roja.\n" +
        "- Recicla y reutiliza materiales para minimizar residuos.\n" +
        "- Usa energía renovable y reduce el consumo de electricidad."
    );
}

function mostrarReporteFinal(reporte) {
    let resumen = "=== Resumen Final ===\n";
    resumen += `Huella de Carbono Estimada: ${reporte.huellaCarbono.toFixed(1)} toneladas de CO₂ al año.\n`;
    resumen += "Consejos Personalizados:\n";
    
    alert(resumen);
}

iniciarAplicacion();