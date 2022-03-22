let chat = document.getElementsByClassName("chat-widget");
let chatSide = document.getElementsByClassName("chat-widget__side");
let time = document.getElementsByClassName("message__time");
let messages = document.getElementsByClassName("chat-widget__messages");
let input= document.getElementsByClassName("chat-widget__input"); 
let realDate = null;
chatSide[0].addEventListener("click", function() {chat[0].classList.add("chat-widget_active")});
let chatMessages = [
    'Добрый день! На данный момент мы не находимся в ресурсном состоянии для продолжения общения',
    'Здравствуйте, мы ещё не проснулись и не собираемся',
    'Извините, мы были заняты -  целый день превращали кислород в углекислый газ.',
    'Если Ваше имя не начинается с буквы В и не заканчивается на ладимир, то не надо сюда писать',
    'Можете так не стараться, ведь я все равно вас не слушаю.', 
    'Спасибо за ваш вопрос! Мы уже передали его на рассмотрение',
    'Чего желаешь, старче?',
    'Хватит сюда писать, у нас нет средств для связи',
    'База торпедных катеров на проводе'
]

function getDate() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
     realDate = `${hours}:${minutes}`;
     for (let i=0; i < time.length; i++) {
        time[i].innerHTML = realDate;
    }
}

window.addEventListener("keydown", enter);
function enter(event) {
    if (input[0].value) {
        if(event.keyCode == 13) {   
            getDate();
            messages[0].innerHTML +=`
            <div class="message message_client">
                <div class="message__time">${realDate}</div>
                <div class="message__text">${input[0].value}</div>
            </div>
            `;
            input[0].value = '';
            messages[0].innerHTML += `
            <div class="message">
                <div class="message__time">${realDate}</div>
                <div class="message__text">${chatMessages[Math.floor(Math.random() * chatMessages.length)]}</div>
            </div>
            `;
        }
    }
}