document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".pregunta");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const estaAbierto = boton.getAttribute("aria-expanded") === "true";
            
            boton.setAttribute("aria-expanded", !estaAbierto);
            
            const idRespuesta = boton.getAttribute("aria-controls");
            const respuesta = document.getElementById(idRespuesta);
            if (estaAbierto) {
                respuesta.setAttribute("hidden", "");
            } else {
                respuesta.removeAttribute("hidden");
            }
        });
    });
});