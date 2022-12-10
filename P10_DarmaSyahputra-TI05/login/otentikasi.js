function login() {
    Event.preventDefault();

    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (uname == "darma2022" && pass == "integrity") {
        location.replace("success.html");
        alert("Login berhasil");
    } else {
        alert("Login gagal");
    }
}