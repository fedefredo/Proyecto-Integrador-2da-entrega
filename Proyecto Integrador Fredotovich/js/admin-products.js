const productsArray = JSON.parse(localStorage.getItem("products"))

const searchInput = document.getElementById("search")
const productForm = document.querySelector("form#admin-form")
const addProductBtn = productForm.querySelector("button[type=submit]")
const tableBody = document.getElementById("table-body")


productForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const el = event.target.elements

    const productExist = productsArray.find((product) => {
        if (product.productName === el.nombreProducto.value) {
            return true
        }
    })

    if(productExist && el.id.value !== productExist.id) {
        Swal.fire({
            title: 'El producto ya existe',
            icon: 'error'
        })
        return
    }

    const id = el.id.value ? el.id.value : crypto.randomUUID()

    const product = {
        id: id, 
        productName: el.nombreProducto.value,
        productDescription: el.descripcionProducto.value,
        productPrice: el.precioProducto.valueAsNumber,
        productDate: new Date(el.fechaIngreso.value).getTime(),
        productImage: el.imagenProducto.value
    }

    if (el.id.value) { 
        const indice = productsArray.findIndex(producto => {
            if (producto.id === el.id.value) {
                return true
            }
        })

        productsArray[indice] = product

        Swal.fire({
            title: 'Producto editado',
            text: 'Los datos del producto se actualizaron correctamente',
            icon: 'success',
            timer: 1000
        })
    } else {
        productsArray.push(product)

        Swal.fire({
            title: 'Producto agregado',
            text: 'El producto se creo correctamente',
            icon: 'success',
            timer: 1000
        })
    }

    pintarProductos(productsArray)

    actualizarLocalStorage()

    resetearFormulario()
})




function pintarProductos(arrayPintar) {
    tableBody.innerHTML = "";
    arrayPintar.forEach((product) => {
        tableBody.innerHTML += `
        <tr class="table-body">
            <td class="usr-image">
                <img src="${product.productImage}" alt="${product.productName}" avatar>
            </td>
            <td class="usr-name">${product.productName}</td>
            <td class="prod-descript">${product.productDescription}</td>
            <td class="usr-age">$${product.productPrice}</td>
            <td class="usr-date">${formatDate(product.productDate)}</td>
            <td class="edits-buttons">
                <button class="action-btn btn-danger" title="Borrar usuario" onclick="borrarProducto('${product.id}')">
                <i class="fa-solid fa-trash-can"></i>
                </button>

                <button class="action-btn" title="Editar Usuario" onclick="editarProducto('${product.id}')"><i class="fa-solid fa-pen-to-square"></i></button>
            </td>
        </tr>`
    })

}

pintarProductos(productsArray)


function actualizarLocalStorage() {
    localStorage.setItem("products", JSON.stringify(productsArray))
}


function resetearFormulario() {
    userForm.reset()
    addProductBtn.classList.remove('btn-edit')
    addProductBtn.innerHTML = 'Agregar Producto'
}


searchInput.addEventListener("keyup", (event) => {
    const inputValue = event.target.value.toLowerCase()

    const productosFiltrados = productsArray.filter((product) => {
        const nombre = product.productName.toLowerCase()
        if (nombre.includes(inputValue)) {
            return true
        }
        return false
    })

    pintarProductos(productosFiltrados)
})


function editarProducto(idBuscar) {
    const productEdit = productsArray.find((product) => {
        if(product.id === idBuscar) {
            return true
        }
    })
    if (productEdit === undefined) {
        Swal.fire('Error al editar', 'No se pudo editar el producto', 'error')
         return
    }

    const data = productForm.elements

    data.id.value = productEdit.id
    data.nombreProducto.value = productEdit.productName
    data.descripcionProducto.value = productEdit.productDescription
    data.precioProducto.value = productEdit.productPrice
    data.fechaIngreso.value = formatInputDate(productEdit.productDate)
    data.imagenProducto.value = productEdit.productImage

    addProductBtn.classList.add('btn-edit')
    addProductBtn.innerHTML = "Editar Producto"   
}


function borrarProducto(id, nombre) {
    const confirmDelete = confirm(`Realmente desea borrar este producto ${nombre}`)

    if (confirmDelete) {
        const indice = productsArray.findIndex(product => product.id === id)
        productsArray.splice(indice, 1)
        pintarProductos(productsArray)
        actualizarLocalStorage()
    }
}


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
    const formatedDate = `${day}-${month}-${year}`
    return formatedDate
}
