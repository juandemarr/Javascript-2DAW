/*2.	Let's try to use the geolocation information with the API of LeafletJS.
i.	Use a map to show your location
ii.	Draw a marker in your location
*/
function success(pos){
    var crd= pos.coords;
    var map = L.map('mapid').setView([crd.latitude, crd.longitude], 16);//cambiar por el id del div

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([crd.latitude, crd.longitude]).addTo(map)
    .bindPopup('We are here!')
    .openPopup();
}

function geoFijo(){
    if(!navigator.geolocation)
        document.write("The geolocation service isnt available in your browser");
    else
        navigator.geolocation.getCurrentPosition(success);
}

geoFijo();


/*document.write("EJ 1.4"); Habria que hacer otro div y ponerlo ahí, escribiendo el numero del ej en el codigo html
function geoMovimiento(){
    if(!navigator.geolocation)
        document.write("The geolocation service isnt available in your browser");
    else
        navigator.geolocation.watchPosition(success);
}

geoMovimiento();*/