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
    body=document.querySelector("body");

}

function inc(){
    let size=window.getComputedStyle(body).getPropertyValue('font-size');
    let exp=/[0-9]+/;
    let numero=size.match(exp);
    let nuevoTamano=parseInt(numero[0])+5;
    body.style.fontSize=nuevoTamano+"px";
    /*
    let comp=window.getComputedStyle(variable creada con el tag de html previamente) 
        //se aplica siempre sobre window. 
        Devuelve una funcion con todos los estilos "computed" 
        la suma de todos los estilos aplicados realmente a esa etiqueta
    comp.getPropertyValue('font-size'); //se aplica sobre el getComputedStyle, obtiene el valor del
        atributo que le indicas
    */
}
function dec(){
    let size=window.getComputedStyle(body).getPropertyValue('font-size');
    let exp=/[0-9]+/;
    let numero=size.match(exp);
    let nuevoTamano=parseInt(numero[0])-5;
    body.style.fontSize=nuevoTamano+"px";
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


