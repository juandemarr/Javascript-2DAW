/*Diseña una página web que debe contener texto (mínimo 4 párrafos). Deberás añadir la
siguiente funcionalidad mediante JavaScript:
• Tamaño de fuente. Debe ser posible incrementar o decrementar la fuente usada, así
como volver al tamaño por defecto.
• Alineación del texto: Debe ser posible cambiar la alineación a Justificada o a
Izquierda.*/

window.onload=main;

function main(){
    const justificar=document.getElementById("justificada");
    const izquierda=document.getElementById("izquierda");
    const incremento=document.getElementById("incrementar");
    const decremento=document.getElementById("decrementar");
    const defecto=document.getElementById("defecto");

    justificar.addEventListener('click',just);
    izquierda.addEventListener('click',izq);
    incremento.addEventListener('click',inc);
    decremento.addEventListener('click',dec);
    defecto.addEventListener('click',def);
}

function inc(){
    const body=document.querySelector("body");
    let size=body.getAttribute("font-size");
    let total=size+0.5;
    body.style.fontSize=size+"em"; 
}
function dec(){
    document.querySelector("body").style.fontSize=".8em";
}
function def(){
    document.querySelector("body").style.fontSize="1em";
}
function just(){
    document.querySelector("body").style.textAlign="justify";
}
function izq(){
    document.querySelector("body").style.textAlign="left";
}


