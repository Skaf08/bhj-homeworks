let load = document.getElementById("loader");
let items = document.getElementById("items");
let xhr = new XMLHttpRequest();
xhr.open("GET",'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.addEventListener("readystatechange", work);
function work(e) {
    e.preventDefault();
    if(xhr.readyState === xhr.DONE) {
        const data1 = JSON.parse(xhr.responseText);
        let data = data1.response.Valute;
        for(let i in data) {
            let item = document.createElement("div")
            item.className = "item";
            let code = document.createElement("div");
            code.className = "item__code";
            code.textContent = data[i].CharCode;
            let value = document.createElement("div");
            value.className = "item__value";
            value.textContent = data[i].Value;
            let currency = document.createElement("div");
            currency.className = "item__currency";
            currency.textContent = data[i].Name;
            item.appendChild(code);
            item.appendChild(value);
            item.appendChild(currency);
            items.appendChild(item);
        }
    }
    load.classList.toggle("loader_active");
}