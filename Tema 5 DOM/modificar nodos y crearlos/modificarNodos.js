//MODIFICAR NODOS

/*El número de imágenes que aparecen en la página
*Número de enlaces a redes sociales al final de la página.
*Módifica la URL del enlace a Twitter para que te lleve a "iesayala.com"
*Modifica la imagen del logo de la cabecera de la página ("gdi") para que aparezca 
la imagen que tú quieras.
*Modifica el texto que aparece en la cabecera ("Join us.....") para que se 
muestre el texto que tu desees.*/
console.log(document.getElementsByTagName("img"));
document.querySelector(".social-links a[title=\"Twitter\"]").href="iesayala.com";
document.querySelector(".navbar-left a img[alt=\"Girl Develop It logo\"]").src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c4ba.png";
document.querySelector(".homepage-full-header .container").textContent="HELLO THERE";
