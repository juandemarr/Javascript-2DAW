/*Fíjate en las 2 siguientes capturas de pantalla:
Se trata de la misma página con 2 estilos diferentes (tema normal y tema minimalista).
Haciendo sólo uso de JavaScript consigue que se pueda cambiar el estilo (pulsando los
enlaces de la parte superior) para que quede tal cual puedes ver. Deberás hacerlo con 
dos versiones:
a) Modificando el estilo desde JavaScript (las hojas de estilo no estan creadas, sino
que se establece mediante atributos del objeto style).
b) Creando dos hojas de estilo diferentes que se carguen dinámicamente según la
opción pulsada.*/

//A

window.onload=main;
function main(){
    const normal=document.getElementById("normal");
    const minimalista=document.getElementById("minimalista");

    normal.addEventListener('click',estiloNormal);
    minimalista.addEventListener('click',estiloMinimalista);
}

function estiloNormal(){
    document.querySelector("body").style.margin="0";
    document.querySelector("body").style.fontFamily="sans-serif";
    document.querySelector("body").style.backgroundColor="#FFF8B0";
    document.querySelector("body").style.height="1000px";

    document.getElementById("enlaces").style.backgroundColor="lightblue";
    document.getElementById("enlaces").style.color="blue";
    document.getElementById("enlaces").style.boxShadow="1px 1px 1px 1px grey";
    document.getElementById("enlaces").style.padding=".4%";
    document.getElementById("enlaces").style.fontWeight="bold";
    document.querySelectorAll("a")[0].style.textDecoration="none";
    document.querySelectorAll("a")[1].style.textDecoration="none";

    document.querySelector("aside").style.backgroundColor="#00C6EE";
    document.querySelector("aside").style.width="100px";
    document.querySelector("aside").style.height="1000px";

    document.getElementById("main").style.display="flex";

    document.getElementById("content").style.padding="2%";

    document.getElementById("marcoDiv").style.backgroundColor="yellow";
    document.getElementById("marcoDiv").style.border="1px solid black";
    document.getElementById("marcoDiv").style.padding="5px";
}


function estiloMinimalista(){
    document.querySelector("body").style.margin="revert";
    document.querySelector("body").style.fontFamily="serif";
    document.querySelector("body").style.backgroundColor="white";
    document.querySelector("body").style.height="1000px";

    document.getElementById("enlaces").style.backgroundColor="white";
    document.getElementById("enlaces").style.color="initial";
    document.getElementById("enlaces").style.boxShadow="none";
    document.getElementById("enlaces").style.padding="0";
    document.getElementById("enlaces").style.fontWeight="auto";
    document.querySelectorAll("a")[0].style.textDecoration="underline";
    document.querySelectorAll("a")[1].style.textDecoration="underline";

    document.querySelector("aside").style.width="0px";
    document.querySelector("aside").style.height="0px";

    document.getElementById("main").style.display="flex";

    document.getElementById("content").style.padding="0";

    document.getElementById("marcoDiv").style.backgroundColor="white";
    document.getElementById("marcoDiv").style.border="none";
    document.getElementById("marcoDiv").style.padding="0";

    document.getElementById("oculto").style.display="none";
}