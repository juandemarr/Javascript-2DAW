window.onload=main;

function main(){
    cont=0;
    let gato1=document.getElementById("imgGato1");
    gato1.addEventListener("click", click);

    let arr=document.getElementsByTagName("img");
    for(let i=0; i<arr.length; i++){
        arr[i].addEventListener("click", () => {
            cont++;

        });
    }
}
////HACER CLASE GATO, se le pasan parametros y se crea el src, dentro createElement, etc
function click(){
    
    let p1=document.getElementById("p1");
    p1.innerHTML=cont;
}