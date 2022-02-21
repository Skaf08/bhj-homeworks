let menuItem = document.querySelectorAll(".menu__link");
for(let i = 0;i<menuItem.length;i++){
    let menuSub = menuItem[i].parentElement.querySelector(".menu_sub");
    menuItem[i].onclick = function() {
        if(menuSub){
            if(menuSub.matches(".menu_active")) {
                menuSub.classList.remove("menu_active");
            } else {
                menuSub.classList.add("menu_active");
            }
            return false;
        }
    }
}


