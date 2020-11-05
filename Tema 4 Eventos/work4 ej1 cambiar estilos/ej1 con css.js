/*Fíjate en las 2 siguientes capturas de pantalla:
Se trata de la misma página con 2 estilos diferentes (tema normal y tema minimalista).
Haciendo sólo uso de JavaScript consigue que se pueda cambiar el estilo (pulsando los
enlaces de la parte superior) para que quede tal cual puedes ver. Deberás hacerlo con 
dos versiones:
a) Modificando el estilo desde JavaScript (las hojas de estilo no estan creadas, sino
que se establece mediante atributos del objeto style).
b) Creando dos hojas de estilo diferentes que se carguen dinámicamente según la
opción pulsada.*/

//B

window.onload=main;
function main(){
    const normal=document.getElementById("normal");
    const minimalista=document.getElementById("minimalista");

    normal.addEventListener('click',estiloNormal);
    minimalista.addEventListener('click',estiloMinimalista);
}

function estiloNormal(){
    document.querySelector("head").innerHTML="<link rel=\"stylesheet\" type=\"text/css\" href=\"estiloNormal.css\" />";
}

function estiloMinimalista(){
    document.querySelector("head").innerHTML="<link rel=\"stylesheet\" type=\"text/css\" href=\"estiloMinimalista.css\" />";
}

