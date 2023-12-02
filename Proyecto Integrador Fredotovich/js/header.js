const nav = document.getElementById("nav-list")
const headerUser = document.getElementById("header-user")

const loguedUser = JSON.parse(localStorage.getItem("currentUser"))

if (loguedUser) {
    if (loguedUser.role.toLowerCase() === "admin") {
        const adminUser = document.createElement("a")

        adminUser.href = "/pages/admin/user-admin.html"
        adminUser.innerText = "User Admin"
        adminUser.classList.add("admin-class")

        nav.appendChild(adminUser)

        const productsSection = document.createElement("a")

        productsSection.href = "/pages/admin/user-product.html"
        productsSection.innerText = "User Product"
        productsSection.classList.add("admin-class")

        nav.appendChild(productsSection)
    }

    delete registerBtn
    
    const userProfile = document.querySelector(".user-profile")
    userProfile.innerText = `${loguedUser.fullname}`

    const div = document.createElement("div")
    div.classList.add("user-logued")
    div.innerHTML = '<i class="fa-solid fa-user user-logued" style="color: #000000;"></i>'

    const userData = document.querySelector(".user-data")

    const logoutButton = document.createElement("a")
    logoutButton.classList.add("logout-button")
    logoutButton.innerText = "Cerrar sesión"

    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("currentUser")
        logoutButton.href = "/index.html"
    })

    const hr = document.createElement("hr")
    hr.classList.add("hr-user")

    userProfile.appendChild(div)
    userData.appendChild(hr)
    userData.appendChild(logoutButton)

} else {
    const userActionHTML = headerUser.querySelector(".user-action")

    const loginButton = document.createElement("a")
    loginButton.href = "/pages/login/login.html"
    loginButton.innerText = "Ingresar"
    loginButton.classList.add("nav-link")

    userActionHTML.appendChild(loginButton)

    const registerBtn = document.createElement("a")
    registerBtn.href = "/pages/register/register.html"
    registerBtn.innerText = "Register"
    registerBtn.classList.add("nav-link")

    userActionHTML.appendChild(registerBtn)

    const userNavBar = document.querySelector(".user-nav-bar")
    const userData = document.querySelector(".user-data")

    userNavBar.removeChild(userData)

}


