let progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let forms = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.upload.addEventListener("progress", function(e) {
        progress.value = (e.loaded/e.total);
    });
    xhr.send(forms);
})