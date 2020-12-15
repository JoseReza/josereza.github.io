var page = document.getElementById("page");
var trayectoria = document.getElementById("trayectoria");

var btn_inicio = document.getElementById("btn-inicio");
var btn_electronica = document.getElementById("btn-electronica");
var btn_mecanica = document.getElementById("btn-mecanica");
var btn_programacion = document.getElementById("btn-programacion");
var btn_control = document.getElementById("btn-control");
var btn_comunicaciones = document.getElementById("btn-comunicaciones");
var btn_certificaciones = document.getElementById("btn-certificaciones");

var inicio = page.innerHTML;

btn_inicio.addEventListener("click", () => {
    page.innerHTML = inicio;
});

btn_electronica.addEventListener("click", () => {
    page.innerHTML = `

    <div class="jumbotron">
    <img class="img-fluid rounded p-3" width="200" src="/src/electronica.png">
      <h2>Electrónica</h2>
      <hr class="my-4">
    </div>
    <br>

    <div class="text-center text-white bg-dark p-6 rounded">
                <table class="table  text-white bg-primary rounded text-center p-6">
                    <tr>
                      <td class="bg-dark">Electrónica</td><td>
                                                          <br>&nbsp;Lectura e interpretación de diagramas electricos
                                                          <br>&nbsp;Ley de ohm
                                                          <br>&nbsp;Ley de Kirchoff
                                                          <br>&nbsp;Conocimiento y práctica de uso de multimetro
                                                          <br>&nbsp;Conocimiento y práctica de uso de protoboard
                                                          <br>&nbsp;Conexión de circuitos en corriente directa
                                                          <br>&nbsp;Práctica de soldadura con estaño
                                                          <br>
                                                          </td>
                    </tr>
                    
                    <tr>
                      <td class="bg-dark">Diseño</td><td>                
                                                      <br>&nbsp;Diseño de diagramas esquematicos
                                                      <br>&nbsp;Diseño de tablillas electrónicas 
                                                      <br>&nbsp;Uso de software Multisim
                                                      <br>&nbsp;Uso de software EasyEda
                                                      <br>&nbsp;Uso de Software SolidWorks Electrical
                                                      <br>
                                                      </td>
                    </tr>

                    <tr>
                      <td class="bg-dark">Electrónica analóga</td><td>                
                                                                  <br>&nbsp;Obtención y procesamiento de señales analogas
                                                                  <br>&nbsp;Manejo de resistencias fijas y variables
                                                                  <br>&nbsp;Divisores de corriente y voltaje
                                                                  <br>&nbsp;Comparadores de voltaje
                                                                  <br>&nbsp;Acondicionamiento de señal digital-analogica (DAC)
                                                                  <br>
                                                                  </td>
                    </tr>

                    <tr>
                      <td class="bg-dark">Electronica digital</td><td>                
                                                                  <br>&nbsp;Uso de transistores 2n2222A y demás
                                                                  <br>&nbsp;Obtención y procesamiento de señales digitales
                                                                  <br>&nbsp;Práctica y conocimientos en lógica binaria
                                                                  <br>&nbsp;Compuertas lógicas
                                                                  <br>&nbsp;Diseño de circuitos con compuertas lógicas
                                                                  <br>&nbsp;Timers 555, contadores, decodificadores, multiplexadores
                                                                  <br>&nbsp;Lectura e interpretación de tablas de verdad 
                                                                  <br>&nbsp;Algebra de Boole
                                                                  <br>&nbsp;Mapas de Karnaugh
                                                                  <br>&nbsp;Acondicionamiento de señal analogica-digital (ADC)
                                                                  <br>
                                                                  </td>
                    </tr>
                    <tr>
                      <td class="bg-dark">Electronica de potencia</td><td>                
                                                                      <br>&nbsp;Control de dispositivos de alta potencia desde la baja potencia
                                                                      <br>&nbsp;Conocimiento y práctica con relevadores electromecánicos y de estado sólido
                                                                      <br>&nbsp;Proteción de circuitos con optoacopladores
                                                                      <br>&nbsp;Diseño de dimmers
                                                                      <br>&nbsp;Reguladores de frecuencia
                                                                      <br>&nbsp;Moduladores por ancho de pulso
                                                                      <br>
                                                                      </td>
                    </tr>

                    <tr>
                      <td class="bg-dark">Microcontroladores</td><td>                
                                                                  <br>&nbsp;Programación en diagramas de flujo
                                                                  <br>&nbsp;Programación en lenguaje C
                                                                  <br>&nbsp;Microcontralores Pic de Microchip
                                                                  <br>&nbsp;Microcontroladores Atmel
                                                                  <br>
                                                                 </td>
                    </tr>

                    <tr>
                      <td class="bg-dark">Sistemas embebidos</td><td>                                
                                                                  <br>&nbsp;Sistema embebidos Arduino
                                                                  <br>&nbsp;Sistema embebidos Esp8266 y Esp32
                                                                  <br>&nbsp;Sistema embebidos Raspberry Pi
                                                                  <br>&nbsp;Sistema embebidos BeagleBone
                                                                  <br>
                                                                 </td>
                    </tr>

                    <tr>
                      <td class="bg-dark">Controladores logicos programables</td><td>                                
                                                                                  <br>&nbsp;Lectura e interpretación de diagrama escalera
                                                                                  <br>&nbsp;Lectura e interpretación de diagramas de flujo
                                                                                  <br>&nbsp;Plc´s Siemens 
                                                                                  <br>&nbsp;Plc´s Moeller
                                                                                  <br>&nbsp;Plc´s Allen Bradley
                                                                                  <br>
                                                                                  </td>
                    </tr>
                </table>
              </div>
      <div>
    <div>
                    `;
});
btn_mecanica.addEventListener("click", () => {
    page.innerHTML = `

    <div class="jumbotron">
    <img class="img-fluid rounded p-3" width="200" src="/src/mecanica.png">
      <h2>Mecánica</h2>
      <hr class="my-4">
    </div>

    <div class="card text-center mx-auto" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Mecanica</h5>
        <p class="card-text">
          <p class="text-center">Diseño y modelado 3d en solidworks</p>
          <p class="text-center">Diseño de pcb´s en software easyeda</p>
          <p class="text-center">Diseño de diagramas eléctricos en multisim y easyeda</p>
        </p>
      </div>
    </div>
                    `;
});
btn_programacion.addEventListener("click", () => {
    page.innerHTML = `

    <div class="jumbotron">
    <img class="img-fluid rounded p-3" width="200" src="/src/programacion.png">
      <h2>Programacion</h2>
      <hr class="my-4">
    </div>

    <div class="text-center text-white bg-dark p-6 rounded">
    <table class="table  text-white bg-primary rounded text-center p-6">
        <tr>
          <td class="bg-dark">Tipos de programación</td><td>
                                              <br>&nbsp;Programación sincrona
                                              <br>&nbsp;Programación asincrona
                                              <br>&nbsp;Programación Orientada a objetos
                                              <br>&nbsp;Programación modular
                                              <br>
                                              </td>
        </tr>

        <tr>
          <td class="bg-dark">Aplicaciones</td><td>                                
                                                        <br>&nbsp;Desarrollo de interfaces de usuario(Comunicación Hombre-Máquina)
                                                        <br>&nbsp;Comunciación Máquina-Máquina (M2M)
                                                        <br>&nbsp;Procesamiento de señales
                                                        <br>&nbsp;Control y monitoreo de hardware
                                                        <br>
                                                       </td>
        </tr>
        
        <tr>
          <td class="bg-dark">Lenguajes</td><td>                
                                          <br>&nbsp;C++
                                          <br>&nbsp;Javascript
                                          <br>&nbsp;Html
                                          <br>&nbsp;Css
                                          <br>&nbsp;Python
                                          <br>
                                          </td>
        </tr>

        <tr>
          <td class="bg-dark">Entornos de desarrollo integrado</td><td>                
                                                      <br>&nbsp;Visual Studio Code
                                                      <br>&nbsp;Arduino IDE
                                                      <br>&nbsp;DEV C++
                                                      <br>&nbsp;Node-Red
                                                      </td>
        </tr>

        <tr>
          <td class="bg-dark">Sistemas operativos</td><td>                
                                                      <br>&nbsp;Windows
                                                      <br>&nbsp;Raspbian
                                                      <br>&nbsp;Ubuntu
                                                      <br>
                                                      </td>
        </tr>
        <tr>
          <td class="bg-dark">Hardware unión software</td><td>                
                                                          <br>&nbsp;Computador común
                                                          <br>&nbsp;Arduino Uno, Mega, Nano, Leonardo
                                                          <br>&nbsp;Esp32, Esp8266, Esp32 Cam, Esp01
                                                          <br>&nbsp;Raspberry Pi 3, 4, zero, zero w
                                                          <br>&nbsp;BeagleBone Black
                                                          <br>Pic 16f886
                                                          </td>
        </tr>
    </table>
  </div>
                    `;
});
btn_control.addEventListener("click", () => {
    page.innerHTML = `
    <div class="jumbotron">
    <img class="img-fluid rounded p-3" width="200" src="/src/control.webp">
      <h2>Control</h2>
      <hr class="my-4">
    </div>
                    `;
});

btn_comunicaciones.addEventListener("click", () => {
  page.innerHTML = `
  <div class="jumbotron">
  <img class="img-fluid rounded p-3" width="200" src="/src/comunicaciones.webp">
    <h2>Comunicaciones</h2>
    <hr class="my-4">
  </div>

  <div class="text-center text-white bg-dark p-6 rounded">
    <table class="table  text-white bg-primary rounded text-center p-6">
        <tr>
          <td class="bg-dark">Medios de comunicación</td><td>
                                              <br>&nbsp;
                                              <br>&nbsp;Alambrica
                                              <br>&nbsp;Señales de voltaje
                                              <br>&nbsp;Digitales
                                              <br>&nbsp;Analógas
                                              <br>&nbsp;Inalambrica
                                              <br>&nbsp;Luz visible
                                              <br>&nbsp;Infrarrojo
                                              <br>&nbsp;Radiofrecuencia
                                              <br>
                                              </td>
        </tr>

        <tr>
        <td class="bg-dark">Protocolos de comunicación en medio alambrico</td><td>
                                              <br>&nbsp;Protócolo Serial (Uart)
                                              <br>&nbsp;Protócolo I2c
                                              <br>&nbsp;Protócolo ICSP
                                              <br>&nbsp;Filtrado de señales analogas
                                              <br>&nbsp;Filtrado de señales digitales
                                              <br>
                                              </td>
        </tr>

        <tr>
        <td class="bg-dark">Protocolos de comunicación en medio inalambrico</td><td>
                                              <br>&nbsp;Protócolo Wifi
                                              <br>&nbsp;Protócolo Bluetooh
                                              <br>&nbsp;Protócolos de internet
                                              <br>&nbsp;IPV6, IPV4
                                              <br>&nbsp;Protócolo MQTT
                                              <br>&nbsp;Protócolo Websockets
                                              <br>&nbsp;Protócolo HTTP (GET, POST, PUT, DELETE)
                                              <br>&nbsp;Empaquetamiento de información en formato JSON
                                              <br>
                                              </td>
        </tr>
    </table>
  </div>
                  `;
});

btn_certificaciones.addEventListener("click", () => {
  page.innerHTML = `

  <div class="jumbotron">
    <h2>Certificaciones</h2>
    <hr class="my-4">
  </div>

  <div class="text-center p-5">
    <embed src="/src/certificado_desarrollo_web.pdf" type="application/pdf" width="100%" height="600px" />
    <embed src="/src/certificado_desarrollo_web_full_stack.pdf" type="application/pdf" width="100%" height="600px" />
    <embed src="/src/certificado_gestion_de_proyectos.pdf" type="application/pdf" width="100%" height="600px" />
    <embed src="/src/certificado_gestion_del_tiempo_1.pdf" type="application/pdf" width="100%" height="600px" />
    <embed src="/src/certificado_gestion_del_tiempo_2.pdf" type="application/pdf" width="100%" height="600px" />
    <embed src="/src/certificado_github.pdf" type="application/pdf" width="100%" height="600px" />
    <embed src="/src/certificado_de_finalizacion_aprende_visual_studio_code.pdf" type="application/pdf" width="100%" height="600px" />
    <embed src="/src/certificado_javascript_1.pdf" type="application/pdf" width="100%" height="600px" />
    <embed src="/src/certificado_javascript_2.pdf" type="application/pdf" width="100%" height="600px" />
    <embed src="/src/certificado_javascript_3.pdf" type="application/pdf" width="100%" height="600px" />
    <embed src="/src/certificado_javascript_4.pdf" type="application/pdf" width="100%" height="600px" />
    <embed src="/src/certificado_html_css_1.pdf" type="application/pdf" width="100%" height="600px" />
    <embed src="/src/certificado_html_css_2.pdf" type="application/pdf" width="100%" height="600px" />
    <embed src="/src/certificado_node.js_1.pdf" type="application/pdf" width="100%" height="600px" />
    <embed src="/src/certificado_node.js_2.pdf" type="application/pdf" width="100%" height="600px" />
    <embed src="/src/certificado_python.pdf" type="application/pdf" width="100%" height="600px" />
    <embed src="/src/cerificado_developer_land.pdf" type="application/pdf" width="100%" height="600px" />
    <embed src="/src/certificado_base_de_datos_relacionales.pdf" type="application/pdf" width="100%" height="600px" />
  </div>
  
                  `;
});