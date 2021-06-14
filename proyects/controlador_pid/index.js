
        var output_P = document.getElementById("salidaP")
        var output_I = document.getElementById("salidaI")
        var output_D = document.getElementById("salidaD")
        var output = document.getElementById("salida")
        var input_kp = document.getElementById("kp")
        var input_ki = document.getElementById("ki")
        var input_kd = document.getElementById("kd")
        var input_setPoint = document.getElementById("setPoint")
        var input_TAmbiente = document.getElementById("TAmbiente")
        var input_TMin = document.getElementById("TMin")
        var btn_guardar = document.getElementById("guardar")

        var kp = Number(input_kp.value);
        var ki = Number(input_ki.value);
        var kd = Number(input_kd.value);

        var PPMax = 100;
        var PPMin = 0;
        var PPActual = 0;
        var TAmbiente = Number(input_TAmbiente.value);
        var TMin = Number(input_TMin.value);

        var setPoint = Number(input_setPoint.value);
        var setPointArray = [0];
        var entrada = 0;
        var entradaArray = [0];
        var entradaActual = 0;
        var entradaAnterior = 0;
        var error = 0;
        var salida = 0;
        var salidaP = 0;
        var salidaI = 0;
        var salidaD = 0;
        var periodoDeCalculo = 0.5;

        btn_guardar.addEventListener("click", function(){
            TAmbiente = Number(input_TAmbiente.value); 
            TMin = Number(input_TMin.value);
            setPoint = Number(input_setPoint.value);
            kp = Number(input_kp.value);
            ki = Number(input_ki.value);
            kd = Number(input_kd.value);
        })
        
        var ctx = document.getElementById('myChart').getContext('2d');

        var xArray = [0];
        var yArray = [setPoint];

        var chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: xArray,
                    datasets: [{
                        label: 'Punto de fijacion (*C)',
                        borderColor: 'rgb(255, 0, 0)',
                        data: yArray
                    },
                    {
                        label: 'Entrada de sensor (*C)',
                        borderColor: 'rgb(0, 0, 255)',
                        data: yArray
                    }]
                },
                options: {
                    animation: false
                }
        })

        function renderizarGrafica(xArray, setPointArray, entradaArray){
            chart.data.labels = xArray
            chart.data.datasets[0].data = setPointArray
            chart.data.datasets[1].data = entradaArray
            chart.update()
        }
        
        function simularSensor(TAmbiente, TMin, PPMax, PPMin, PPActual){
            var razonDeCambioDeTemperatura = (TMin - TAmbiente)/(PPMax - PPMin) //Gradiente de temperatura Centigrados/Potencia
            var entradaSensor = razonDeCambioDeTemperatura*PPActual + TAmbiente;//Obtener senal de sensor en funcion de la retroalimentacion de lazo cerrado en PPActual
            return entradaSensor
        }
        
        setInterval(function(){

            entrada = simularSensor(TAmbiente, TMin, PPMax, PPMin, PPActual)
            entradaActual = entrada
            error = entrada - setPoint

            salidaP = kp*error/setPoint

            if((Math.abs(entradaActual-entradaAnterior))>2.5){
                salidaI = 0;
            }
            if((Math.abs(entradaActual-entradaAnterior))<=2.5){
                salidaI = salidaI + ((ki*error*periodoDeCalculo)/setPoint)
            }

            salidaD = (error*kd)/(setPoint*periodoDeCalculo)

            salida = salidaP + salidaI + salidaD

            output_P.innerText = String(salidaP.toFixed(2))
            output_I.innerText = String(salidaI.toFixed(2))
            output_D.innerText = String(salidaD.toFixed(2))
            output.innerText = String(salida.toFixed(2))

            if(salida>100){salida = 100}
            if(salida<0){salida = 0}

            xArray.push(xArray[xArray.length-1]+1) 
            setPointArray.push(setPoint)
            entradaArray.push(entrada)

            renderizarGrafica(xArray, setPointArray, entradaArray)

            entradaAnterior = entradaActual
            PPActual = salida
        }, 500);
