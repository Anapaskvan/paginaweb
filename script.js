let carrito={} //aca se guarda de lo que se agrega al carrito
function agregaralcarrito(nombre,precio) {//funcion que recibe el nombre y precio del producto
    if(carrito[nombre]){ //si existe carrito[nombre] entonces... ({ = :)
        carrito[nombre].cantidad ++; //entonces le sumo ++, es lo mismo que decir +=1 ?
    }
    else{ //si no esta en el carrito, lo creo
        carrito[nombre]={ //aca creo este elemento en el diccionario carrito, que a su vez es otro diccionario con elementos adentro
            precio:precio, 
            cantidad: 1 // solo 1 ya que esto lo hace la primera vez que agrega cada producto
        }
    }
    mostrarcarrito() //llamo a esta funcion cada vez que se agrega al carrito algo
    mostrartotal() // llamo este funcion cada vez que se agrega algo al carrito
}
function mostrarcarrito(){ //creo la funcion para ir mostrando las cosas en el carrito
    let listaproductos='' //creo mi variable donde van a estar mis listas de productos vacia
    for (let producto in carrito){ //recorro cada prdocuto del carrito
        listaproductos += '<li>'+producto+'-'+carrito[producto].precio+'x'+carrito[producto].cantidad+'</li>'//aqui los muestrso con su precio y cantidad, esto al estar al finla de la funcion agregar al carrito, se va actualizando

    }
    console.log(listaproductos)
    console.log("hola")
    let listaproductoselement=document.getElementById("listaproductos_") // Busco el elemento con el id "listaProductos" y lo guardo en la variable listaProductosElement. Esto lo que hace es que toda modificacion que le haga a esta varibale en java, le ocurre a mi variable en el html
    console.log(listaproductoselement)
    console.log("viendo si entro al inner")
    listaproductoselement.innerHTML=listaproductos
    console.log(listaproductoselement)
    console.log('es la segunda')
    /*if(listaproductoselement){// Si existe listaProductosElement, cambio su contenido por la lista de productos.
        //no entra
        console.log(listaproductos)
        console.log("hola")
        listaproductoselement.innerHTML=listaproductos // Cambio el contenido de listaProductosElement por la lista de productos. inner asi puede interpretarlo como html
        console.log(listaproductoselement)
        console.log("HICE EL PASAJE")*/
    //console.log(listaproductoselement)
    //console.log("ACA ENTRE A LO QUE ES LA LISTA HTML")
}

function limpiarcarrito(){//creo una funcion para limpiar el carrito
    carrito={} //lo vuelvo a vaciar
    mostrarcarrito()//asi se actualiza la lista de productos, que es la que se va mostrar en la pagina
    let $total=document.getElementById("total")
    $total.textContent=""//Cambio el contenido de $total por un string de 0.
}
function mostrartotal(){//funcion para mostrar el total del carrito
    let total_=0 //empiezo siempre en 0
    for (let producto in carrito){//recorre todos los elementos del carrito
        total_ += carrito[producto].precio * carrito[producto].cantidad // suma sus precios por la cantidad que se lleva
    }
    let $total=document.getElementById('total')//Esto lo que hace es que toda modificacion que le haga a esta varibale en java, le ocurre a mi variable en el html
    console.log($total)
    $total.textContent = "El monto es: $" + total_; // Cambio el contenido de $total por el total. y uso textcontent para que no lo analice como html
}