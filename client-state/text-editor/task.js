let textArea = document.getElementById('editor');
if(localStorage.text) {
    textArea.value = localStorage.text;
}
textArea.addEventListener('input', function(){
    localStorage.text = textArea.value;
})