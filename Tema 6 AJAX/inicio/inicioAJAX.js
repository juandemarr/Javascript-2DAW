window.onload=()=>{
    //document.getElementById("boton").addEventListener("click",loadDoc);
    setInterval(loadDoc,3000);
}

function loadDoc(){ //se usa siempre este metodo
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){ //estado 4 => ultimo estado ; estado 200 => todo listo y bien cargado
            //en responseText esta lo que viene del servidor
            //Para obtener objeto JSON
            datos=JSON.parse(this.responseText);

            for(i=0; i<datos.listaNotas.length; i++)
                document.getElementById("div").innerHTML += datos.listaNotas[i].titulo;
                //alert(datos.listaNotas[i].titulo)
                ////////////////////
        }
    };
    xhttp.open("GET", "datos.txt", true);
    xhttp.send();
}



