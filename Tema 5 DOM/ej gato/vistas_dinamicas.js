// Usamos clases y las vistas son dinámicas

class gato
{
    constructor(nombre, imagen)
    {
        this.nombre = nombre;
        this.imagen = imagen;
        this.contadorClicks=0;
    }

   vista_imagen()
    {
        // Se muestra imagen y contador
         this.div = document.createElement("div");
         let img = document.createElement("img");
         img.src = this.imagen;
         this.div.appendChild(img);
         let  texto = document.createTextNode(this.contadorClicks);
         this.div.appendChild(texto);

         img.addEventListener("click", ()=>{
            this.contadorClicks++;
            this.div.childNodes[1].textContent = this.contadorClicks;
         });

         return this.div;
    }

    vista_nombre(contenedor){
        // Se muestra sólo nombre
        let entradaLista = document.createElement("li");
        entradaLista.textContent = this.nombre;

        entradaLista.addEventListener("click", ()=>{
            contenedor.innerHTML="";
            contenedor.appendChild(this.vista_imagen());
          
        });
        
        return entradaLista;
    }
}


var gatos = [];
window.onload = ()=>
{
    let gatico = new gato("Misifu","g1.jpg")
    let gatico2 = new gato("Leon","g2.jpg")
    gatos.push( gatico );
    gatos.push( gatico2 );
    document.body.appendChild( vista_2() );

}

function vista_1()
{
    let div = document.createElement("div");
    // Se muestra imagen y contador
    for (gato of gatos)
        div.appendChild(gato.vista_imagen());
    
    
    return div;
}

function vista_2()
{
    
    let div = document.createElement("div");
    let contenedor = document.createElement("div")
    let lista = document.createElement("ul");
    // Se muestra imagen y contador
    for (gato of gatos)
        lista.appendChild(gato.vista_nombre(contenedor));
    
    div.appendChild(lista);
    div.appendChild(contenedor);
   
    return div;
}