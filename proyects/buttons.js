var btn_vision_artificial_knn = document.getElementById("btn-vision-artificial-knn");
var btn_controlador_pid = document.getElementById("btn-controlador_pid");
var btn_plc_node = document.getElementById("btn-plc-node");
var btn_investigacion_iiot = document.getElementById("btn-investigacion-iiot");
var btn_curso_node_red = document.getElementById("btn-curso-node-red");
var btn_maquina_soldadora = document.getElementById("btn-maquina-soldadora");

btn_vision_artificial_knn.addEventListener('click', function(){
    location.replace("./artificial_vision_knn/index.html")
})

btn_controlador_pid.addEventListener('click', function(){
    location.replace("./controlador_pid/index.html")
})

btn_plc_node.addEventListener('click', function(){
    location.replace("https://plcnode.github.io/PlcNode/")
})

btn_investigacion_iiot.addEventListener('click', function(){
    location.replace("./investigacion_iiot/index.html")
})

btn_curso_node_red.addEventListener('click', function(){
    location.replace("./curso_node_red/index.html")
})

btn_maquina_soldadora.addEventListener('click', function(){
    location.replace("./maquina_soldadora/index.html")
})


