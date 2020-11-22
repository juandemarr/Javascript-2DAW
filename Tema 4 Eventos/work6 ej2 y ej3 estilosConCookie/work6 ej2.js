/*
2. Mejora el ejercicio anterior dando al usuario las opciones para que pueda 
configurar el color de fondo, de párrafo y el tamaño de la letra.

3. ¿Cómo podemos hacer que la segunda cookie se borre automáticamente 
al cerrar el navegador? Con cookie de sesion, sin los atributos max-age y expires
*/
window.onload=main;
var nombre,fondo,parrafo,letra;

function main(){
    if(document.cookie.split(";").some(function(item){
        if(item.trim().indexOf("name")!=-1){
            mostrarCookieName(item);
        }else{
            nombre=prompt("Introduce el nombre de usuario");
            document.cookie="name="+nombre+";max-age=300";
            mostrarCookieName(item);
        }
        
        if(item.trim().indexOf("fondo")!=-1){
            document.body.style.background=item.trim().substring(item.trim().indexOf("=")+1,item.trim().length);
        }else{
            fondo=prompt("Introduce el color de fondo (en inglés)");
            document.cookie="fondo="+fondo;
        }
        
        if(item.trim().indexOf("parrafo")!=-1){
            document.querySelector("p").style.background=item.trim().substring(item.trim().indexOf("=")+1,item.trim().length);
        }else{
            parrafo=prompt("Introduce el color de párrafo (en inglés)");
            document.cookie="parrafo="+parrafo;
        }

        if(item.trim().indexOf("letra")!=-1){
            document.querySelector("p").style.fontSize=item.trim().substring(item.trim().indexOf("=")+1,item.trim().length)+"px";
        }else{
            letra=prompt("Introduce el tamaño de la letra (10-40)");
            document.cookie="letra="+letra;
        }
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

