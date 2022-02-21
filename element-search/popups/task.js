let popup = document.getElementById('modal_main');
let success = document.getElementById('modal_success');

setTimeout(()=> {
    popup.classList.add('modal_active');
    popupOn();
},10); 

function popupOn() {
    let active = document.querySelector('.modal_active');
    let button = active.querySelector('.btn');
    active.querySelector('.modal__close').onclick = closePopup;
    if (button.matches('.show-success')) {
        button.onclick = buttonActive; 
    } else if (button.matches('.btn_success')) {
        button.onclick = closePopup;
    }
}

function buttonActive() {
    popup.classList.remove('modal_active');
    success.classList.add('modal_active');
    popupOn();
}

function closePopup() {
    this.closest('div.modal').classList.remove('modal_active');
}