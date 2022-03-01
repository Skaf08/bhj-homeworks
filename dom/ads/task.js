let rotator = document.getElementsByClassName("rotator__case");
let i=0;
setInterval(function change() {
    i++;
    if (i==(rotator.length)) {
        rotator[i-1].classList.remove("rotator__case_active");
        i=0;
        rotator[i].classList.add("rotator__case_active");
    } else {
        rotator[i-1].classList.remove("rotator__case_active");
        rotator[i].classList.add("rotator__case_active");
    }
},1000);
