const login = new Login;

const user = document.getElementById('user');
const pass = document.getElementById('pass');
const btnLogin = document.getElementById('btn-login');



const loginUser = () => {
    // console.log(user.value)
    // console.log(pass.value)

    localStorage.removeItem("user");

    const data = {
        username: user.value,
        password: pass.value,
    }

    login.loginUser('http://localhost:8080/user/login', data)
    .then(result => {
        if (result.success) {
            saveToLS(result.user)
            console.log(result.user)
        } else {
            alert('Auth Error')
        }
    })
    .catch(error => console.log(error))
}

const saveToLS = (user) => {
    if (localStorage.getItem("user") === null) {
        localStorage.setItem('user', JSON.stringify(user));
    }
    location.href = "products.html";
}

btnLogin.addEventListener('click', loginUser);