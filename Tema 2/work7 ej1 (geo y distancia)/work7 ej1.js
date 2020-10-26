/*Develop a web app in which:
i.	Test if geolocation is available.
ii.	If it's available, show the current position (latitude and longitude)
iii.	If it isn't available, show a message for each and everyone of the possible errors.
iv.	Improve your code so you show the position continuously (although the user could be in moving, so it could change)
v.	Find the way to meassure the distance traveled.*/
var crdFija;
var crdMovil;
function successFija(pos){
    crdFija=pos.coords;
    console.log("Latitud: "+crdFija.latitude);
    console.log("Longitud: "+crdFija.longitude);
}
function success(pos){
    var crdMovil=pos.coords;
    console.log("Latitud: "+crdMovil.latitude);
    console.log("Longitud: "+crdMovil.longitude);
}
function error(err){
    console.warn("ERROR: "+err.code+" : "+err.message);
}

/////////////////////////////////////
function geoFijo(){
    if(!navigator.geolocation)
        console.log("The geolocation service isn't available in your browser");
    else
        navigator.geolocation.getCurrentPosition(successFija,error);        
}

geoFijo();

/////////////////////////////////////
function geoMovil(){
    if(!navigator.geolocation)
        console.log("The geolocation service isn't available in your browser");
    else
        navigator.geolocation.watchPosition(success,error);   
}

geoMovil();

///////////////////////////////////
function diferenciaPosiciones(){
    if(!navigator.geolocation)
        console.log("The geolocation service isn't available in your browser");
    else
        navigator.geolocation.watchPosition(success,error);   
}


////////////////CORRECION

distancia=0;
posAct=null;
posUlt=null;

cambioPos(coord){
    if(posActual==null)
        postAct=coord;
    else{
        posAct=posUlt;
        posUlt=coord;
        distancia+=distancia(posAct,posUlt);//buscar metodo distancia de dos puntos en internet
    }
}