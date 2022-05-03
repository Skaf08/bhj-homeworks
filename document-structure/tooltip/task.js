let link = Array.from(document.getElementsByClassName("has-tooltip"));
function visible(event) {
    event.preventDefault();
    let tooltip = `<div class ="tooltip">${this.title}</div>`;
    this.insertAdjacentHTML("beforeEnd", tooltip);
    let element = this.querySelector(".tooltip");
    element.style = "position: absolute";
    element.classList.toggle("tooltip_active");
}
for(let i of link) {
    i.addEventListener("click", visible);
    i.style = "display:inline-block;";
}