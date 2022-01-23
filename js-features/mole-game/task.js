function getHole(index) {
    return document.getElementById(`hole${index}`);
}

let l = document.getElementById('lost');
let d = document.getElementById('dead');

for (let i=1;i<10;i++) {
    let hole = getHole(i);
    hole.onclick = function() {
        if(hole.className.includes("hole_has-mole")){
            d.textContent++;
        } else l.textContent++;
        if(d.textContent == 10) {
            alert("You are winner");
            d.textContent = 0;
            l.textContent = 0;
        }
        if(l.textContent == 5) {
            alert("You are looser");
            d.textContent = 0;
            l.textContent = 0;
        }
    }
}