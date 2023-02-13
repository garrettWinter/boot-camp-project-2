function addToCart(productID, qty) {
    console.log("Inside addToCard Function"); 
    newproduct = {
        product_ID: productID,
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

module.exports = addToCart;