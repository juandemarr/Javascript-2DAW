window.onload=()=>{
    setInterval(loadDoc,3000);
    table=document.getElementById("tabla");
}
var cont=0;//para que solo añda los nuevos
var table;

function loadDoc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){ 
            correos=JSON.parse(this.responseText);
            //maquetar(JSON.parse(this.responseText));
            for(i=cont; i<correos.listaCorreos.length; i++){
                let td=document.createElement("td");
                td.appendChild(document.createTextNode(correos.listaCorreos[i].remitente));
                let tr=document.createElement("tr");
                tr.appendChild(td);
                table.appendChild(tr);
                
                cont++;
            }
        }
    };
    xhttp.open("GET", "correos.txt", true);/*xhttp.open("GET","url de api", true);
    ver la api, en este caso es el objeto results*/
    xhttp.send();
}
/* 
function maquetarRespuesta(objetoJSON){
    Pondría el bucle
    for(i)
} */