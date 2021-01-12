
            function inicio(){
              pagina.innerHTML = `<div class="text-center">
                                    <br>
                                    <img src="./src/smt.jpg" width = "300">
                                    <br>
                                    <img src="./src/icon.ico" width = "100" height = "100">
                                    <h4>Nodo de creatividad, innovación y emprendimiento</h4>
                                    <p>ncie@itcj.edu.mx </p>
                                    <br>
                                    <img src="./src/wifinode.png" width = "100" height = "100">
                                    <h3> Wifi Node </h3>
                                    <a class="btn btn-lg btn-warning" href="https://wifi-node-d9cf0.web.app/home_es">Ver más</a>
                                    </div>`;
            }
            function ejecutar(){
                pagina.innerHTML = `<h2 class="text-center bg-primary text-white">Ejecutar</h2>
                                    <div class="mx-auto card text-white bg-primary mb-3 text-center" style="max-width: 20rem;">
                                    <div class="card-body">
                                    <h4 class="card-title bg-warning text-center">Ejecutar</h4>
                                    <p class="card-title">
                                    <p><a onClick = "ejecutar_iniciar()" class="btn btn-warning btn-lg">Iniciar</a></p>
                                    <p><a onClick = "ejecutar_parar()" class="btn btn-warning btn-lg">Detener</a></p>
                                    <div class="mx-auto card text-white bg-primary mb-3 text-center" style="max-width: 20rem;">
                                        <div class="card-body">
                                          <h4 class="card-title bg-warning text-center">Rutina guardada</h4>
                                            <p class="card-title">
                                            <p id="RUTINA"></p>
                                            G00 X00 Y00 Z00 F00
                                            <br>
                                            G00 X01 Y02 Z03 F10
                                            <br>
                                            G00 X00 Y04 Z06 F20
                                            <br>
                                            G00 X-02 Y04 Z00 F40
                                            <br>
                                            G00 X01 Y09 Z05 F50
                                            <br>
                                            </p>
                                        </div>
                                  </div>
                                    </p>
                                    </div>
                                    </div>
                                    <div class="mx-auto card text-white bg-primary mb-3 text-center" style="max-width: 20rem;">
                                        <div class="card-body">
                                            <h4 class="card-title bg-warning text-center">Avance</h4>
                                            <p class="card-title">
                                            <p><a onClick="control_manual_avance_lineal()" class="btn btn-warning btn-lg">Lineal</a> </p>                
                                            <p><a onClick="control_manual_avance_angular()" class="btn btn-warning btn-lg">Angular</a></p>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mx-auto card text-white bg-primary mb-3 text-center" style="max-width: 20rem;">
                                        <div class="card-body">
                                            <h4 class="card-title bg-warning text-center">Velocidad</h4>
                                            <p class="card-title">
                                            <p><a onClick="control_manual_velocidad_lineal()" class="btn btn-warning btn-lg">Lineal</a> </p>                
                                            <p><a onClick="control_manual_velocidad_angular()" class="btn btn-warning btn-lg">Angular</a></p>
                                            </p>
                                        </div>
                                    </div>`;
            }
           function control_manual(){
                pagina.innerHTML = `<h2 class="text-center bg-primary text-white">Control Manual</h2>
                                    <div class="mx-auto card text-white bg-primary mb-3 text-center" style="max-width: 20rem;">
                                        <div class="card-body">
                                            <h4 class="card-title bg-warning text-center">Valores actuales</h4>
                                            <p class="card-title">  
                                            <p id = "X">X00</p> 
                                            <p id = "Y">Y00</p> 
                                            <p id = "Z">Z00</p> 
                                            <p id = "U">U00</p> 
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mx-auto card text-white bg-primary mb-3 text-center" style="max-width: 20rem;">
                                        <div class="card-body">
                                            <h4 class="card-title bg-warning text-center">Control manual</h4>
                                            <p class="card-title">  
                                                <p><a onClick="control_manual_z_menos()" class="btn btn-warning btn-sm">Z-</a>
                                                <a onClick="control_manual_y_mas()" class="btn btn-warning btn-sm">Y+</a>
                                                <a onClick="control_manual_z_mas()" class="btn btn-warning btn-sm">Z+</a></p>
                                                <p><a onClick="control_manual_x_menos()" class="btn btn-warning btn-sm">X-</a>
                                                <a onClick="control_manual_ciclo_home()" class="btn btn-warning btn-sm">Home</a>
                                                <a onClick="control_manual_x_mas()" class="btn btn-warning btn-sm">X+</a></p>
                                                <p><a onClick="control_manual_u_menos()" class="btn btn-warning btn-sm">U-</a>
                                                <a onClick="control_manual_y_menos()" class="btn btn-warning btn-sm">Y-</a>
                                                <a onClick="control_manual_u_mas()" class="btn btn-warning btn-sm">U+</a></p>
                                            </p>
                                        </div>
                                        <div class="text-center">
                                          <p><a onClick="programar_guardar_punto()" class="btn btn-primary btn-lg">Guardar punto</a></p>
                                        </div>
                                    </div>
                                    <div class="mx-auto card text-white bg-primary mb-3 text-center" style="max-width: 20rem;">
                                        <div class="card-body">
                                            <h4 class="card-title bg-warning text-center">Avance</h4>
                                            <p class="card-title">
                                            <p><a onClick="control_manual_avance_lineal()" class="btn btn-warning btn-lg">Lineal</a> </p>                
                                            <p><a onClick="control_manual_avance_angular()" class="btn btn-warning btn-lg">Angular</a></p>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mx-auto card text-white bg-primary mb-3 text-center" style="max-width: 20rem;">
                                        <div class="card-body">
                                            <h4 class="card-title bg-warning text-center">Velocidad</h4>
                                            <p class="card-title">
                                            <p><a onClick="control_manual_velocidad_lineal()" class="btn btn-warning btn-lg">Lineal</a> </p>                
                                            <p><a onClick="control_manual_velocidad_angular()" class="btn btn-warning btn-lg">Angular</a></p>
                                            </p>
                                        </div>
                                    </div>
                                    `;
            }
            function programar(){
                pagina.innerHTML = `<h2 class="text-center bg-primary text-white">Programar</h2>
                                    <div class="mx-auto card text-white bg-primary mb-3 text-center" style="max-width: 20rem;">
                                        <div class="card-body">
                                            <h4 class="card-title bg-warning text-center">Valores a programar</h4>
                                            <p class="card-title">
                                              <p id = "X">X00</p> 
                                              <p id = "Y">Y00</p> 
                                              <p id = "Z">Z00</p> 
                                              <p id = "U">U00</p> 
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mx-auto card text-white bg-primary mb-3 text-center" style="max-width: 20rem;">
                                        <div class="card-body">
                                            <h4 class="card-title bg-warning text-center">Rutina programada</h4>
                                            <p class="card-title">
                                            <p id="RUTINA"></p>
                                            G00 X00 Y00 Z00 F00
                                            <br>
                                            G00 X01 Y02 Z03 F10
                                            <br>
                                            G00 X00 Y04 Z06 F20
                                            <br>
                                            G00 X-02 Y04 Z00 F40
                                            <br>
                                            G00 X01 Y09 Z05 F50
                                            <br>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mx-auto card text-white bg-primary mb-3 text-center" style="max-width: 20rem;">
                                        <div class="card-body">
                                            <h4 class="card-title bg-warning text-center">Opciones</h4>
                                            <p class="card-title">
                                            <p><a onClick="programar_guardar_punto()" class="btn btn-warning btn-lg">Guardar punto</a></p>
                                            <p><a onClick="programar_repeticion()" class="btn btn-warning btn-lg">Repetir movimiento</a></p>
                                            <p><a onClick="programar_borrar_ultimo_punto()" class="btn btn-warning btn-lg">Borrar ultimo punto</a></p>
                                            <p><a onClick="programar_borrar_rutina()" class="btn btn-warning btn-lg">Borrar rutina</a></p>
                                            </p>
                                        </div>
                                    </div>`;
            }
            function configurar(){
                pagina.innerHTML = `<h2 class="text-center bg-primary text-white">Configuracion Wifi</h2>
                                    <br>
                                      <div class="text-center">
                                        <label>Nombre:</label>
                                        <br>
                                        <input type="text" id="WIFINAME" value="WIFINAME" maxlength="19" required>
                                        <br>
                                        <label>Contraseña:</label>
                                        <br>
                                        <input type="text" id="WIFIPASSWORD" value="WIFIPASSWORD" maxlength="19" required>
                                        <br>
                                        <label>Modo:</label>
                                        <br>
                                        <form name="wifi">
                                          <input type="radio" name="WIFIMODE" value="0" />
                                          <label for="0">Punto de acceso Wifi</label>
                                          <br>
                                          <input type="radio" name="WIFIMODE" value="1" />
                                          <label for="1">Cliente Wifi</label>
                                        </form>
                                        </div>
                                        <br>
                                        <br>
                                        <div class="text-center">
                                        <a onClick = "reiniciar()" class="btn btn-sm btn-danger">Guardar y reiniciar</a>
                                        </div>`;
            }      
            function control_manual_avance_lineal(){
              pagina.innerHTML = `
              <div class="mx-auto card text-white bg-primary mb-3 text-center" style="max-width: 20rem;">
                    <div class="card-body">
                      <h4 class="card-title bg-warning text-center">Avance lineal</h4>
                        <p class="card-title">
                        <p id ="AVANCELINEAL">1 mm</p>  
                        <p><a onClick="control_manual_avance_lineal_mas()" class="btn btn-warning btn-lg">+</a></p>
                        <p><a onClick="control_manual_avance_lineal_menos()" class="btn btn-warning btn-lg">-</a></p>
                        <p><a onClick="control_manual()" class="btn btn-warning btn-lg">Regresar</a></p>
                        </p>
                    </div>
              </div>`;
            }
            function control_manual_avance_angular(){
              pagina.innerHTML = `
              <div class="mx-auto card text-white bg-primary mb-3 text-center" style="max-width: 20rem;">
                    <div class="card-body">
                      <h4 class="card-title bg-warning text-center">Avance angular</h4>
                        <p class="card-title">
                          <p id ="AVANCEANGULAR">1 grado</p> 
                        <p><a onClick="control_manual_avance_angular_mas()" class="btn btn-warning btn-lg">+</a></p>
                        <p><a onClick="control_manual_avance_angular_menos()" class="btn btn-warning btn-lg">-</a></p>
                        <p><a onClick="control_manual()" class="btn btn-warning btn-lg">Regresar</a></p>
                        </p>
                    </div>
              </div>`;
            }
            function control_manual_velocidad_lineal(){
              pagina.innerHTML = `<div class="mx-auto card text-white bg-primary mb-3 text-center" style="max-width: 20rem;">
                                    <div class="card-body">
                                      <h4 class="card-title bg-warning text-center">Velocidad lineal</h4>
                                        <p class="card-title">
                                          <p id ="VELOCIDADLINEAL">1 mm/s</p> 
                                        <p><a onClick="control_manual_velocidad_lineal_mas()" class="btn btn-warning btn-lg">+</a></p>
                                        <p><a onClick="control_manual_velocidad_lineal_menos()" class="btn btn-warning btn-lg">-</a></p>
                                        <p><a onClick="control_manual()" class="btn btn-warning btn-lg">Regresar</a></p>
                                        </p>
                                    </div>
                              </div>`;
            }
            function control_manual_velocidad_angular(){
              pagina.innerHTML = `<div class="mx-auto card text-white bg-primary mb-3 text-center" style="max-width: 20rem;">
                                      <div class="card-body">
                                          <h4 class="card-title bg-warning text-center">Velocidad angular</h4>
                                            <p class="card-title">
                                              <p id ="VELOCIDADANGULAR">1 grado/s</p>
                                            <p><a onClick="control_manual_velocidad_angular_mas()" class="btn btn-warning btn-lg">+</a></p>
                                            <p><a onClick="control_manual_velocidad_angular_menos()" class="btn btn-warning btn-lg">-</a></p>
                                            <p><a onClick="control_manual()" class="btn btn-warning btn-lg">Regresar</a></p>
                                            </p>
                                        </div>
                                  </div>`;  
            }
            function control_manual_programar(){
              pagina.innerHTML = `<div class="mx-auto card text-white bg-primary mb-3 text-center" style="max-width: 20rem;">
                                        <div class="card-body">
                                          <h4 class="card-title bg-warning text-center">Valores a programar</h4>
                                            <p class="card-title">
                                              <p id = "X">X00</p> 
                                              <p id = "Y">Y00</p> 
                                              <p id = "Z">Z00</p> 
                                              <p id = "U">U00</p> 
                                            </p>
                                        </div>
                                  </div>
                                  <div class="mx-auto card text-white bg-primary mb-3 text-center" style="max-width: 20rem;">
                                        <div class="card-body">
                                          <h4 class="card-title bg-warning text-center">Rutina guardada</h4>
                                            <p class="card-title">
                                            <p id="RUTINA">
                                            G00 X00 Y00 Z00 F00
                                            <br>
                                            G00 X01 Y02 Z03 F10
                                            <br>
                                            G00 X00 Y04 Z06 F20
                                            <br>
                                            G00 X-02 Y04 Z00 F40
                                            <br>
                                            G00 X01 Y09 Z05 F50
                                            <br>
                                            </p>
                                        </div>
                                  </div>
                                  <div class="mx-auto card text-white bg-primary mb-3 text-center" style="max-width: 20rem;">
                                        <div class="card-body">
                                          <h4 class="card-title bg-warning text-center">Opciones</h4>
                                            <p class="card-title">
                                            <p><a onClick="control_manual_programar_guardar_punto()" class="btn btn-warning btn-lg">Guardar punto</a></p>
                                            <p><a onClick="control_manual_programar_borrar_ultimo_punto()" class="btn btn-warning btn-lg">Borrar ultimo punto</a></p>
                                            <p><a onClick="control_manual_programar_borrar_rutina()" class="btn btn-warning btn-lg">Borrar rutina</a></p>
                                            <p><a onClick="control_manual()" class="btn btn-primary btn-lg">Regresar</a></p>
                                            </p>
                                        </div>
                                  </div>`;
            }
            function reiniciar(){
              var wifimode = "0";
              if(document.wifi.WIFIMODE.value === "1"){
                wifimode = "1";
              }
              else {
                wifimode = "0";
              }
              var json_enviar = `{ "WIFINAME" : "`+document.getElementById("WIFINAME").value+`", "WIFIPASSWORD": "`+document.getElementById("WIFIPASSWORD").value+`",
                                  "WIFIMODE": "`+ wifimode+`", "function": "reiniciar"}`;
            }