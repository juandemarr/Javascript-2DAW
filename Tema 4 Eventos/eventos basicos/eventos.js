/*1 forma de definir eventos
Cogemos el botón (etiqueta) en una variable, creamos la función y aplicamos 
esa función en el evento sobre la variable creada*/

const btn=document.querySelector('button');

function random(number){
    return Math.floor(Math.random() * (number+1));
}

/*btn.onclick=function(){
    const rndCol = 'rgb('+random(255)+','+random(255)+','+random(255)+')';
    document.body.style.backgroundColor=rndCol;
}*/
//btn.onclick=bgChange;//Otra forma de hacer lo de arriba, definir la funcion aparte y 

//llamarla sin parentesis para que se ejecute cuando se pulse, no sobre la marcha
function bgChange(){
    const rndCol = 'rgb('+random(255)+','+random(255)+','+random(255)+')';
    document.body.style.backgroundColor=rndCol;
}

//2 forma, en el mismo html
function mifuncionEvento(){
    alert("Salta");
}


//3 forma, con addEventListener, manejador de eventos
btn.addEventListener('click',bgChange);//'nombre del evento', funcion definida que ejecutará
btn.addEventListener('blur',bgChange);


function over(){
    console.log("Raton dentro");
}
function out(){
    console.log("Raton fuera");
}


function mover(e){
    console.log(e.offsetX);
    console.log(e.offsetY);
}


