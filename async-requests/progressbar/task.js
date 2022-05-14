let progress = document.getElementById("progress");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let forms = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.upload.loadstart = function() {
        progress.value = 0.3;
    }
    xhr.upload.onprogress = function () { 
        progress.value = 0.7;
    };
    xhr.upload.onload = function () {  
        progress.value = 1;
    };
    xhr.upload.onerror = function () {  
        progress.value = 0;
        alert("error");
    };
    xhr.send(forms);
})