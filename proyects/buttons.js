var btn_vision_artificial_knn = document.getElementById("btn-vision-artificial-knn");
var btn_reconocimiento_facial = document.getElementById("btn-reconocimiento-facial");
var btn_plc_node = document.getElementById("btn-plc-node");

btn_vision_artificial_knn.addEventListener('click', function(){
    location.replace("./artificial_vision_knn/index.html")
})

btn_reconocimiento_facial.addEventListener('click', function(){
    location.replace("./face_recognition/index.html")
})

btn_plc_node.addEventListener('click', function(){
    location.replace("./plc_node/index.html")
})
