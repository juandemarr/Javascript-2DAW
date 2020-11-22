/*Diseña una web que hará uso de cookies para guardar el nombre del usuario. 
En caso de no tener ninguna cookie de ese sitio, deberá preguntar el nombre del 
usuario y almacenarlo en una cookie que caducará en 5 minutos. Tras esto saludará 
al usuario mediante un mensaje en pantalla. En caso de tener ya creada la cookie 
deberá leerla y mostrar el mensaje anterior directamente. Deberá proporcionar también 
un enlace para borrar la cookie (lo que podríamos llamar 'Cerrar Sesión').

Nota: Asegúrate de que tu cookie acepta todo tipo de caracteres (como ñ, espacio 
en blanco, acentos, etc....)
*/
window.onload=main;
var nombre;

function main(){
    if(document.cookie.split(";").some(function(item){
        if(item.indexOf("name")==-1){
            nombre=prompt("Introduce el nombre de usuario");
            document.cookie="name="+nombre+";max-age=300";
        }    
        mostrarCookieName(item);   
    }
    
    ));

    document.getElementById("botonBorrarCookie").addEventListener("click",borrarCookie);
}

function mostrarCookieName(item){
        let p=document.createElement("p");
        let contenidoP=document.createTextNode("Hola: "+item.substring(item.indexOf("=")+1,item.length));
        p.appendChild(contenidoP);
        document.body.appendChild(p);

        botonBorrar();
    }

function botonBorrar(){
    let boton=document.createElement("button");
    boton.style.padding=".4%";
    boton.style.width="10%";
    boton.style.background="orangered";
    boton.style.color="white";
    boton.style.fontWeight="bold";
    boton.style.border="1px solid orangered";
    boton.style.borderRadius="5px";
    boton.id="botonBorrarCookie";
    boton.appendChild(document.createTextNode("Borrar cookie"));
    document.body.appendChild(boton);
}

function borrarCookie(){
    document.cookie="name="+nombre+";max-age=0";
}