const contenedorProductos = document.querySelector("#container-cards")
const products = JSON.parse(localStorage.getItem("products"))
const cantidadProductos = document.getElementById("cantidad-filter")

function cargarProductos(product) {
    contenedorProductos.innerHTML = "";
    product.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("div-cards")
        div.innerHTML = `
        <div class="card-img-container">
            <img src="${producto.productImage}" alt="${producto.productName}" class="card-img">
        </div>
        <hr class="div-separation">
        <div class="card-txt-container">
            <h3 class="card-phone">${producto.productName}</h3>
            <p class="card-description">${producto.productDescription}</p>
            <div class="fecha-ingreso">${formatDate(producto.productDate)}</div>
            <div class="card-price"><strong>$${producto.productPrice}</strong></div>
            <div class="card-other-options">
                <div class="card-info">VER MÁS</div>
                <div class="card-buy btn-buy" id="btn-buy" onclick="addToCart()">COMPRAR</div>
            </div>
        </div>
        `

        contenedorProductos.append(div)
    })
}

cargarProductos(products)



const currentUser = JSON.parse(localStorage.getItem("currentUser"))

function addToCart() {
    if(!currentUser) {
        Swal.fire({
            icon: "info",
            title: "Regístrese o inicie sesión para agregar productos al carrito",
            timer: 3000
        })
        setInterval(() => {
            window.location.href = "/pages/login/login.html"
        }, 2000)
        return
    }
}



const searchProductInput = document.getElementById("search-product-input")
const btnSearch = document.querySelector(".btn-search")


searchProductInput.addEventListener("keyup", (event) => {
    const inputValue = event.target.value.toLowerCase()
    cantidad = 0; 
    cantidadProductos.innerHTML = "";

    const productoFiltrado = products.filter((prod) => {
        const nombre = prod.productName.toLowerCase()
        if (nombre.includes(inputValue)) {
            cantidad++
            return true
        }
        return false
    })

    btnSearch.addEventListener("click", () => {
        if(cantidad === 8) {
            cantidadProductos.innerHTML = "";
        } else {
            cantidadProductos.innerHTML = `Se encontraron ${cantidad} productos`
        }

        cargarProductos(productoFiltrado)
    })

})





// searchProductInput.addEventListener("keyup", (event) => {
//     const inputValue = event.target.value.toLowerCase()
//     cantidad = 0;
//     cantidadProductos.innerHTML = "";

//     const productoFiltrado = products.filter((prod) => {
//         const nombre = prod.productName.toLowerCase()
//         if (nombre.includes(inputValue)) {
//             cantidad++
//             return true
//         }
//         return false
//     })

//     if (cantidad === 8) {
//         cantidadProductos.innerHTML = "";
//     } else {
//         cantidadProductos.innerHTML = `Se encontraron ${cantidad} productos`
//     }


//     cargarProductos(productoFiltrado)
// })



function formatDate(fecha) {
    const collator = new Intl.DateTimeFormat("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    })

    const fechaFormateada = collator.format(fecha)

    return fechaFormateada

}

function formatInputDate(fechaInput) {
    const fecha = new Date(fechaInput)
    const year = fecha.getFullYear()
    const month = fecha.getMonth() + 1
    if (month < 10){
        return 0 + month
    }
    const day = fecha.getDate()
    const formatedDate = `${year}-${month}-${day}`
    return formatedDate
}



















