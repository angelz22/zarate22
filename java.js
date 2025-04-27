function abrirPestanas() {
    window.open("catalogo.html", "_blank");
    window.open("informacion.html", "_blank");
}
// Función para hacer parpadear el logo
function parpadearLogo() {
    const logo = document.querySelector('.logo'); // Seleccionamos el logo
    logo.classList.add('logo-parpadeo'); // Activamos la animación de parpadeo
}

// Para detener el parpadeo después de cierto tiempo o con un botón
function detenerParpadeo() {
    const logo = document.querySelector('.logo');
    logo.classList.remove('logo-parpadeo'); // Desactivamos la animación de parpadeo
}

// Llamar a la función para iniciar el parpadeo cuando la página cargue
window.onload = function() {
    parpadearLogo();
}
