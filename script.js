document.addEventListener('DOMContentLoaded', () => {
    // Aquí puedes añadir interactividad JavaScript más compleja.
    // Por ejemplo, para expandir/contraer nodos o mostrar información adicional.

    const nodos = document.querySelectorAll('.nodo');

    nodos.forEach(nodo => {
        // Ejemplo de evento click (no visible por defecto en este CSS, pero es el lugar para añadirlo)
        nodo.addEventListener('click', () => {
            console.log(`Hiciste clic en: ${nodo.textContent}`);
            // alert(`Información detallada para: ${nodo.textContent}`);
            // Podrías mostrar un modal o un panel lateral con más detalles.
        });

        // El hover se maneja principalmente con CSS para las transiciones.
        // Pero podrías añadir clases para efectos más complejos con JS si lo deseas.
        nodo.addEventListener('mouseenter', () => {
            // console.log(`Mouse sobre: ${nodo.textContent}`);
        });

        nodo.addEventListener('mouseleave', () => {
            // console.log(`Mouse fuera de: ${nodo.textContent}`);
        });
    });
});