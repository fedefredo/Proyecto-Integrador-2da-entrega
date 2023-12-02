const users = JSON.parse(localStorage.getItem("users")) || [];
const loginForm = document.getElementById("form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const email = loginForm.elements.correoElectrónico.value.toLowerCase()
    const password = loginForm.elements.password.value

    const user = users.find((usr) => {
        if (usr.email.toLowerCase() === email) {
            return true
        }
        return false
    })

    if (!user || user.password !== password) {
        Swal.fire({
            icon: "error",
            title: "Login Incorrecto",
            text: "Alguno de los datos ingresados no es correcto",
            timer: 2000
        })

        return
    }

    delete user.password
    // user.password = undefined

    localStorage.setItem("currentUser", JSON.stringify(user))

    Swal.fire({
        icon: "success",
        title: "Login Correcto!",
        text: "Será redireccionado en un momento"
    })

    setTimeout(function(){
        window.location.href = "/index.html"
    }, 2500)
    
    
})





// if(!user && user.password !== password) {
//     Swal.fire({
//         icon: "success",
//         title: "Login Completado!",
//         text: "Será redireccionado en un momento",
//         timer: 2000
//     })
//     delete user.password
//     localStorage.setItem("currentUser", JSON.stringify(user))
//     setTimeout(function(){
//         window.location.href = "/index.html"
//     }, 2500)
//     return
// } else {
//     Swal.fire({
//         icon: "error",
//         title: "Login Incorrecto",
//         text: "Alguno de los datos ingresados ya existen",
//         timer: 2000
//     })
// }

