const currentUser = JSON.parse(localStorage.getItem("currentUser"))

if (!currentUser || currentUser.role !== "ADMIN") {
    window.location.href = '/index.html'
}