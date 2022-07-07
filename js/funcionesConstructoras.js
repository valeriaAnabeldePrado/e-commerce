let contenedorcardsE = document.getElementById(`contenedor-cardsE`)

export const crearCard = (producto) =>{
  let tarjeta = document.createElement(`div`)
  tarjeta.classList.add(`col-sm-10`, `col-md-5`, `col-lg-4`, `col-xl-3`, `card`, `contTarjetas`)
  tarjeta.innerHTML = `
  <img src="${producto.img}" class="rounded card-img-top img-fluid img-card" alt="${producto.img}">
        <div class="card-body contTarjetas-items">
            <h5 class="card-title name"> Nombre: ${producto.name}</h5>
            <p class="card-text trademark">Marca: ${producto.trademark}</p>
            <p class="card-text color">Color: ${producto.color}</p>
            <p class="card-text price">${producto.price}</p>
        </div>
        <button data-id=${producto.id} class="btnn">Agregar </button>
  `
  contenedorcardsE.append(tarjeta)
}

const menuDesplegable = document.getElementById("menuToggler"),
      productosOk = document.getElementById("productosOk"),
      totalCompra = document.getElementById("totalCompra"),
      vaciarCarrito =document.getElementById("vaciarCarrito"),
      botonCerrar = document.getElementById("btnCerrar"),
      btnCompras = document.getElementById("btn-compras"),
      compraOK = document.getElementById("compraOK"),
      contenedorCompraOK = document.getElementById("contenedor-compraOK"),
      bajarCartel = document.getElementById("bajarCartel"),
      closee = document.getElementById("closee"),
      add = document.getElementById("add")
      

//Carrito objeto 
let carritoOK = {
 
}

const activarMenu = (e) => {
    if (e.target.matches(".btnn")){
        confCarrito(e.target.parentNode)
        carritoMenu()
        precioFinal()
        document.getElementById("add").remove()
    }
}


//Funcion de eventos
export const funcionEventos = () =>{
    document.addEventListener("click", activarMenu)
    vaciarCarrito.addEventListener("click", vaciarCarro)
    botonCerrar.addEventListener("click",cerrarMenu)
    btnCompras.addEventListener("click", activarBtncompras)
    compraOK.addEventListener("click", activarPopUp)
    closee.addEventListener("click", cerrarPopUp)
}

//Funcion para reconocer y crear el contenido del carrito
let confCarrito = (objetoProducto) => {
    let productoSelec = {
        //img: objetoProducto.querySelector(".img").getAttribute(`src`), no puedo acceder a la imagen
        id: objetoProducto.querySelector(".btnn").dataset.id,
        name: objetoProducto.querySelector(".name").textContent,
        color: objetoProducto.querySelector(".color").textContent,
        trademark: objetoProducto.querySelector(".trademark").textContent ,
        price: parseInt(objetoProducto.querySelector(".price").textContent),
        cantidad: 1
    }
   
    if(carritoOK.hasOwnProperty(productoSelec.id)){
        productoSelec.cantidad = carritoOK[productoSelec.id].cantidad+1
        console.log(`se sumo un total de:${productoSelec.cantidad}`)
    }

    
    carritoOK[productoSelec.id] = {...productoSelec}
    //console.log(carritoOK[productoSelec.id].name)--->EN el carrito [para navegar dentro del carrito]
    //console.log(productoSelec.color)---------------->FUERA del carrito
    //console.log(productoOK, carritoOK)

    
}


//Funcion para pintar el carrito
const carritoMenu =()=> {
    productosOk.innerHTML = "" //Para que no me repita cuando haga clic a otro
        menuDesplegable.classList.remove("menuActive") //Activo el menu del carrito
            console.log(Object.values(carritoOK))
            Object.values(carritoOK).forEach(item => {
                const carritoMenu = document.createElement("div")
                carritoMenu.classList.add("cardMenu")
                carritoMenu.innerHTML = `
                    <div id="eliminar">
        
                        <h5>${item.name}</h5>
                        <h6>${item.trademark}</h6>
                        <h6>${item.color}</h6>
                        <h6>Precio: ${item.price}</h6>
                        <h6>Cantidad: ${item.cantidad}</h6>
                    </div>
                `;
                productosOk.append(carritoMenu)
            })
}
//<div>
//  <img src="${item.img}" class="img-carrito" height="150px" alt="${item.name}">
//</div>
//No puedo acceder a la imagen del carrito

//Sumar productos
 const precioFinal = () =>{
     let valorFinal =0
     Object.values(carritoOK).forEach(item =>{
       valorFinal+=item.cantidad*item.price
         
    })
    //console.log( valorFinal)
     totalCompra.innerText=`${valorFinal}`
 }

//Vaciar carrito
const vaciarCarro = (e) =>{
    if (e.target.matches(".carritoVacio")){
        carritoOK = {}
        carritoMenu()
        precioFinal()
        //console.log(carritoOK)
    }
}
//Cerrar carrito 
const cerrarMenu = (e) =>{
    if (e.target.matches(".cerrar")){
     menuDesplegable.classList.add("menuActive")
    }
  }
//Abrir carrito con btn de compras
const activarBtncompras = (e) =>{
    if (e.target.matches(".btn-bag-i")){
        menuDesplegable.classList.remove("menuActive")
       }
}
const activarPopUp = (e) =>{
    if (e.target.matches(".menu-finalItem")){
        carritoOK = {}
        carritoMenu()
        precioFinal()
        contenedorCompraOK.classList.remove("contenedor-none")
        bajarCartel.classList.add("bajar-Cartel")
        menuDesplegable.classList.add("menuActive")
    } 
}
const cerrarPopUp = (e) =>{
    if(e.target.matches(".close")){
        contenedorCompraOK.classList.add("contenedor-none") 
    }
}

if (carritoOK = {} ){
    let mensaje = document.createElement(`h5`)
    mensaje.classList.add(`mensaje`)
    mensaje.innerHTML= `Debes seleccionar un producto`
    add.appendChild(mensaje)
}     