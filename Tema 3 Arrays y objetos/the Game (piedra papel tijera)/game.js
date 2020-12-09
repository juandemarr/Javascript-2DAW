class Juego{
    constructor(valorJugador){
        this.valorJugador=valorJugador;
        this.valorMaquina=Math.floor(Math.random()*3+1);
    }
    comparar(){ //return 0(victoria), 1(derrota), 2(empate)
        switch (this.valorJugador) {
            case 1:
                if(this.valorMaquina==1)
                    return 2;
                if(this.valorMaquina==2)
                    return 1;
                if(this.valorMaquina==3)
                    return 0;
                break;
            case 2:
                if(this.valorMaquina==1)
                    return 0;
                if(this.valorMaquina==2)
                    return 2;
                if(this.valorMaquina==3)
                    return 1;
                break;            
            case 3:
                if(this.valorMaquina==1)
                    return 1;
                if(this.valorMaquina==2)
                    return 0;
                if(this.valorMaquina==3)
                    return 2;
                break;
        }
    }
    vista(contenedorJugador,contenedorMaquina,contenedorResultado){
        //Crear imagen jugador
        let imagen=document.createElement("img");
        if(this.valorJugador==1){
            imagen.src="img/piedra.png";
            imagen.title="piedra";
        }else if(this.valorJugador==2){
            imagen.src="img/papel.png";
            imagen.title="papel";
        }else if(this.valorJugador==3){
            imagen.src="img/tijeras.png";
            imagen.title="tijeras";
        }
        contenedorJugador.appendChild(imagen);

        //Crear imagen maquina
        let imagen2=document.createElement("img");
        if(this.valorMaquina==1){
            imagen2.src="img/piedra.png";
            imagen2.title="piedra";
        }else if(this.valorMaquina==2){
            imagen2.src="img/papel.png";
            imagen2.title="papel";
        }else if(this.valorMaquina==3){
            imagen2.src="img/tijeras.png";
            imagen2.title="tijeras";
        }
        contenedorMaquina.appendChild(imagen2);

        //Texto
        if(this.comparar()==0){
            let texto=document.createTextNode("VICTORIA");
            contenedorResultado.appendChild(texto);
        }else if(this.comparar()==1){
            let texto=document.createTextNode("DERROTA");
            contenedorResultado.appendChild(texto);
        }else if(this.comparar()==2){
            let texto=document.createTextNode("EMPATE");
            contenedorResultado.appendChild(texto);
        }
    }
}

window.onload=()=>{
    let botonJugar=document.getElementById("botonJugar");
    botonJugar.addEventListener("click",nuevoJuego);
}

function nuevoJuego(){
    limpiar();

    let contenedorJugador=document.getElementById("imagenJugador");
    let contenedorMaquina=document.getElementById("imagenMaquina");
    let contenedorResultado=document.getElementById("resultado");
    
    let valorJugador=parseInt(document.getElementById("jugador").value);
    if(valorJugador!=1 && valorJugador!=2 && valorJugador!=3){
        contenedorResultado.appendChild(document.createTextNode("Introduce un valor correcto"));
    }else{
        let juego=new Juego(valorJugador);
        juego.comparar();
        juego.vista(contenedorJugador,contenedorMaquina,contenedorResultado);
    }
}

function limpiar(){
    let contenedorJugador=document.getElementById("imagenJugador");
    let contenedorMaquina=document.getElementById("imagenMaquina");
    let contenedorResultado=document.getElementById("resultado");
    contenedorJugador.innerHTML="";
    contenedorMaquina.innerHTML="";
    contenedorResultado.innerHTML="";
}
