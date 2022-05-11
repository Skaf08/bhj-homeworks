let load = document.getElementById("loader");
let item = document.querySelector(".item");
let xhr = new XMLHttpRequest();
xhr.open("GET",'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.addEventListener("readystatechange", work);
function work(e) {
    e.preventDefault();
    if(xhr.readyState === xhr.DONE) {
        let data1 = JSON.parse(xhr.responseText);
        
    }
}