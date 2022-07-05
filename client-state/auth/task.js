let form = document.getElementById("signin");
let welcome = document.getElementById("welcome");
let id;
if(localStorage.getItem("auth") === "yes") {
    welcome.classList.add('welcome_active');
    id = localStorage.getItem('user_id');
    welcome.querySelector('#user_id').textContent = id;
} else {
    form.classList.add("signin_active");
}

let singIn = document.getElementById("signin__form");
let input = document.getElementsByClassName("control");
let btn = document.getElementById("signin__btn");
singIn.addEventListener("submit", function (e) {
    e.preventDefault();
    if(input[0].value.trim() && input[1].value.trim()) {
        let formData = new FormData(singIn);
        let request = new XMLHttpRequest();
        request.open('POST','https://netology-slow-rest.herokuapp.com/auth.php');
        request.responseType='';
        request.send(formData);
        request.onreadystatechange = function(){
            if (this.readyState == 4) {
                let response = JSON.parse(request.responseText);
                if (response.success == false) {
                    alert('Неверные логин / пароль');
                }
                else {
                    form.classList.remove('signin_active');
                    welcome.classList.add('welcome_active');
                    welcome.querySelector('#user_id').textContent = response.user_id;
                    localStorage.setItem('auth', 'yes');
                    localStorage.setItem('user_id', response.user_id);
                }
            }
        }
    }
})