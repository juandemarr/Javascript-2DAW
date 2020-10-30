/*Muestra, maquetada en una tabla HTML toda la información que puedas
extraer mediante JavaScript del navegador cliente.*/


/*for(let i in navigator)
    document.write(i+": "+navigator[i]+"<br>");
*/
document.write("<table>");
document.write("<tr><td>appCodeName: "+navigator.appCodeName+"</td></tr>");
document.write("<tr><td>appName: "+navigator.appName+"</td></tr>");
document.write("<tr><td>appVersion: "+navigator.appVersion+"</td></tr>");
/*
var conexion=navigator.connection;
for(let i of conexion)
    document.write("<tr><td>"+i+"</td></tr>");//error: connection no es iterable
*/
document.write("<tr><td>Cookies enabled:"+navigator.cookieEnabled+"</td></tr>");
document.write("<tr><td>deviceMemory: "+navigator.deviceMemory+"</td></tr>");
document.write("<tr><td>doNotTrack: "+navigator.doNotTrack+"</td></tr>");
document.write("<tr><td>language: "+navigator.language+"</td></tr>");
document.write("<tr><td>maxTouchPoints: "+navigator.maxTouchPoints+"</td></tr>");
document.write("<tr><td>onLine: "+navigator.onLine+"</td></tr>");
//plugins no pude sacar el nombre de todos
/*var conexion=navigator.plugins;
for(let i of conexion){
    document.write("<tr><td>"+i+"</td></tr>");//error: connection no es iterable
    for(let j of i)
        document.write("<tr><td>"+j.description+"</td></tr>");
}*/
document.write("<tr><td>product: "+navigator.product+"</td></tr>");
document.write("<tr><td>Número de compilación del navegador actual (productSub): "+navigator.productSub+"</td></tr>");
document.write("<tr><td>userAgent: "+navigator.userAgent+"</td></tr>");
document.write("<tr><td>vendor: "+navigator.vendor+"</td></tr>");
document.write("</table>");
