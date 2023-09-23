document.addEventListener("DOMContentLoaded", function () {
    const diapositivas = document.querySelectorAll(".diapositiva");
    const siguienteBoton = document.getElementById("siguiente");
    const anteriorBoton = document.getElementById("anterior");
    const imagenCumpleanos = document.getElementById("imagenCumpleanos");
    let indiceDiapositiva = 0;

    // Oculta todas las diapositivas, excepto la primera
    for (let i = 1; i < diapositivas.length; i++) {
        diapositivas[i].style.display = "none";
    }

    siguienteBoton.addEventListener("click", function () {
        // Oculta la imagen de "Feliz Cumpleaños" y la diapositiva actual al hacer clic en "Siguiente"
        imagenCumpleanos.style.display = "none";
        diapositivas[indiceDiapositiva].style.display = "none";

        // Avanza al siguiente índice de diapositiva
        indiceDiapositiva = (indiceDiapositiva + 1) % diapositivas.length;

        // Muestra la siguiente diapositiva
        diapositivas[indiceDiapositiva].style.display = "block";
    });

    anteriorBoton.addEventListener("click", function () {
        // Oculta la diapositiva actual al hacer clic en "Anterior"
        diapositivas[indiceDiapositiva].style.display = "none";

        // Retrocede al índice de diapositiva anterior
        indiceDiapositiva = (indiceDiapositiva - 1 + diapositivas.length) % diapositivas.length;

        // Muestra la diapositiva anterior
        diapositivas[indiceDiapositiva].style.display = "block";
    });

    // Muestra la imagen de "Feliz Cumpleaños" al cargar la página
    imagenCumpleanos.style.display = "block";
});
