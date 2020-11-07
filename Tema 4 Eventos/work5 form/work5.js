/*Crea un formulario típico de registro para tu web. Debe contener al menos campos 
para introducir nombre, apellidos, DNI, Teléfono, email y nombre de usuario. 
Todos los campos son obligatorios, y debes validar el mayor número posible de ellos 
haciendo uso de expresiones regulares. El nombre de usuario debe estar formado por 
al menos 8 caracteres, entre los cuales debe aparecer obligatoriamente algún número 
y algún signo de puntuación.

Conforme sale el foco de cada input, deberás validar el contenido de éste y mostrar información 
al usuario que le indique si está correcto o no.*/

window.onload=main;

function main(){
    document.getElementById("nombre").addEventListener("blur",validarNombre);
    document.getElementById("apellidos").addEventListener("blur",validarApellidos);
    document.getElementById("dni").addEventListener("blur",validarDNI);
    document.getElementById("tfno").addEventListener("blur",validarTFNO);
    document.getElementById("usuario").addEventListener("blur",validarUsuario);
    document.getElementById("password").addEventListener("blur",validarContrasena);
    document.getElementById("passwordRepeat").addEventListener("blur",validarContrasena2);
    document.getElementById("email").addEventListener("blur",validarEmail);
}

function validarNombre(){
    let nombreInput=document.getElementById("nombre").value;
    let nombreExp=new RegExp('^[a-zA-Z]+ ?[a-zA-Z]* ?[a-zA-Z]*$');
    if(nombreExp.test(nombreInput))
        document.getElementById("nombre").style.border="2px solid green";
    else
        document.getElementById("nombre").style.border="2px solid red";
}

function validarApellidos(){
    let apellidoInput=document.getElementById("apellidos").value;
    let apellidoExp=new RegExp('^[a-zA-Z]+ {1}[a-zA-Z]+$');
    if(apellidoExp.test(apellidoInput))
        document.getElementById("apellidos").style.border="2px solid green";
    else
        document.getElementById("apellidos").style.border="2px solid red";
}

function validarDNI(){
    let dniInput=document.getElementById("dni").value;
    let dniExp=new RegExp('^[0-9]{8}[a-zA-Z]{1}$');
    if(dniExp.test(dniInput))
        document.getElementById("dni").style.border="2px solid green";
    else
        document.getElementById("dni").style.border="2px solid red";
}

function validarTFNO(){
    let tfnoInput=document.getElementById("tfno").value;
    let tfnoExp=new RegExp('^[\+|\d][0-9]{7,16}$');
    if(tfnoExp.test(tfnoInput))
        document.getElementById("tfno").style.border="2px solid green";
    else
        document.getElementById("tfno").style.border="2px solid red";
}

function validarUsuario(){
    let usuarioInput=document.getElementById("usuario").value;
    let usuarioExp=new RegExp('^[a-zA-Z]{1}[a-zA-Z0-9\-\._]+$');
    if(usuarioExp.test(usuarioInput))
        document.getElementById("usuario").style.border="2px solid green";
    else
        document.getElementById("usuario").style.border="2px solid red";
}

function validarContrasena(){
    let conInput=document.getElementById("password").value;
    let conExp=new RegExp('^[\w@#\.\-]{6,20}$');
    if(conExp.test(conInput))
        document.getElementById("password").style.border="2px solid green";
    else
        document.getElementById("password").style.border="2px solid red";
}

function validarContrasena2(){
    let conInput2=document.getElementById("passwordRepeat").value;
    let conExp2=new RegExp('^[\w@#\.\-]{6,20}$');
    if(conExp2.test(conInput2))
        document.getElementById("passwordRepeat").style.border="2px solid green";
    else
        document.getElementById("passwordRepeat").style.border="2px solid red";
}

function validarEmail(){
    let emailInput=document.getElementById("email").value;
    let emailExp=new RegExp('^[a-zA-Z]{1}[a-zA-Z0-9\.\-_]@[a-z]{1,3}$');
    if(emailExp.test(emailInput))
        document.getElementById("email").style.border="2px solid green";
    else
        document.getElementById("email").style.border="2px solid red";
}
