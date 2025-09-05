// Función para determinar la ruta base relativa
function getBasePath() {
    const path = window.location.pathname;
    const segments = path.split('/').filter(segment => segment);
    const depth = segments.length - 1; // -1 porque el último segmento es el archivo actual
    return depth > 0 ? '../'.repeat(depth) : './';
}

// Función para marcar el enlace activo
function setActiveLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.endsWith(href)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

var navbar = document.getElementById("navbar");
const basePath = getBasePath();

navbar.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="position: fixed; top:0; left:0; width: 100%; z-index: 1000;">
    <a class="navbar-brand" href="${basePath}index.html">Portafolio</a>
    <button onclick="function1()" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-center" id="navbarColor01">
        <ul class="navbar-nav mr-auto" style="cursor:pointer;">
            <li class="nav-item">
                <a class="nav-link" href="${basePath}index.html">Inicio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="${basePath}electronics/index.html">Electrónica</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="${basePath}mecanics/index.html">Mecánica</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="${basePath}programming/index.html">Programación</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="${basePath}communications/index.html">Comunicaciones</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="${basePath}certifications/index.html">Certificaciones</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="${basePath}projects/index.html">Proyectos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="${basePath}images/index.html">Imágenes</a>
            </li>
        </ul>
        <div class="navbar-nav ml-auto">
            <button class="btn btn-outline-light btn-sm" onclick="logout()" style="margin-left: 1rem;">
                Cerrar Sesión
            </button>
        </div>
    </div>
</nav>
`;

// Marcar el enlace activo cuando el documento esté listo
document.addEventListener('DOMContentLoaded', setActiveLink);
