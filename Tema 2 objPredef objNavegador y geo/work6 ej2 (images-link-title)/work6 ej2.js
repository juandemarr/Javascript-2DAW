/*Crea una página que contenga varios enlaces, imágenes y anclas de ejemplo
y añade una serie de enlaces que realicen lo siguiente:
c) Muestra el número de imagenes del documento
d) Muestra el id de la primera imagen
e) Muestra el número de enlaces del documento
f) Cambia el título del documento.
*/
console.log("c. Número de imágenes "+document.images.length);
//Hay que poner <script al pie de pagina para que se hayan cargado previamente las imagenes
console.log("d. Id de la primera imagen "+document.images[0].id);
console.log("e. Número de enlaces: "+document.links.length);
console.log("f. Cambia el título del documento "+document.title.replace(document.title,"High ground"));
location.href="https://www.google.es/?gws_rd=ssl";