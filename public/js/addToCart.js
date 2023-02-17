//console.log("addToCart.js is connected");
let clickedProduct;
const addToCartBtns = document.querySelectorAll('.addToCartBtn');

// Adds product data to cart when buy button clicked.
async function addToCart(product_id) {
    //console.log('Add to Cart triggered')
   const savedData = {
        product_id: product_id,
        qty: 1,
    }

    const response = await fetch('/api/savedCart/newLineItem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ savedData })
      });
}


addToCartBtns.forEach(function(addToCartBtn) {
    addToCartBtn.addEventListener("click", function(event) {
        clickedProduct = event.target.getAttribute('data-productID');
        addToCart(clickedProduct, 1);
    });
});