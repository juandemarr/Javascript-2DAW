/*Develop a web app in which:
i.	Test if geolocation is available.
ii.	If it's available, show the current position (latitude and longitude)
iii.	If it isn't available, show a message for each and everyone of the possible errors.
iv.	Improve your code so you show the position continuously (although the user could be in moving, so it could change)
v.	Find the way to meassure the distance traveled.*/
var crdFija;
var crdMovil;

var lastPosition;

function successFija(pos){
    crdFija=pos.coords;
    console.log("Latitud: "+crdFija.latitude);
    console.log("Longitud: "+crdFija.longitude);
}

function success(pos){
    var crdMovil=pos.coords;
    console.log("Latitud: "+crdMovil.latitude);
    console.log("Longitud: "+crdMovil.longitude);
    
    //Para calcular la distancia
    lastPosition = crdMovil;
    if(lastPosition != undefined)
    distance += calculateDistance(lastPosition, crdMovil);
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

/* distancia=0;
posAct=null;
posUlt=null;

/*Se define 
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}; */

function succes(coord){ //equivalente al succes de abajo
    if(posActual==null)
        postAct=coord;
    else{
        posAct=posUlt;
        posUlt=coord;
        distancia+=calculateDistance(posUlt,posAct);//buscar metodo distancia de dos puntos en internet
        //distancia+=getDistanciaMetros(posUlt.latitude,posUlt.longitude,posAct.latitude,posAct.longitude);
    }
}

/////////////////////// Distancia con 4 parametros

function getDistanciaMetros(lat1,lon1,lat2,lon2)//posUlt.latitude,posUlt.longitude,posAct.latitude,posAct.longitude
{
  rad = function(x) {return x*Math.PI/180;}
  var R = 6378.137; //Radio de la tierra en km 
  var dLat = rad( lat2 - lat1 );
  var dLong = rad( lon2 - lon1 );
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * 
  Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  //aquí obtienes la distancia en metros por la conversion 1Km =1000m
  var d = R * c * 1000; 
  return d ; 
}

/////////////////////////////////////////////////////////////////////////

var distance = 0;
var lastPosition;


/* var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}; */


//FUNCION DISTANCIA

if(!navigator.geolocation)
    navigator.geolocation.watchPosition(success, error, options);
else
    console.error("Geolocation isn't available");


function success(pos) {
    var crd = pos.coords;

    console.log("Your current position is:");
    console.log("Latitude: "+crd.latitude);
    console.log("Longitude :"+crd.longitude);
    console.log("Acurracy: "+crd.accuracy+"meters.");
    console.log("Distance traveled: "+distance+"meters.");

    if(lastPosition != undefined) //equivalente a nulo de arriba
        distance += calculateDistance(lastPosition, crd);

    lastPosition = crd;//La primera vez adquiere el valor
}

function calculateDistance(lastPosition, position) {
    const R = 6371e3; // Radius of the Earth in meters
    // Latitude, longitude in radians
    const lastPhi = lastPosition.latitude * Math.PI/180;
    const phi = position.latitude * Math.PI/180;
    const diffPhi = (lastPosition.latitude-position.latitude) * Math.PI/180;
    const diffLambda = (lastPosition.latitude-position.latitude) * Math.PI/180;

    const a = Math.pow(Math.sin(diffPhi/2), 2) + Math.cos(lastPhi) * Math.cos(phi) * Math.pow(Math.sin(diffLambda/2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}