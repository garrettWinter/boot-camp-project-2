const router = require('express').Router();
const { Customer, LineItem, Product, Order } = require('../models');

router.get('/', async (req, res) => {

  if (typeof localStorage === 'undefined' || localStorage === null) {
    const LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

  console.log('Checking Local Storage')
  console.log(localStorage.getItem('cart'))

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