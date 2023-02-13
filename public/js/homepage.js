console.log("homepage.js is connected");

// const addToCart = require('../../utils/addToCart')


const addToCartBtn = document.querySelector('.addToCartBtn');



addToCartBtn.addEventListener("click", function() {
    addToCart(10, 1);
});