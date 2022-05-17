const title = document.getElementById("poll__title");
const answers = document.getElementById("poll__answers");
let xhr = new XMLHttpRequest();
xhr.open('GET','https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener("readystatechange", changePoll);
function changePoll(e) {
    e.preventDefault();
    if(xhr.readyState === xhr.DONE) {
        if(xhr.status == 200){
            let poll = JSON.parse(xhr.responseText);
            title.textContent = poll.data.title;
            for(let i=0;i<poll.data.answers.length;i++) {
                let button = document.createElement("button");
                button.className = "poll__answer";
                button.textContent = poll.data.answers[i];
                answers.appendChild(button);
            }
            let answer = answers.getElementsByClassName("poll__answer");
            for(let j=0;j<answer.length;j++) {
                answer[j].addEventListener("click", () =>{
                    alert("Спасибо, ваш голос засчитан!");
                });
            }
        } else {
            alert("error" + xhr.status);
        }
    }
}

