let modal = document.getElementById("subscribe-modal");
const modal_close = document.getElementsByClassName("modal__close");
if(document.cookie != "closed") {
    modal.classList.add("modal_active");
}
modal_close[0].addEventListener("click", function() {   
    modal.classList.remove("modal_active");
    document.cookie = "closed";    
})