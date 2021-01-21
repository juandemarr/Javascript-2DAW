/*Mediante una cola de 5 métodos fadeIn() aplicados sobre 5 elementos div cuadrados,
establecer un retraso “slow”, “fast”, 800 ms, 2000 ms y 4000 ms. respectivamente.*/
window.onload=()=>{
    $(".div1").fadeIn("slow");
    $(".div2").fadeIn("fast");
    $(".div3").fadeIn("800");
    $(".div4").fadeIn("2000");
    $(".div5").fadeIn("4000");
}