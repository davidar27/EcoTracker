function iniciarAplicacion() {
    alert("Bienvenido a EcoTracker: Aprende sobre el cambio climático y cómo reducir tu impacto en el medio ambiente.");
}

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
        case 1:
            moduloIntroduccion();
            break;
        case 2:
            moduloCalculadoraHuella();
            break;
        case 3:
            moduloConsejos();
            break
        case 4:
            alert("Gracias por usar EcoTracker. ¡Hasta luego!");
            Menu = false;
            break;
        default:
            alert("Opción no válida. Por favor, selecciona un número del 1 al 4.");
            break;
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