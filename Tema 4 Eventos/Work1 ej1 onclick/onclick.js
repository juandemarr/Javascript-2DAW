/*Captura el evento onClick del ratón para que cada vez que suceda se ejecute un 
alert.*/

const btn=document.querySelector("button");

function alerta(){
    alert("HELLO THERE!!");
}

btn.addEventListener("click", alerta);