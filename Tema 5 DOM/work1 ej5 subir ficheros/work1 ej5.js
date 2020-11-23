/*
Estás diseñando una aplicación web para subir ficheros al servidor. Haciendo
uso del DOM, consigue que el usuario pueda adjuntar tantos ficheros como 
desee. Por tanto inicialmente será necesario un input de tipo
fichero, un botón "Adjuntar otro fichero" y un segundo botón "Enviar", de modo
que al pulsar el primero de los botones automáticamente aparezca otro input para 
elegir fichero
*/
window.onload=main;

function main(){
    document.getElementById("anadirOtro").addEventListener("click",anadir);
}

function anadir(){
    const input=document.createElement("input");
    input.type="file";
    const form=document.querySelector("div");
    const enviar=document.getElementById("enviar");
    form.insertBefore(input,enviar);
    const br=document.createElement("br");
    form.insertBefore(br,enviar);
}
