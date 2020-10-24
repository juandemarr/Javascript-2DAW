function success(pos){
    var crd= pos.coords;
    var latitud=crd.latitude;
    var longitud=crd.longitude;
    /////////////////////////////////////////////////////
    /*console.log("Your curretn position is:");
    console.log("Latitude: "+crd.latitude);
    console.log("Longitud: "+crd.longitude);
    console.log("More or less: "+crd.accuracy+" meters");*/
    ///////////////////////////////////////////////////
    var map = L.map('mapid').setView([latitud, longitud], 16);//cambiar por el id del div

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitud, longitud]).addTo(map)
    .bindPopup('Estamos aquí.<br> Easily customizable.')
    .openPopup();
}
function error(err){
    console.warn("ERROR "+err.code+" : "+err.message);//sale en amarillo en la consola
}

navigator.geolocation.getCurrentPosition(success,error);//la funcion error es opcional, en caso de que el
//usuario el de a bloquear la ubiccion cuando la pregunte