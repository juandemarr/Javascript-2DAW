/*
2. Mejora el ejercicio anterior dando al usuario las opciones para que pueda 
configurar el color de fondo, de párrafo y el tamaño de la letra.

3. ¿Cómo podemos hacer que la segunda cookie se borre automáticamente 
al cerrar el navegador? Con cookie de sesion, sin los atributos max-age y expires
*/
window.onload=main;
var nombre,fondo,parrafo,letra;
var contNombre=contFondo=contParrafo=contLetra=0;
function main(){
    let arrayCookies=document.cookie.split(";");
    for(let i=0; i<arrayCookies.length; i++){
        if(arrayCookies[i].trim().indexOf("nombre")!=-1)
            contNombre++;
        if(arrayCookies[i].trim().indexOf("fondo")!=-1)
            contFondo++;
        if(arrayCookies[i].trim().indexOf("parrafo")!=-1)
            contParrafo++;
        if(arrayCookies[i].trim().indexOf("letra")!=-1)
            contLetra++;
    }
    
    if(contNombre==0){
        nombre=prompt("Introduce el nombre de usuario");
        document.cookie="nombre="+nombre+";max-age=300"; 
    }
    if(contFondo==0){
        fondo=prompt("Introduce el color de fondo (en inglés ó hexadecimal)");
        document.cookie="fondo="+fondo;
    }
    if(contParrafo==0){
        parrafo=prompt("Introduce el color del parrafo (en inglés ó hexadecimal)");
        document.cookie="parrafo="+parrafo;
    }
    if(contLetra==0){
        letra=prompt("Introduce el tamano de letra (10-30)");
        document.cookie="letra="+letra; 
    }

////////////////////////////////
    for(let i=0; i<arrayCookies.length; i++){
        if(arrayCookies[i].trim().indexOf("nombre")!=-1){
            let p=document.createElement("p");
            document.body.appendChild(p);
            let contenido=document.createTextNode("Bienvenido/a: "+arrayCookies[i].trim().substring(arrayCookies[i].trim().indexOf("=")+1,arrayCookies[i].trim().length));
            p.appendChild(contenido);
        }
    }
    for(let i=0; i<arrayCookies.length; i++){
        if(arrayCookies[i].trim().indexOf("fondo")!=-1){
            document.body.style.background=arrayCookies[i].trim().substring(arrayCookies[i].trim().indexOf("=")+1,arrayCookies[i].trim().length);
        }
        if(arrayCookies[i].trim().indexOf("parrafo")!=-1){
            document.querySelector("p").style.background=arrayCookies[i].trim().substring(arrayCookies[i].trim().indexOf("=")+1,arrayCookies[i].trim().length);
        }
        if(arrayCookies[i].trim().indexOf("letra")!=-1){
            document.querySelector("p").style.fontSize=arrayCookies[i].trim().substring(arrayCookies[i].trim().indexOf("=")+1,arrayCookies[i].trim().length)+"px";
        }
    }

    botonBorrar();
    document.getElementById("botonBorrarCookie").addEventListener("click",borrarCookie);
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
    document.cookie="nombre="+nombre+";max-age=0";
}
