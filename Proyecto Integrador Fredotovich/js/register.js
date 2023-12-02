const users = JSON.parse(localStorage.getItem("users")) || []
const registerForm = document.getElementById("form")

registerForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const el = event.target.elements

    if (el.contraseña.value !== el.contraseña2.value) {
        Swal.fire({
            title: 'Las contraseñas no coinciden',
            icon: 'error'
        })
        return
    }

    const emailExist = users.find((user) => {
        if (user.email === el.correoElectronico.value) {
            return true
        } 
    }) 

    if (emailExist && el.id.value !== emailExist.id) {
        Swal.fire({
            title: 'El correo ya existe',
            icon: 'error'
        })
        return
    }

    const id = el.id.value ? el.id.value : crypto.randomUUID()

    const user = {
        fullname: el.nombreCompleto.value,
        email: el.correoElectronico.value,
        password: el.contraseña.value,
        bornDate: new Date(el.fechaDeNacimiento.value).getTime(),
        location: el.provincia.value,
        id: id
    }

    users.push(user)

    actualizarLocalStorage()

    resetForm()
})

function actualizarLocalStorage() {
    localStorage.setItem("users", JSON.stringify(users))
}

function resetForm() {
    registerForm.reset()
}














