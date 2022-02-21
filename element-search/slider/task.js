sliders = document.getElementsByClassName("slider__item");
arrowPrev = document.getElementsByClassName("slider__arrow_prev")[0];
arrowNext = document.getElementsByClassName("slider__arrow_next")[0];
let k = 0;
arrowPrev.onclick = function() {
    sliders[k].classList.remove("slider__item_active");
    k--;
    if (k<0) {
        k=sliders.length-1;
    }
    sliders[k].classList.add("slider__item_active");
}

arrowNext.onclick = function() {
    sliders[k].classList.remove("slider__item_active");
    k++;
    if (k==sliders.length) {
        k=0;
    }
    sliders[k].classList.add("slider__item_active");
}
