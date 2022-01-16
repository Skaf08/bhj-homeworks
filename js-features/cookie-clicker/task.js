let cookies = document.getElementById("cookie");
let counter = document.getElementById("clicker__counter");
function count() {
    counter.textContent++;
    if(cookies.width == 200) {
        cookies.width = 225;
        cookies.height = 150;
    } else {
        cookies.width = 200;
        cookies.height = 127.925;        
    }
}
cookies.onclick = count; 

