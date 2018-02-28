
	
function cambiaContenidoMapa(valor){

	switch (valor) {
    case 'paraiso':

       

	document.getElementById('p').innerHTML = "Paraíso es el cantón número 2\n\
 de la provincia de Cartago (Costa Rica). Está situado al este del Valle del \n\
Guarco. Por su área, de 411.91 km², es el segundo cantón más grande de la\n\
 provincia<br>\n\
Su ciudad cabecera del mismo nombre se ubica a unos 8 km al sureste de la \n\
ciudad de Cartago, por lo que forma parte de su área metropolitana.<br>\n\
De acuerdo al Censo Nacional del 2011, la población del cantón era de 57.743 \n\
habitantes, de los cuáles, el 2,4% nació en el extranjero. El mismo censo \n\
destaca que habían 14.626 viviendas ocupadas, de las cuáles, el 70,8% se \n\
encontraba en buen estado y habían problemas de hacinamiento en el 4,0% de las\n\
 viviendas. El 76,9% de sus habitantes vivían en áreas urbanas."


        
         var mly = new Mapillary.Viewer(
            'mly',
            // Replace this with your own client ID from mapillary.com
            'bzlsV0UtaFBXSmZNbm04RUR3b2ZHUTowYTFkYzFmN2UyM2VlMTE3',
            null);

        var lat = 9.838911918444254;
        var lon = -83.86592457633185;

        mly.moveCloseTo(lat, lon)
            .then(
                function(node) { 
                    console.log(node.key); 
                },
        
                function(error) { console.error(error); });

        // Viewer size is dynamic so resize should be called every time the window size changes
        window.addEventListener("resize", function() { mly.resize(); });
        
        
        break;

    case "cartago":


	document.getElementById('p').innerHTML = "Cartago es una ciudad \n\
costarricense, capital del cantón y de la provincia homónima. Se encuentra \n\
localizada en el Valle del Guarco, en la región central de Costa Rica.\n\
 Geográficamente está a una altitud de 1,435 m sobre el nivel del mar,\n\
 en las faldas del Volcán Irazú, a 24 km al sureste de la ciudad de San José.\n\
<br>El casco urbano central de la ciudad está dividido en tres distritos: distrito\n\
 Oriental, de 2.39 km² con 12.227 habitantes, el distrito Occidental, de 1.99 km² \n\
con 9.901 habitantes y la parte sur del distrito de El Carmen con 4.35 km² y\n\
 17.425 habitantes (2011). Cuenta con 26 calles y 22 avenidas comprendidas \n\
entre el Cementerio General y la Basílica de Nuestra Señora de los Ángeles en\n\
 sentido este-oeste y desde el Museo Municipal hasta el Plantel Municipal en\n\
 sentido norte-sur, para un casco histórico de 10 km². Allí se concentra la \n\
mayor parte de los comercios, el ayuntamiento, las Ruinas de Santiago Apóstol, \n\
la Basílica de Nuestra Señora de los Ángeles y el Colegio de San Luis Gonzaga el\n\
 cual es, por su antigüedad, la primera institución de enseñanza secundaria del país;\n\
 además, se encuentra el Museo de Cartago y el Instituto Tecnológico de Costa Rica, \n\
la universidad más importante de Costa Rica en ingenierías.";
        
          var mly = new Mapillary.Viewer(
            'mly',
            // Replace this with your own client ID from mapillary.com
            'bzlsV0UtaFBXSmZNbm04RUR3b2ZHUTowYTFkYzFmN2UyM2VlMTE3',
            null);

        var lat = 9.86487853;
        var lon = -83.92148263;

        mly.moveCloseTo(lat, lon)
            .then(
                function(node) { console.log(node.key); },
                function(error) { console.error(error); });

        // Viewer size is dynamic so resize should be called every time the window size changes
        window.addEventListener("resize", function() { mly.resize(); });
        break;

    case "irazu":
      

	document.getElementById('p').innerHTML = "El volcán Irazú es un \n\
estratovolcán activo ubicado en Costa Rica, en la Cordillera Volcánica Central,\n\
 en el interior del parque nacional que lleva su nombre, a unos 32 km al norte\n\
 de la ciudad de Cartago. Su cima, a una altitud de 3.432 msnm, \n\
se encuentra ubicada en el distrito de Santa Rosa, en el Cantón de Oreamuno,\n\
 Provincia de Cartago<br>\n\
La cumbre del volcán tiene varios cráteres, uno de los cuales contiene un lago\n\
 verde de profundidad variable. Es el volcán activo más alto de Costa Rica.\n\
 Es fácil visitarlo desde San José, a través de un camino directo hasta los \n\
cráteres de la cumbre y un servicio diario de\n\
 autobús a la cumbre. Es un punto turístico muy popular."


        
         var mly = new Mapillary.Viewer(
            'mly',
            // Replace this with your own client ID from mapillary.com
            'bzlsV0UtaFBXSmZNbm04RUR3b2ZHUTowYTFkYzFmN2UyM2VlMTE3',
            null);

        var lat = 9.932596368233021;
        var lon = -83.88343018210134;

        mly.moveCloseTo(lat, lon)
            .then(
                function(node) { console.log(node.key); },
                function(error) { console.error(error); });

        // Viewer size is dynamic so resize should be called every time the window size changes
        window.addEventListener("resize", function() { mly.resize(); });
        break;
    
    }
}

