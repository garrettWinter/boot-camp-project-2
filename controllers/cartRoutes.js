const router = require('express').Router();
const { Customer, LineItem, Product, Order } = require('../models');

router.get('/', async (req, res) => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const products = [];
  
  for (let i = 0; i < cart.length; i++) {
   products.push(cart[i].product_id);
   console.log(products);
  }

  try {
    const dbProductData = await Product.findAll({});
    const cart = dbProductData.map((product) =>
    product.get({ plain: true })
    );

    res.render('cart', {
      cart,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
}
)

module.exports = router;