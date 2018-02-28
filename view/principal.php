<!DOCTYPE html>
<html lang = "es">

    <head>

        <meta charset = "utf-8"/>
        <title> Sitio  del lab</title>
        <meta name="description" content="sitio"/>
        <meta name="viewport" content="width-device-width,initial-scale=1"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <script type="text/javascript" src="view/js/scriptPrincipal.js"></script>
        <script src='https://unpkg.com/mapillary-js@2.11.1/dist/mapillary.min.js'></script>
        <link href='https://unpkg.com/mapillary-js@2.11.1/dist/mapillary.min.css' rel='stylesheet' />
        <style>
            html, body { margin: 0; padding: 0; height: 100%; }
            #mly { height: 100%; }
        </style>
    </head>
    <body>

        <header>

            <h1 class="display-1" >Laboratorio #4 #5 #6 </h1>


            <form>

                <div class="form-group">
                    <label for="lugar">Selecciona el lugar</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option onclick="cambiaContenidoMapa('paraiso')">Paraíso Centro</option>
                        <option onclick="cambiaContenidoMapa('irazu')">Volcán Irazú</option>
                        <option onclick="cambiaContenidoMapa('cartago')">Cartago Centro</option>

                    </select>
                </div>
                <div class="form-group">
                    <label >Información</label>

                    <p id="p">

                    </p>

                </div>

                <div class="form-group">
                    <label >Mapa</label>


                    <section id="principal">


                        <div id='mly' style='width: 640px; height: 480px;'></div>
                        
                         <div id="mapid" style="width:800px; height: 600px; float: left"></div>

                    </section>

                </div>

            </form>


        </header>



        <footer>


            <div align="center">Elaborado por Priscilla Mena Monge<br> Daniel Nuñez Solano<br> Paulino Salazar Coto</div>

        </footer>




    </body>



</html>

