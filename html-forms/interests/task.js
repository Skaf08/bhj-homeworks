let check = document.querySelectorAll('.interest__check');
for (let child of check) {
    child.addEventListener('click', point) 
    function point() {
        let parent = child.closest('.interest');
        let select = parent.querySelectorAll('.interest__check');
        if (child.checked === true) {
            for (let item of select) {
                item.checked = true;
            }
        } else if (child.checked === false) {
            for (let item of select) {
                item.checked = false;   
            }
        } 
    }
}