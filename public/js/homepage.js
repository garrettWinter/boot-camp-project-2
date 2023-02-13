console.log("homepage.js is connected");

// const addToCart = require('../../utils/addToCart')

let clickedProduct;

const addToCartBtns = document.querySelectorAll('.addToCartBtn');

function addToCart(product_id, qty) {
    console.log("Inside addToCard Function"); 
    newproduct = {
        product_id: product_id,
        qty: qty
    }
    console.log("newProduct following");
    console.log(newproduct);
    cart = [];
    if (localStorage.cart != undefined) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }
    console.log("cart pre push");
    cart.push(newproduct);
    console.log("cart post push");
    console.log("cart");
    localStorage.setItem("cart", JSON.stringify(cart));
}


addToCartBtns.forEach(function(addToCartBtn) {
    addToCartBtn.addEventListener("click", function(event) {
        clickedProduct = event.target.getAttribute('data-productID');
        console.log(clickedProduct);
        addToCart(clickedProduct, 1);
    });
});