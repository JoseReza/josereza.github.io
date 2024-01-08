var dominio = 'https://josereza.github.io';

var btn_inicio = document.getElementById("btn-inicio");
var btn_electronica = document.getElementById("btn-electronica");
var btn_mecanica = document.getElementById("btn-mecanica");
var btn_programacion = document.getElementById("btn-programacion");
var btn_comunicaciones = document.getElementById("btn-comunicaciones");
var btn_certificaciones = document.getElementById("btn-certificaciones");
var btn_proyectos = document.getElementById("btn-proyectos");
var btn_imagenes = document.getElementById("btn-imagenes");

btn_inicio.addEventListener("click", () => {
    location.replace(dominio)
});

btn_electronica.addEventListener("click", () => {
  location.replace(dominio + "/electronics/index.html")
});

btn_mecanica.addEventListener("click", () => {
  location.replace(dominio + "/mecanics/index.html")
});

btn_programacion.addEventListener("click", () => {
  location.replace(dominio + "/programming/index.html")
});

btn_comunicaciones.addEventListener("click", () => {
  location.replace(dominio + "/telecommunications/index.html")
});

btn_certificaciones.addEventListener("click", () => {
  location.replace(dominio + "/certifications/index.html")
});

btn_proyectos.addEventListener("click", () => {
  location.replace(dominio + "/proyects/index.html")
});

btn_imagenes.addEventListener("click", () => {
  location.replace(dominio + "/images/index.html")
});
