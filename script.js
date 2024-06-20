let carrito = localStorage.getItem("carrito") //obtengo el carrito del local storage

if (carrito) {
    carrito = JSON.parse(carrito) //lo paso a objeto literal
} else {
    carrito = {}
}

function agregaralcarrito(nombre,precio,img) {//funcion que recibe el nombre y precio del producto
    if(carrito[nombre]){ //si existe carrito[nombre] entonces... ({ = :)
        carrito[nombre].cantidad ++; //entonces le sumo ++, es lo mismo que decir +=1 ?
    }
    else{ //si no esta en el carrito, lo creo
        carrito[nombre]={ //aca creo este elemento en el diccionario carrito, que a su vez es otro diccionario con elementos adentro
            precio:precio, 
            cantidad: 1, // solo 1 ya que esto lo hace la primera vez que agrega cada producto
            imagen: img,
        }
    }

    localStorage.setItem("carrito", JSON.stringify(carrito)) //guardo en el local storage el carrito, lo paso a string
}
function calcularTiempo() {
    var material = document.getElementById("material").value;
    var size = document.getElementById("size").value;
    var dias = 0;
  
    if (material === "roja") {
      switch (size) {
        case "chico":
          dias = 2;
          break;
        case "mediano":
          dias = 3;
          break;
        case "grande":
          dias = 4;
          break;
        default:
          dias = 0;
          break;
      }
    } else if (material === "gris") {
      switch (size) {
        case "chico":
          dias = 3;
          break;
        case "mediano":
          dias = 4;
          break;
        case "grande":
          dias = 5;
          break;
        default:
          dias = 0;
          break;
      }
    }
  
    var resultado = document.getElementById("resultado");
    if (dias > 0) {
      resultado.innerHTML = `El tiempo estimado de entrega es de ${dias} días hábiles.`;
    } else {
      resultado.innerHTML = `Por favor selecciona una opción válida.`;
    }
  }
  


/* 
JAVASCRIPT

//document.addeventlistener("DOMContentLoaded",function(){ TODO AQUI DENTRO
//document.getelementbyId("id") toma un elemento del html, y o manipulo con css
//addEventlistener("click",function (){ escucha cunaod le hcaen click y hace la siguiente funcion..
    //XXX.classlist.toggle("active") )} se fija si el elemento de html tiene o no la clase que agrego. En caso de no tenerla la agrega y sino la quita
//function validar...(){
    //let ... = document.getelementbyid("") )}.value; aca es cuando ellos escribieron algo y quiero especifico lo que se escribio
    //if (nombre() === "" || email() === "" || asunto() === "" || mensaje() === "") { para poner muchas concidiciones buleanas 
        //document.getElementById("error-mensaje").innerText= "Por favor, introduzca una dirección de correo electrónico válida." ;} se muestra el texto tal cual en el html
// SI AGARRO CLASES CON MISMOS NOMBRES:

    //let elemento=document.querySelectorAll(".elemento"); con el .XXX selecciono todas las clases, sino sin el punto o 
    //elemento.forEach(function(elementos) { aca recorro cada uno de los elementos con estas clases
    //document.getElementById("contador").innerHTML= contador; muestra en el html como su formato
    //elementos.style.color="red" le cambio el elemento el color cuando lo toco, la clase == li

// AL SUMAR ALGO EN 1 EN 1 = ++

HTML

<!--
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <link href="css/style.css" rel="stylesheet">
        <!head>
    <body>
        <header>
            <img class=".." src="images/IMAFE123.jrg" alt="...">
            <nav class="..."> cuando creo un head poner esta etiqueta
                <ul>
                    <li class="..."></li>
                    <li class="..."><a href="...html">lo que va ser el hipervinculo</a><!li>
                <!ul> <!nav>
                <div class="..." id="...">
                    <div></div>
                    <div></div>
                </div>
            <nav></nav> puedo crear otro nav si quiero para celu lo que quiera
        <!header>
        <main>
            <div class="container"> hace un contenedor 
            <h2>Formulario de Contacto</h2>
            <form action="procesar_formulario.php" method="post">  form de crear formulario, meto todo aca. action = "nombre.php" method = "post"
                <label for="nombre">Nombre:</label> label para mostrar lo que se escribe, for="igual al id,name"
                <input type="text" id="nombre" name="nombre" required> input para que escriba, type:"lo que debe ir ahi", id="mismo for",name="mismo for". required de necesario. si escribe un email es type="email"
                <br> salto
                <button type="submit" onclick="validarformulario()">enviar</button> fundamental type="submite", lo conecta con lo anterior. onclick (al tocarlo)= "funcion()", ejecutar tal funcion...
            </div>
            SI QUIERO MOSTRAR ALGO EN EL HTML
            <div id="contador"></div>  LUEGO COON EL DOCUMENT.GETELEMENTBYIDI LO CONECTO
            
            FORMAS DE ORGANIZAR <SECTION></SECTIION><ARTICLE></ARTICLE><DIV></DIV>
            <!main>

        <footer><!footer>
         <script src="js/script.js"></script> FUNDAMENTAL
    </body>
    </html>

CSS

{margin: 0; MARGEN EXTERIOR
    padding: 0; MARGEN INTERIOR 10 pt
    box-sizing: border-box;} PONERLO ESTA BUENO EN RESPONSIVE

    las etiquetas de por si no necesitas ni # ni .
    las class= .clase
    los id= #id

    width : ancho de la pantalla, vw mejor  algo chico 40 px
    height: altura ;
    background-color: color del fondo
    margin: cuatros margenes, por manecillas del reloj (hacerlo por pt)
    colos: color de la letra
    font-weight: bold/700 negrita
    font-size: ..14pt
    text-align: justify; texto justificado

    article:hover {  Hover sirve para que cuando paso el mouse por encima del elemento hago algo 
        border: 4px solid blue; agrego borde

    display: flex; los pone al al lado
    display:none; no se muestra

    z-index: 1000 se fija
    justify-content: space-between; uno en una punta, lo otro en la otra
                     space-aroud, espacio lindo entre cada elemento
    align-items: center; los centra en cuanto a altura
    lyst-style: none saca los puntos
    text-decoration: saca el interlineado

    en caso del flex ponerlo por calumnas:
    flex-direction: column;
    justify-content: center; los centra horizontalmente

    @media (max-width: 480px) { para celular

        position: absolute; se muestra fijo aca 
        top: calc(100px + 20pt);
        left: 11pt;
        align-item: flex start ahi a la izquierda

        .active {
        display: flex;  le agregamos algo que ya nombre pero por su clase
    
*/
