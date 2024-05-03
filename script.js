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