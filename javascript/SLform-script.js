const passwordCheck = document.getElementsByClassName("password-check");
const face = document.getElementsByClassName("checkbox-face");
const password = document.getElementsByClassName("password");

function revealSignup() {
    if(passwordCheck[0].checked) {
        password[0].type = "text";
        face[0].style.backgroundImage = "url('../assets/images/extra/open-eye.png')";
    } else {
        password[0].type = "password";
        face[0].style.backgroundImage = "url('../assets/images/extra/closed-eye.png')";    
    }
}
function revealLogin() {
    if(passwordCheck[1].checked) {
        password[1].type = "text";
        face[1].style.backgroundImage = "url('../assets/images/extra/open-eye.png')";
    } else {
        password[1].type = "password";
        face[1].style.backgroundImage = "url('../assets/images/extra/closed-eye.png')";
    }
}

const mode = new URLSearchParams(window.location.search).get("mode");
const signup = document.getElementById("signup");
const login = document.getElementById("login");
if (mode == "signup") {
    signup.style.display = "flex";
    login.style.display = "none";
} else {
    signup.style.display = "none";
    login.style.display = "flex";
}