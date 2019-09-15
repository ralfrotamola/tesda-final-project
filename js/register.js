const validation = new Validation;

const
    fullname = document.getElementById("fullname"),
    username = document.getElementById("username"),
    password = document.getElementById("password"),
    confirmPassword = document.getElementById("confirm-password"),
    register = document.getElementById("btn-register");

const loadEventListeners = _ => {
    register.addEventListener("click", registerUser);
}

const registerUser = e => {
    const data = {
        fullname: fullname.value.trim().length,
        username: username.value.trim(),
        password: username.value.trim()                
    }
    
    let valid = validation.check([fullname, username, password, confirmPassword]);

    console.log(data)
    console.log(valid);
}

loadEventListeners();



