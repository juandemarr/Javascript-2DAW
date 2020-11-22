window.onload=main;

function main(){
    let nombre=prompt("Introduce el nombre");
    let fondo=prompt("Introduce el color de fondo (en inglés)");
    let parrafo=prompt("Introduce el color del parrafo (en inglés)");
    let letra=prompt("Introduce el tamano de letra (10-30)");
    document.cookie="nombre="+nombre;
    document.cookie="fondo="+fondo;
    document.cookie="parrafo="+parrafo;
    document.cookie="letra="+letra;

    let arrayCookies=document.cookie.split(";");
    for(let i=0; i<arrayCookies.length; i++){
        
        if(arrayCookies[i].trim().indexOf("nombre")!=-1){
            let p=document.createElement("p");
            document.body.appendChild(p);
            let contenido=document.createTextNode(arrayCookies[i].trim().substring(arrayCookies[i].trim().indexOf("=")+1,arrayCookies[i].trim().length));
            p.appendChild(contenido);
        }
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
}