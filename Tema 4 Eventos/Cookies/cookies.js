/*Cookies de sesion y temporales
    De sesion. Se borran al cerrar la pagina
    Temporales, segun se indique en los parametros
* Parametros opcionales:
tiempo de expiracion. Con esto, al recargar la página la cookie sigue
    max-age=segundos 
    expires=tiempo en GMTString, se obtiene con Date.toUTCString()
  Si no se ponen sera una cookie de sesion
path="ruta a la que afecta"
domain="dominio al que afecta"
*/
/*
document.cookie="name=oeschger";
document.cookie="favourite_food=tripe";
document.cookie="apellido=marr;max-age=10";//a los 10 seg desaparece
*/
//para borrar cookie machacarle el valor.
function alertCookie(){
    document.cookie="name=juande;max-age=100";
    document.cookie="fondo=red;max-age=100";
    //console.log(document.cookie);//en chrome y opera no muestran nada, ya que 
    //restringen a que se tengan que pasar un servidor. En firefox sí aparecen.
}
/*Notas extras:
en function se crea la cookie, pero hasta que no hagas algo como volver a recargar la
página, no aparecerá el mensaje de abajo.
Como antes tenía un valor, al estar en local hay que cerrar la página y volver a abrirla
Al no tener un dominio y ser en localStorage, las cookies no se quedan guardadas después de cerrar 
la página, como deberían
*/


//MOSTRAR UN TROZO

//Nota: array.some(function...) Comprueba si en el array hay algo que cumppla lo 
//establecido en la funcion. Como no es un bucle, se le pone !=-1, que es lo que
// devuelve indexOf si no lo encuentra, para que coja solo el correcto

//string.trim() quita los espacios solo del principio y final
if(document.cookie.split(";").some(function(item){
    if(item.trim().indexOf("name=")!=-1)
        console.log("Bienvenido "+item.trim().substring(item.trim().indexOf("="),item.trim().length));
})){

}
//item.trim().indexOf("=") devuelve el indice de inicio


//W3SCHOOLS
function setCookie(cname, cvalue, exdays) {//al crear de nuevo la cookie con 0 se elimina
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function checkCookie() {
  var username = getCookie("username");
  if (username != "") {
   alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}

//////////////////////////////////////////////

window.onload=function(){
    //comprobar al cargar la pagina si existe la cookie del color de fondo
    let color=getCookie("fondo");
    if(color)
        document.body.style.backgroundColor=color;
}