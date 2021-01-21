window.onload=()=>{
    contenedor=document.getElementById("main");
    peticionAJAX(contenedor);
}
var contenedor;

function peticionAJAX(contenedor){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){ 
            let personajes=JSON.parse(this.responseText);
            for(let i=0; i<8; i++){
                let p=document.createElement("p");
                p.appendChild(document.createTextNode(personajes.results[i].name));
                contenedor.appendChild(p);

            }
            /* if(personajes.people.length>8){
                let boton=document.createElement("button");
                boton.id="boton";
                boton.appendChild(document.createTextNode("Obtener más resultados"));
                contenedor.appendChild(boton);
            } */
        }
    };
    xhttp.open("GET", "https://swapi.dev/api/people/", true);
    xhttp.send();
}
