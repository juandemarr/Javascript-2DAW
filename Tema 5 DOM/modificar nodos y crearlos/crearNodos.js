window.onload=main;
//CREAR NODOS

function main(){
    //Para imagenes, document.createElement("tag") y tag.appendChild()
    var newImg=document.createElement("img");
    newImg.src="https://giantbomb1.cbsistatic.com/uploads/scale_medium/0/118/351035-visasfull.jpg";

    document.body.appendChild(newImg);

    //Para texto, document.createElement(""), document.createTextNode("") y tag.appendChild()

    var newPara=document.createElement("p");
    var newText=document.createTextNode("You are a bold one");
    newPara.appendChild(newText);
    
    document.getElementsByTagName("div")[0].appendChild(newPara);

//Añadir eventos   
document.body.childNodes[3].addEventListener("click",()=>alert("\"My life for yours\""));



}

