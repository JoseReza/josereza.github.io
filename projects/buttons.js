// Función específica para la navegación de proyectos
function navigateToProject(projectPath) {
    window.location.href = projectPath;
}

// Navegación a proyectos específicos
document.addEventListener('DOMContentLoaded', function() {
    // PLC Node
    const btnPlcNode = document.getElementById("btn-plc-node");
    if (btnPlcNode) {
        btnPlcNode.addEventListener("click", () => {
            navigateToProject("plc-node/index.html");
        });
    }

    // Investigación IIoT
    const btnInvestigacionIiot = document.getElementById("btn-investigacion-iiot");
    if (btnInvestigacionIiot) {
        btnInvestigacionIiot.addEventListener("click", () => {
            navigateToProject("investigacion-iiot/index.html");
        });
    }

    // Máquina soldadora
    const btnMaquinaSoldadora = document.getElementById("btn-maquina-soldadora");
    if (btnMaquinaSoldadora) {
        btnMaquinaSoldadora.addEventListener("click", () => {
            navigateToProject("maquina-soldadora/index.html");
        });
    }

    // Curso Node-RED
    const btnCursoNodeRed = document.getElementById("btn-curso-node-red");
    if (btnCursoNodeRed) {
        btnCursoNodeRed.addEventListener("click", () => {
            navigateToProject("curso-node-red/index.html");
        });
    }

    // Controlador PID
    const btnControladorPid = document.getElementById("btn-controlador_pid");
    if (btnControladorPid) {
        btnControladorPid.addEventListener("click", () => {
            navigateToProject("controlador-pid/index.html");
        });
    }

    // Software de música
    const btnMusicSoftware = document.getElementById("btn-music-software");
    if (btnMusicSoftware) {
        btnMusicSoftware.addEventListener("click", () => {
            navigateToProject("music-software/index.html");
        });
    }

    // Software 3D
    const btn3dSoftware = document.getElementById("btn-3d-software");
    if (btn3dSoftware) {
        btn3dSoftware.addEventListener("click", () => {
            navigateToProject("3d-software/index.html");
        });
    }
});


