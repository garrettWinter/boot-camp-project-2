const router = require('express').Router();
const { Customer, LineItem, Product, Order } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbProductData = await Product.findAll({
      limit: 10,
    });
    const homepage = dbProductData.map((product) =>
      product.get({ plain: true })
    );

    console.log(homepage);
    res.render('homepage', {
      homepage,
      logged_in: req.session.logged_in,
    });
  

  } catch (err) {
    res.status(500).json(err);
  }
}
)

module.exports = router;