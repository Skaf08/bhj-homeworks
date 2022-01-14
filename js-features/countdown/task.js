let timer = document.getElementById("timer"); 
let stock = timer.textContent;

function check(s) {
    let t = '00:00:';
    if (s >= 3600){ 
        if (Math.floor(s/3600) < 10) {
            t = '0' + Math.floor(s/3600) + ':';
        } else t = Math.floor(s/3600) + ':';
        s = s - Math.floor(s/3600) * 3600;
    } else t = '00:'
    if (s >= 60) {  
        if (Math.floor(s/60) < 10) {
            t = t + '0' + Math.floor(s/60) + ':';
        } else t = t + Math.floor(s/60) + ':';
        s = s - Math.floor(s/60) * 60;
    } else t = t + '00:';
    if (s<10){
        t=t + '0' + s;
    } else t = t + s;
    return t;
}

function print(timer){
    let timerId = setInterval(function() {
        if (stock == 0) {
            alert("Вы победили в конкурсе");
            clearInterval(timerId);
        }
        timer.textContent = check(stock);
        stock--;
      }, 1000);
};
print(timer);