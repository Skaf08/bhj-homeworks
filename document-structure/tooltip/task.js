let link = Array.from(document.getElementsByClassName("has-tooltip"));
function visible(event) {
    event.preventDefault();
    let size = event.target.getBoundingClientRect();
    let check = 0;
    let elements = document.getElementsByClassName("tooltip");
    console.log(event.target.title);
    for(let j=0;j<elements.length;j++){
        if(event.target.title === elements[j].textContent){
            check = 1;
        }
    }
    if(check == 0) {
        let tooltip = `<div class ="tooltip">${event.target.title}</div>`;
        event.target.insertAdjacentHTML("afterEnd", tooltip);
    }
    let element = event.target.nextSibling;
    console.log(event.target.nextSibling);
    element.classList.toggle("tooltip_active");
    element.style.cssText = `left: ${size.x}px; top:`;
}
for(let i=0;i<link.length;i++) {
    link[i].addEventListener("click", visible);
}
