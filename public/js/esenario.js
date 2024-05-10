var lienzo = document.getElementById('lienzo'); // mando a llamar a mi etiqueta canvas 
var ctx = lienzo.getContext("2d");
var resetButton = document.getElementById("resetButton");
var imagen = new Image()
ctx.font = "24px Arial";

function app() {
    const gato = {
        estados: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ],
        ancho: lienzo.width = '500',
        alto: lienzo.height = '500',
        jugador: 1,
        juegoTerminado: false,
        contJugador1: 0,
        contJugador2: 0,
        regilla: function () {
            // lienzo.style.backgroundColor = "#9996";
            ctx.fillStyle = "#333"
            ctx.fillRect(200, 100, 2, 300);
            ctx.fillRect(300, 100, 2, 300);
            ctx.fillRect(100, 200, 300, 2);
            ctx.fillRect(100, 300, 300, 2);
        },
        esenario: function () {

        },
        seleccionar: function (event) {

            var x = event.offsetX;
            var y = event.offsetY;

            // var coordenadas = document.getElementById('coordenas');
            // coordenadas.innerHTML = `Coordenadas: ( ${x}, ${y} )`;
            ctx.fillStyle = "#7b464600"
            if(this.juegoTerminado == true) {
                return;
            }
            if (x > 100 && x < 200 && y > 100 && y < 200) {
                imagen.onload = function () {
                    ctx.drawImage(this, 105, 105);
                }
            } else if (this.estados[0][0] == 1 || this.estados[0][0] == 2) {
                imagen.onload = function () {
                    ctx.drawImage(this, 105, 105);
                }
            } else if (true) {
                ctx.clearRect(105, 105, 90, 90);
            }
            if (x > 200 && x < 300 && y > 100 && y < 200) {
                imagen.onload = function () {
                    ctx.drawImage(this, 205, 105);
                }
            } else if (this.estados[0][1] == 1 || this.estados[0][1] == 2) {
                imagen.onload = function () {
                    ctx.drawImage(this, 205, 105);
                }
            } else if (true) {
                ctx.clearRect(205, 105, 90, 90);
            }
            if (x > 300 && x < 400 && y > 100 && y < 200) {
                imagen.onload = function () {
                    ctx.drawImage(this, 305, 105);
                }
            } else if (this.estados[0][2] == 1 || this.estados[0][2] == 2) {
                imagen.onload = function () {
                    ctx.drawImage(this, 305, 105);
                }
            } else if (true) {
                ctx.clearRect(305, 105, 90, 90);
            }



            if (x > 100 && x < 200 && y > 200 && y < 300) {
                imagen.onload = function () {
                    ctx.drawImage(this, 105, 205);
                }
            } else if (this.estados[1][0] == 1 || this.estados[1][0] == 2) {
                imagen.onload = function () {
                    ctx.drawImage(this, 105, 205);
                }
            } else if (true) {
                ctx.clearRect(105, 205, 90, 90);
            }
            if (x > 200 && x < 300 && y > 200 && y < 300) {
                imagen.onload = function () {
                    ctx.drawImage(this, 205, 205);
                }
            } else if (this.estados[1][1] == 1 || this.estados[1][1] == 2) {
                imagen.onload = function () {
                    ctx.drawImage(this, 205, 205);
                }
            } else if (true) {
                ctx.clearRect(205, 205, 90, 90);
            }
            if (x > 300 && x < 400 && y > 200 && y < 300) {
                imagen.onload = function () {
                    ctx.drawImage(this, 305, 205);
                }
            } else if (this.estados[1][2] == 1 || this.estados[1][2] == 2) {
                imagen.onload = function () {
                    ctx.drawImage(this, 305, 205);
                }
            } else if (true) {
                ctx.clearRect(305, 205, 90, 90);
            }



            if (x > 100 && x < 200 && y > 300 && y < 400) {
                imagen.onload = function () {
                    ctx.drawImage(this, 105, 305);
                }
            } else if (this.estados[2][0] == 1 || this.estados[2][0] == 2) {
                imagen.onload = function () {
                    ctx.drawImage(this, 105, 305);
                }
            } else if (true) {
                ctx.clearRect(105, 305, 90, 90);
            }
            if (x > 200 && x < 300 && y > 300 && y < 400) {
                imagen.onload = function () {
                    ctx.drawImage(this, 205, 305);
                }
            } else if (this.estados[2][1] == 1 || this.estados[2][1] == 2) {
                imagen.onload = function () {
                    ctx.drawImage(this, 205, 305);
                }
            } else if (true) {
                ctx.clearRect(205, 305, 90, 90);
            }
            if (x > 300 && x < 400 && y > 300 && y < 400) {
                imagen.onload = function () {
                    ctx.drawImage(this, 305, 305);
                }
            } else if (this.estados[2][2] == 1 || this.estados[2][2] == 2) {
                imagen.onload = function () {
                    ctx.drawImage(this, 305, 305);
                }
            } else if (true) {
                ctx.clearRect(305, 305, 90, 90);
            }

        },
        activarEstado: function (event) {
            if(this.juegoTerminado == true) {
                return;
            }

            var x = event.offsetX;
            var y = event.offsetY;

            // Calcula la fila y la columna correspondientes
            var fila = Math.floor((y - 100) / 100);
            var columna = Math.floor((x - 100) / 100);

            // Verifica si el espacio en el arreglo estados ya está ocupado
            if (this.estados[fila][columna] === 0) {
                this.estados[fila][columna] = this.jugador;

                // Dibuja la imagen del jugador en el espacio
                var xCoord = 100 + columna * 100;
                var yCoord = 100 + fila * 100;

                var imagen = new Image();
                imagen.src = this.jugador === 1 ? "public/img/gato.png" : "public/img/raton.png";

                // Maneja el evento onload para asegurarte de que la imagen se cargue antes de dibujarla
                imagen.onload = function () {
                    ctx.drawImage(imagen, xCoord, yCoord);
                };

                console.log("Tira el jugador " + this.jugador);

                // Cambia al siguiente jugador
                this.jugador = this.jugador === 1 ? 2 : 1;
            } else {
                console.log("Espacio ya ocupado, tira de nuevo.");
            }
        },
        analizarJugador: function (event) {
            if(this.juegoTerminado == true) {
                return;
            }
            
            var lineColor = "red"; // Color de la línea
            var lineWidth = 4; // Ancho de la línea

            console.log("estados de los jugadores")
            console.log(`${this.estados[0][0]} ${this.estados[0][1]} ${this.estados[0][2]}`)
            console.log(`${this.estados[1][0]} ${this.estados[1][1]} ${this.estados[1][2]}`)
            console.log(`${this.estados[2][0]} ${this.estados[2][1]} ${this.estados[2][2]}`)

            function drawLine(x1, y1, x2, y2) {
                ctx.strokeStyle = lineColor;
                ctx.lineWidth = lineWidth;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }

            if (this.estados[0][0] == 1 && this.estados[0][1] == 1 && this.estados[0][2] == 1) {
                console.log("Gana jugador 1")
                this.juegoTerminado = true;
                drawLine(150, 150, 350, 150);
                this.contJugador1++; 
                this.actualizarMarcador()
            }
            if (this.estados[1][0] == 1 && this.estados[1][1] == 1 && this.estados[1][2] == 1) {
                console.log("Gana jugador 1")
                this.juegoTerminado = true;
                drawLine(150, 250, 350, 250);
                this.contJugador1++; 
                this.actualizarMarcador()
            }
            if (this.estados[2][0] == 1 && this.estados[2][1] == 1 && this.estados[2][2] == 1) {
                console.log("Gana jugador 1")
                this.juegoTerminado = true;
                drawLine(150, 350, 350, 350);
                this.contJugador1++; 
                this.actualizarMarcador()
            }
            if (this.estados[0][0] == 1 && this.estados[1][0] == 1 && this.estados[2][0] == 1) {
                console.log("Gana jugador 1")
                this.juegoTerminado = true;
                drawLine(150, 150, 150, 350);
                this.contJugador1++; 
                this.actualizarMarcador()
            }
            if (this.estados[0][1] == 1 && this.estados[1][1] == 1 && this.estados[2][1] == 1) {
                console.log("Gana jugador 1")
                this.juegoTerminado = true;
                drawLine(250, 150, 250, 350);
                this.contJugador1++; 
                this.actualizarMarcador()
            }
            if (this.estados[0][2] == 1 && this.estados[1][2] == 1 && this.estados[2][2] == 1) {
                console.log("Gana jugador 1")
                this.juegoTerminado = true;
                drawLine(350, 150, 350, 350);
                this.contJugador1++; 
                this.actualizarMarcador()
            }
            if (this.estados[0][0] == 1 && this.estados[1][1] == 1 && this.estados[2][2] == 1) {
                console.log("Gana jugador 1")
                this.juegoTerminado = true;
                drawLine(150, 150, 350, 350);
                this.contJugador1++; 
                this.actualizarMarcador()
            }
            if (this.estados[2][0] == 1 && this.estados[1][1] == 1 && this.estados[0][2] == 1) {
                console.log("Gana jugador 1")
                this.juegoTerminado = true;
                drawLine(150, 350, 350, 150);
                this.contJugador1++; 
                this.actualizarMarcador()
            }
            if (this.estados[0][0] == 2 && this.estados[0][1] == 2 && this.estados[0][2] == 2) {
                console.log("Gana jugador 2")
                this.juegoTerminado = true;
                drawLine(150, 150, 350, 150);
                this.contJugador2++; 
                this.actualizarMarcador()
            }
            if (this.estados[1][0] == 2 && this.estados[1][1] == 2 && this.estados[1][2] == 2) {
                console.log("Gana jugador 2")
                this.juegoTerminado = true;
                drawLine(150, 250, 350, 250);
                this.contJugador2++; 
                this.actualizarMarcador() 
            }
            if (this.estados[2][0] == 2 && this.estados[2][1] == 2 && this.estados[2][2] == 2) {
                console.log("Gana jugador 2")
                this.juegoTerminado = true;
                drawLine(150, 350, 350, 350);
                this.contJugador2++; 
                this.actualizarMarcador()
            }
            if (this.estados[0][0] == 2 && this.estados[1][0] == 2 && this.estados[2][0] == 2) {
                console.log("Gana jugador 2")
                this.juegoTerminado = true;
                drawLine(150, 150, 150, 350);
                this.contJugador2++; 
                this.actualizarMarcador()
            }
            if (this.estados[0][1] == 2 && this.estados[1][1] == 2 && this.estados[2][1] == 2) {
                console.log("Gana jugador 2")
                this.juegoTerminado = true;
                drawLine(250, 150, 250, 350);
                this.contJugador2++; 
                this.actualizarMarcador()
            }
            if (this.estados[0][2] == 2 && this.estados[1][2] == 2 && this.estados[2][2] == 2) {
                console.log("Gana jugador 2")
                this.juegoTerminado = true;
                drawLine(350, 150, 350, 350);
                this.contJugador2++; 
                this.actualizarMarcador()
            }
            if (this.estados[0][0] == 2 && this.estados[1][1] == 2 && this.estados[2][2] == 2) {
                console.log("Gana jugador 2")
                this.juegoTerminado = true;
                drawLine(150, 150, 350, 350);
                this.contJugador2++; 
                this.actualizarMarcador()
            }
            if (this.estados[2][0] == 2 && this.estados[1][1] == 2 && this.estados[0][2] == 2) {
                console.log("Gana jugador 2")
                this.juegoTerminado = true;
                drawLine(150, 350, 350, 150);
                this.contJugador2++; 
                this.actualizarMarcador()
            }
        },
        actualizarMarcador : function(){
            // Supongamos que tienes elementos HTML para mostrar el contador en tu página, por ejemplo:
            var marcadorJugador1 = document.getElementById("marcador1");
            var marcadorJugador2 = document.getElementById("marcador2");
            
            // Actualizar el contenido de los elementos HTML con los valores del contador
            marcadorJugador1.textContent = "Jugador 1: " + this.contJugador1;              
            marcadorJugador2.textContent = "Jugador 2: " + this.contJugador2;
        },
        play: function () {
            this.regilla();
            this.esenario();
            this.analizarJugador();
        }
    }

    lienzo.addEventListener('mousemove', function (event) {
        gato.seleccionar(event);
    });
    
    lienzo.addEventListener('mousedown', function (event) {
        gato.activarEstado(event);
        gato.analizarJugador();        
    });

    gato.play();

    resetButton.addEventListener("click", function () {
        // Restablecer el juego, puedes poner aquí la lógica para limpiar el tablero y otras variables
        gato.estados[0][0]=0
        gato.estados[0][1]=0
        gato.estados[0][2]=0
        gato.estados[1][0]=0
        gato.estados[1][1]=0
        gato.estados[1][2]=0
        gato.estados[2][0]=0
        gato.estados[2][1]=0
        gato.estados[2][2]=0
        gato.juegoTerminado = false;
    
        // Limpia el lienzo    
        ctx.clearRect(0, 0, lienzo.width, lienzo.height);
    
        // Vuelve a dibujar el tablero
        gato.regilla();
        gato.esenario();
    });
}
// Agrega un controlador de eventos para el clic en el botón

window.onload = function () {
    app();
}

