let products = document.getElementsByClassName("product");
let cart = document.querySelector(".cart__products");
for(let i = 0;i < products.length;i++) {
    let number = products[i].querySelector(".product__quantity-value");
    let plus = products[i].querySelector(".product__quantity-control_inc");
    let minus = products[i].querySelector(".product__quantity-control_dec");
    let cartAdd = products[i].querySelector(".product__add");
    let img = products[i].querySelector(".product__image");
    let src = img.src;
    plus.addEventListener("click", function(){
        number.textContent++;
    });
    minus.addEventListener("click", function(){
        if(number.textContent > 1){
            number.textContent--;
        }
    });
    cartAdd.addEventListener("click",add);
    function add(){
        let cartProduct = Array.from(document.getElementsByClassName("cart__product"));
        let check = cartProduct.find(element => element.dataset.id == i+1);
        if (typeof(check) == 'undefined'){
            let product = document.createElement('div');
            let cartImg = document.createElement('img');
            let ccount = document.createElement('div');
            product.className="cart__product";
            product.dataset.id = i+1;
            product.appendChild(cartImg);
            product.appendChild(ccount);
            cartImg.className = "cart__product-image";
            ccount.className = "cart__product-count";
            cartImg.src = src;
            ccount.textContent = number.textContent;
            cart.append(product);
        } else {
            cartNumber = Number(check.querySelector('.cart__product-count').textContent);
            let number1 = Number(number.textContent);
            check.querySelector('.cart__product-count').textContent = cartNumber + number1;
        }
    }
}

