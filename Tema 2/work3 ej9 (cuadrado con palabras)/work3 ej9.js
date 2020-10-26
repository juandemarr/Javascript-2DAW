/*Escribir un procedimiento que lea una palabra y la escriba (formateada dentro de
una tabla) como se ve en la figura:*/
var palabra=prompt("Introduce una palabra");
function util(palabra){
    var longitud=palabra.length;
    var inversa="";
    for(let i=longitud-1; i>=0; i--)
        inversa+=palabra.charAt(i);

    var tabla="<table>";
    for(var i=0; i<longitud; i++){
        tabla+="<tr>";
        for(var j=0; j<longitud; j++){
            tabla+="<td>";
            if(i==0)
                tabla+=palabra[j]+"</td>";
            else if(i==longitud-1)
                tabla+=inversa[j]+"</td>";
            else{
                if(j==0)
                    tabla+=palabra[i]+"</td>";
                else if(j==longitud-1)
                    tabla+=inversa[i]+"</td>";
            }      
        }
        tabla+="</tr>";
    }
    tabla+="</table>";
    document.write("Entrada: "+palabra+"<br>");
    document.write("Salida: <br>");
    document.write(tabla);
}
util(palabra);

