let tab = Array.from(document.getElementsByClassName("tab"));
let content = Array.from(document.getElementsByClassName("tab__content"));
for(let i=0;i<tab.length;i++) {
    tab[i].addEventListener("click",change);
}

function change(e) {
    e.preventDefault();
    for(let i=0;i<tab.length;i++) {
        if(tab[i].classList.contains("tab_active")) {
            tab[i].classList.remove("tab_active");
            content[i].classList.remove("tab__content_active");
        }
    }
    this.classList.add("tab_active");
    content[tab.indexOf(this)].classList.add("tab__content_active");
}
    