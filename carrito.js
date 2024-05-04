let carrito = localStorage.getItem("carrito") //obtengo el carrito del local storage

if (carrito) {
    carrito = JSON.parse(carrito) //lo paso a objeto literal
} else {
    carrito = {}
}

function mostrarcarrito(){ //creo la funcion para ir mostrando las cosas en el carrito
    let listaproductos='' //creo mi variable donde van a estar mis listas de productos vacia

    for (let producto in carrito){ //recorro cada prdocuto del carrito
        listaproductos += '<li>'+ `<section class="imagen-carrito"><img src="${carrito[producto].imagen}" width="200px" height="200px" alt="${producto}" /></section>` +producto+'-'+carrito[producto].precio+'x'+carrito[producto].cantidad+ `<button onclick="aumentarCantidad('${producto}')">+</button>` + `<button onclick="disminuirCantidad('${producto}')">-</button>` + '</li>'//aqui los muestrso con su precio y cantidad, esto al estar al finla de la funcion agregar al carrito, se va actualizando
    }

    //HASTA ACA ENTRA
    let listaproductoselement=document.getElementById("listaproductos_") // Busco el elemento con el id "listaProductos" y lo guardo en la variable listaProductosElement. Esto lo que hace es que toda modificacion que le haga a esta varibale en java, le ocurre a mi variable en el html
    // LO DEVUELVE NULL A LA LISTA
    console.log("antes de entrar al if")
    if(listaproductoselement){ // si existe entonces:
        listaproductoselement.innerHTML=listaproductos //que tenga el mismo contenido que listaproductos
        console.log("hola entre al if")
    }
    console.log("despues del if")

    mostrartotal()
}

function limpiarcarrito(){//creo una funcion para limpiar el carrito
    carrito={} //lo vuelvo a vaciar
    mostrarcarrito()//asi se actualiza la lista de productos, que es la que se va mostrar en la pagina
    // let $total=document.getElementById("total")
    // $total.textContent=""//Cambio el contenido de $total por un string de 0.
    localStorage.setItem("carrito", JSON.stringify(carrito)) //guardo en el local storage el carrito, lo paso a string
}

function mostrartotal(){//funcion para mostrar el total del carrito
    let total_=0 //empiezo siempre en 0
    for (let producto in carrito){//recorre todos los elementos del carrito
        total_ += carrito[producto].precio * carrito[producto].cantidad // suma sus precios por la cantidad que se lleva
    }
    let $total=document.getElementById('total')//Esto lo que hace es que toda modificacion que le haga a esta varibale en java, le ocurre a mi variable en el html
    console.log($total)
    $total.textContent = "El monto es: $" + total_; // Cambio el contenido de $total por el total. y uso textcontent para que no lo analice como html

    if (total_ === 0) {
        let $p = document.getElementById("carritoVacio");

        $p.textContent = "El carrito esta vacio";

        let $botonVaciar = document.getElementById("boton-vaciar");

        $botonVaciar.style.display = "none";
    }
}

function aumentarCantidad(nombre) {
    carrito[nombre].cantidad++;
    mostrarcarrito();
    mostrartotal();

    localStorage.setItem("carrito", JSON.stringify(carrito)) //guardo en el local storage el carrito, lo paso a string
}

function quitarDelCarrito(nombre) {
    delete carrito[nombre];
    mostrarcarrito();
    mostrartotal();

    localStorage.setItem("carrito", JSON.stringify(carrito)) //guardo en el local storage el carrito, lo paso a string
}

function disminuirCantidad(nombre) {
    if (carrito[nombre].cantidad > 1) {
        carrito[nombre].cantidad--;
        mostrarcarrito();
        mostrartotal();
    } else {
        quitarDelCarrito(nombre)
    }

    localStorage.setItem("carrito", JSON.stringify(carrito)) //guardo en el local storage el carrito, lo paso a string
}

document.addEventListener("load", mostrarcarrito()) // cuando se carga la pagina, muestro el carrito