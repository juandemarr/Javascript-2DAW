/*3.	Repeat exercise 2 using another maps library, like Google Maps.
i.	Find a way to know the address of your location (reverse geocoding).
*/
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
//ese map es el nombre de la variable creada para el mapa
}

function geoFindMe(){
    if(!navigator.geolocation){
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

/////REVERSE GEOCODING

function initMap() {
    navigator.geolocation.getCurrentPosition(success);
    ////CORREGIR
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: { lat: 40.731, lng: -73.997 },
    });
    const geocoder = new google.maps.Geocoder();
    const infowindow = new google.maps.InfoWindow();
    document.getElementById("submit").addEventListener("click", () => {
      geocodeLatLng(geocoder, map, infowindow);
    });
  }
  
  function geocodeLatLng(geocoder, map, infowindow) {
    const input = document.getElementById("latlng").value;
    const latlngStr = input.split(",", 2);
    const latlng = {
      lat: parseFloat(latlngStr[0]),
      lng: parseFloat(latlngStr[1]),
    };
    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status === "OK") {
        if (results[0]) {
          map.setZoom(11);
          const marker = new google.maps.Marker({
            position: latlng,
            map: map,
          });
          infowindow.setContent(results[0].formatted_address);
          infowindow.open(map, marker);
        } else {
          window.alert("No results found");
        }
      } else {
        window.alert("Geocoder failed due to: " + status);
      }
    });
  }
