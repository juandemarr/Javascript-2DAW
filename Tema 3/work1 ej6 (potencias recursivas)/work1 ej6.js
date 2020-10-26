/*Crea una función para calcular potencias de un modo recursivo.*/
function potencia(valor,exponente){
    if(exponente>1){
        valor*=potencia(valor,exponente-1);   
    }
    return valor;
}
var valor=prompt("Introduce un valor");
var exponente=prompt("Introduce un exponente");
document.write("El resultado es: "+potencia(valor,exponente));
