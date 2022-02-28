let dropdown = document.getElementsByClassName("dropdown__value");
console.log(dropdown);
let menu = document.getElementsByClassName("dropdown__list");
let items = Array.from(document.getElementsByClassName("dropdown__link"));
dropdown[0].addEventListener('click',function(){menu[0].classList.add("dropdown__list_active")});
for(let i=0;i<items.length;i++){
    items[i].addEventListener('click', change); 
}   
 
function change(e) {
    e.preventDefault();
    dropdown[0].textContent = this.textContent;
    menu[0].classList.remove("dropdown__list_active");
}