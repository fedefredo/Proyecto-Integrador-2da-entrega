const usersArray = JSON.parse(localStorage.getItem("users"))

const searchInput = document.getElementById("search")
const userForm = document.querySelector("form#admin-form")
const addUserBtn = userForm.querySelector("button[type=submit]")
const tableBody = document.getElementById("table-body")

userForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const el = event.target.elements

    if (el.contraseña.value !== el.contraseña2.value) {
        alert("Las contraseñas no coinciden")
        return
    }

    const emailExist = usersArray.find((user) => {
        if (user.email === el.correoElectronico.value) {
            return true
        }
    })

    if(emailExist && el.id.value !== emailExist.id) {
        Swal.fire({
            title: 'El correo ya existe',
            icon: 'error'
        })
        return
    }

    const id = el.id.value ? el.id.value : crypto.randomUUID()

    const user = {
        id: id, 
        fullname: el.nombreCompleto.value,
        email: el.correoElectronico.value,
        password: el.contraseña.value,
        age: el.age.valueAsNumber,
        bornDate: new Date(el.fechaDeNacimiento.value).getTime(),
        location: el.provincia.value,
        active: el.active.checked
    }

    if (el.id.value) { 
        const indice = usersArray.findIndex(usuario => {
            if (usuario.id === el.id.value) {
                return true
            }
        })

        usersArray[indice] = user

        Swal.fire({
            title: 'Usuario editado',
            text: 'Los datos del usuario se actualizaron correctamente',
            icon: 'success',
            timer: 1000
        })
    } else {
        usersArray.push(user)

        Swal.fire({
            title: 'Usuario agregado',
            text: 'Usuario se creo correctamente',
            icon: 'success',
            timer: 1000
        })
    }

    pintarUsuarios(usersArray)

    actualizarLocalStorage()

    resetearFormulario()
})


function pintarUsuarios(arrayPintar) {
    tableBody.innerHTML = "";
    arrayPintar.forEach((usr) => {
        tableBody.innerHTML += `
        <tr class="table-body">
            <td class="usr-image">
                <img src="${usr.image}" alt="${usr.fullname}" avatar>
            </td>
            <td class="usr-name">${usr.fullname}</td>
            <td class="usr-email">${usr.email}</td>
            <td class="usr-location">${usr.location}</td>
            <td class="usr-age">${usr.age}</td>
            <td class="usr-date">${formatDate(usr.bornDate)}</td>
            <td>
                <button class="action-btn btn-danger" title="Borrar usuario" onclick="borrarUsuario('${usr.id}')">
                <i class="fa-solid fa-trash-can"></i>
                </button>

                <button class="action-btn" title="Editar Usuario" onclick="editarUsuarios('${usr.id}')"><i class="fa-solid fa-pen-to-square"></i></button>
            </td>
        </tr>`
    })
}

pintarUsuarios(usersArray)


function actualizarLocalStorage() {
    localStorage.setItem("users", JSON.stringify(usersArray))
}



function resetearFormulario() {
    userForm.reset()
    userForm.elements.contraseña.disabled = false
    userForm.elements.contraseña2.disabled = false
    addUserBtn.classList.remove('btn-edit')
    addUserBtn.innerHTML = 'Agregar Usuario'
}


searchInput.addEventListener("keyup", (event) => {
    const inputValue = event.target.value.toLowerCase()

    const usuariosFiltrados = usersArray.filter((usr) => {
        const nombre = usr.fullname.toLowerCase()
        if (nombre.includes(inputValue)) {
            return true
        }
        return false
    })

    pintarUsuarios(usuariosFiltrados)
})

function editarUsuarios(idBuscar) {
    const userEdit = usersArray.find((usr) => {
        if(usr.id === idBuscar) {
            return true
        }
    })
    if (userEdit === undefined) {
        Swal.fire('Error al editar', 'No se pudo editar el usuario', 'error')
         return
    }

    const data = userForm.elements

    data.id.value = userEdit.id
    data.nombreCompleto.value = userEdit.fullname
    data.correoElectronico.value = userEdit.email
    data.contraseña.value = userEdit.password
    data.contraseña2.value = userEdit.password2
    data.age.value = userEdit.age
    data.fechaDeNacimiento.value = formatInputDate(userEdit.bornDate)
    data.provincia.value = userEdit.location
    data.active.checked = userEdit.active
    data.contraseña.disabled = true
    data.contraseña2.disabled = true

    addUserBtn.classList.add('btn-edit')
    addUserBtn.innerHTML = "Editar Usuario"
    
}

function borrarUsuario(id, nombre) {
    const confirmDelete = confirm(`Realmente desea borrar este usuario ${nombre}`)

    if (confirmDelete) {
        const indice = usersArray.findIndex(usr => usr.id === id)
        usersArray.splice(indice, 1)
        pintarUsuarios(usersArray)
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
    const formatedDate = `${year}-${month}-${day}`
    return formatedDate
}