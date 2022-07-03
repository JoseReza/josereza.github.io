var navbar = document.getElementById("navbar");

navbar.innerHTML = `

<nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="position: fixed; top:0; left:0; width: 100%;">
        <img src="https://josereza.github.io/src/icon.png" width="50" height="50">
        &nbsp;&nbsp;&nbsp;
        <a class="navbar-brand" href="#">Hoja de experiencia</a>
        <button onclick="function1()" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-center" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" id= "btn-inicio">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id= "btn-electronica">Electrónica</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id= "btn-mecanica">Mecánica</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id= "btn-programacion">Programación</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id= "btn-control">Control</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id= "btn-comunicaciones">Comunicaciones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id= "btn-certificaciones">Certificaciones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id= "btn-proyectos">Proyectos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id= "btn-imagenes">Imagenes</a>
            </li>
          </ul>
        </div>
      </nav>

`;
