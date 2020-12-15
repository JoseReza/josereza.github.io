
const functions = require('firebase-functions');

var express = require("express");
var app = express(); 
var { request, response } = require('express');

var dirname = __dirname;

app.get('/', (request, response) => {   
    response.sendFile(dirname +'/views/index.html');
});
app.get('/views/index.js', (request, response) => {   
    response.sendFile(dirname +'/views/index.js');
});
app.get('/src/icon.ico', (request, response) => {   
    response.sendFile(dirname +'/src/icon.png');
});
app.get('/src/josesoto.jpg', (request, response) => {   
    response.sendFile(dirname +'/src/josesoto.jpg');
});
app.get('/src/tec_juarez.png', (request, response) => {   
    response.sendFile(dirname +'/src/tec_juarez.png');
});
app.get('/src/ncie.png', (request, response) => {   
    response.sendFile(dirname +'/src/ncie.png');
});
app.get('/src/cbtis128.jpg', (request, response) => {   
    response.sendFile(dirname +'/src/cbtis128.jpg');
});
app.get('/src/dgeti.png', (request, response) => {   
    response.sendFile(dirname +'/src/dgeti.png');
});
app.get('/src/estatal8360.jpg', (request, response) => {   
    response.sendFile(dirname +'/src/estatal8360.jpg');
});

app.get('/src/bootstrap.css', (request, response) => {   
    response.sendFile(dirname +'/src/bootstrap.css');
});
app.get('/src/background.webp', (request, response) => {   
    response.sendFile(dirname +'/src/background.webp');
});
app.get('/src/electronica.png', (request, response) => {   
    response.sendFile(dirname +'/src/electronica.png');
});
app.get('/src/mecanica.png', (request, response) => {   
    response.sendFile(dirname +'/src/mecanica.png');
});
app.get('/src/programacion.png', (request, response) => {   
    response.sendFile(dirname +'/src/programacion.png');
});
app.get('/src/control.webp', (request, response) => {   
    response.sendFile(dirname +'/src/control.webp');
});
app.get('/src/comunicaciones.webp', (request, response) => {   
    response.sendFile(dirname +'/src/comunicaciones.webp');
});



app.get('/src/cerificado_developer_land.pdf', (request, response) => {   
    response.sendFile(dirname +'/src/cerificado_developer_land.pdf');
});
app.get('/src/certificado_base_de_datos_relacionales.pdf', (request, response) => {   
    response.sendFile(dirname +'/src/certificado_base_de_datos_relacionales.pdf');
});
app.get('/src/certificado_de_finalizacion_aprende_visual_studio_code.pdf', (request, response) => {   
    response.sendFile(dirname +'/src/certificado_de_finalizacion_aprende_visual_studio_code.pdf');
});

app.get('/src/certificado_desarrollo_web_full_stack.pdf', (request, response) => {   
    response.sendFile(dirname +'/src/certificado_desarrollo_web_full_stack.pdf');
});
app.get('/src/certificado_desarrollo_web.pdf', (request, response) => {   
    response.sendFile(dirname +'/src/certificado_desarrollo_web.pdf');
});
app.get('/src/certificado_gestion_de_proyectos.pdf', (request, response) => {   
    response.sendFile(dirname +'/src/certificado_gestion_de_proyectos.pdf');
});

app.get('/src/certificado_gestion_del_tiempo_1.pdf', (request, response) => {   
    response.sendFile(dirname +'/src/certificado_gestion_del_tiempo_1.pdf');
});
app.get('/src/certificado_gestion_del_tiempo_2.pdf', (request, response) => {   
    response.sendFile(dirname +'/src/certificado_gestion_del_tiempo_2.pdf');
});
app.get('/src/certificado_github.pdf', (request, response) => {   
    response.sendFile(dirname +'/src/certificado_github.pdf');
});

app.get('/src/certificado_html_css_1.pdf', (request, response) => {   
    response.sendFile(dirname +'/src/certificado_html_css_1.pdf');
});
app.get('/src/certificado_html_css_2.pdf', (request, response) => {   
    response.sendFile(dirname +'/src/certificado_html_css_2.pdf');
});
app.get('/src/certificado_javascript_1.pdf', (request, response) => {   
    response.sendFile(dirname +'/src/certificado_javascript_1.pdf');
});

app.get('/src/certificado_javascript_2.pdf', (request, response) => {   
    response.sendFile(dirname +'/src/certificado_javascript_2.pdf');
});
app.get('/src/certificado_javascript_3.pdf', (request, response) => {   
    response.sendFile(dirname +'/src/certificado_javascript_3.pdf');
});
app.get('/src/certificado_javascript_4.pdf', (request, response) => {   
    response.sendFile(dirname +'/src/certificado_javascript_4.pdf');
});

app.get('/src/certificado_node.js_1.pdf', (request, response) => {   
    response.sendFile(dirname +'/src/certificado_node.js_1.pdf');
});
app.get('/src/certificado_node.js_2.pdf', (request, response) => {   
    response.sendFile(dirname +'/src/certificado_node.js_2.pdf');
});
app.get('/src/certificado_python.pdf', (request, response) => {   
    response.sendFile(dirname +'/src/certificado_python.pdf');
});




exports.app = functions.https.onRequest(app);