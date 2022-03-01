let reveal = document.getElementsByClassName("reveal");
document.addEventListener("scroll",visible);

function visible() {
    for(let i =0;i< reveal.length;i++){
        if((reveal[i].getBoundingClientRect().top > 0)||(reveal[i].getBoundingClientRect().bottom > 0)) {
            reveal[i].classList.add("reveal_active");
        } else reveal[i].classList.remove("reveal_active");
    }
}