let font = document.getElementsByClassName("font-size");
let book = document.getElementsByClassName("book");
for(let i=0;i<font.length;i++) {
    font[i].addEventListener("click",change);
}

function change(e) {
    e.preventDefault();
    for(let i=0;i<font.length;i++){
        if(font[i].classList.contains("font-size_active")){
            font[i].classList.remove("font-size_active");
        }
    }
    this.classList.add("font-size_active");
    if(this.classList.contains("font-size_small")) {
        book[0].classList.add("book_fs-small");
        book[0].classList.remove("book_fs-big");
    } else if(this.classList.contains("font-size_big")) {
        book[0].classList.add("book_fs-big");
        book[0].classList.remove("book_fs-small");
    } else{ 
        book[0].classList.remove("book_fs-big");
        book[0].classList.remove("book_fs-small");
    }       
}