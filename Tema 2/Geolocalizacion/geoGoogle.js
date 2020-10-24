function success(position){
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    console.log(latitude+" -- "+longitude); 

    map = new google.maps.Map(document.getElementById('map'),{
        center:{lat:latitude, lng:longitude},
        zoom: 15,
    });
    var marker=new google.maps.Marker({
        position:{lat:latitude, lng:longitude}, 
        animation: google.maps.Animation.BOUNCE,//para añadirle una aniacion, como una opcion mas, al marcador creado
        map:map});
//ese map es el nombre de la variable de arriba que cree para el mapa
}

function geoFindMe(){
    if(!navigator.geolocation){//es un objeto, por lo que si la soporta tendra un valor, 
        //distinto de null (false en este caso)
        //para chequear si el navegador soporta geolocalización
        console.log('Geolocation is not supported by your browser');
    }else{
        console.log('Locating...');
        navigator.geolocation.getCurrentPosition(success);
    }
}

let map;

function initMap(){
    geoFindMe();
}
//ver reverseGeocoding de la pag de platforms maps de google, maps javascript api,
//samples, en la cual dada unas 
//coordenadas te dice la direccion que es, el nombre de la calle (segunla precision)

//en google cloud platoform, despues de google maps platform, al darle a empezar, salen
//los pasos para conseguir una api key, aunque hay que poner un atarjeta de credito 
//para la facturacion, aunque no l ahagan despues (cargan pero lo devuelven al no superar los 200$)
//se puede restringir el uso de la api key pinchando encima de ella y seleccionando dsp


