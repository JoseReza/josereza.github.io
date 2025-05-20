var dominio = 'https://josereza.github.io';

// Función para determinar la ruta base relativa
function getBasePath() {
    const path = window.location.pathname;
    const segments = path.split('/').filter(segment => segment);
    const depth = segments.length - 1;
    return depth > 0 ? '../'.repeat(depth) : './';
}

const basePath = getBasePath();

// Navegación principal
var btn_inicio = document.getElementById("btn-inicio");
var btn_electronica = document.getElementById("btn-electronica");
var btn_mecanica = document.getElementById("btn-mecanica");
var btn_programacion = document.getElementById("btn-programacion");
var btn_comunicaciones = document.getElementById("btn-comunicaciones");
var btn_certificaciones = document.getElementById("btn-certificaciones");
var btn_proyectos = document.getElementById("btn-proyectos");
var btn_imagenes = document.getElementById("btn-imagenes");

if (btn_inicio) btn_inicio.addEventListener("click", () => {
    location.replace(basePath + "index.html");
});

if (btn_electronica) btn_electronica.addEventListener("click", () => {
    location.replace(basePath + "electronics/index.html");
});

if (btn_mecanica) btn_mecanica.addEventListener("click", () => {
    location.replace(basePath + "mecanics/index.html");
});

if (btn_programacion) btn_programacion.addEventListener("click", () => {
    location.replace(basePath + "programming/index.html");
});

if (btn_comunicaciones) btn_comunicaciones.addEventListener("click", () => {
    location.replace(basePath + "communications/index.html");
});

if (btn_certificaciones) btn_certificaciones.addEventListener("click", () => {
    location.replace(basePath + "certifications/index.html");
});

if (btn_proyectos) btn_proyectos.addEventListener("click", () => {
    location.replace(basePath + "projects/index.html");
});

if (btn_imagenes) btn_imagenes.addEventListener("click", () => {
    location.replace(basePath + "images/index.html");
});
