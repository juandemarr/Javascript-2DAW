window.onload=()=>{
    //document.getElementById("boton").addEventListener("click",loadDoc);
    setInterval(loadDoc,3000);
}

function loadDoc(){ //se usa siempre este metodo
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){ 
            correos=JSON.parse(this.responseText);

            for(i=0; i<correos.listaCorreos.length; i++){
                document.createElement("tr");
                document.createElement("td").appendChild(document.createTextNode(correos.listaCorreos[i].remitente))
                document.createElement("td")
                document.createElement("td")
                document.getElementById("tabla").appendChild(document.createElement("tr").appendChild) += datos.listaNotas[i].titulo;
            
            }
        }
    };
    xhttp.open("GET", "correos.txt", true);
    xhttp.send();
}