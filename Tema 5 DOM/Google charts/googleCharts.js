/*Crea una página en la que representarás 2 gráficas diferentes haciendo uso de Google 
Charts sobre los siguientes conjuntos de datos:

a) Representación en el Congreso de los Diputados por partidos en las últimas elecciones
 generales. Estos datos los deberás representar mediante un gráfico de barras y mediante 
 uno de sectores (PieChart).

b) Ránking mundial de países más turísticos (por número de visitantes). Deberás representar 
estos datos mediante un gráfico Geográfico.

Realiza una animación sobre uno de los gráficos del punto 1a. Para ello suponemos que 
pasados 10 segundos cambian los datos y debe animarse automáticamente.
*/
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

//GRAFICO DE BARRAS
function drawChart(){
    var data = google.visualization.arrayToDataTable([
        ['Element', 'Density', { role: 'style' }],
        ['PSOE', 120, 'red'],            
        ['PP', 88, 'blue'],            
        ['VOX', 52, 'gold'],
        ['Podemos', 35, 'color: purple' ],
        ['ERC', 13, 'color: yellow' ],
        ['Grupo Plural', 10, 'color: grey' ],
        ['Ciudadanos', 35, 'color: orange' ],
        ['PNV', 6, 'color: dark-green' ],
        ['H-Bildu', 5, 'color: black' ],
        ['Mixto', 9, 'color: brown' ]
    ]);
    var options = {
        title: 'Congreso de  los diputados',
        height:600 
    };

    var chart = new google.visualization.BarChart(document.getElementById('graficoBarrasCongreso'));

    chart.draw(data, options);
}

//GRAFICO DE SECTORES
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
    var data2 = google.visualization.arrayToDataTable([
        ['Element', 'Density', { role: 'style' }],
        ['PSOE', 120, 'red'],            
        ['PP', 88, 'blue'],            
        ['VOX', 52, 'gold'],
        ['Podemos', 35, 'color: purple' ],
        ['ERC', 13, 'color: yellow' ],
        ['Grupo Plural', 10, 'color: grey' ],
        ['Ciudadanos', 35, 'color: orange' ],
        ['PNV', 6, 'color: dark-green' ],
        ['H-Bildu', 5, 'color: black' ],
        ['Mixto', 9, 'color: brown' ]
    ]);
    var options2 = {
        title: 'Congreso de  los diputados',
        height:600 
    };

    var chart2 = new google.visualization.PieChart(document.getElementById('graficoCircularCongreso'));

    chart2.draw(data2, options2);
}

//GRAFICO GEOGRÁFICO

google.charts.load('current', {
    'packages':['geochart'],
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data3 = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['France', 89.4],
        ['Spain', 82.7],
        ['United States', 79.6],
        ['China', 62.9],
        ['Italy', 62.1]
    ]);

    var options3 = {
    };

    var chart3 = new google.visualization.GeoChart(document.getElementById('graficoGeo'));

    chart3.draw(data3, options3);
}
