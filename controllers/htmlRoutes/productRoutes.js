const router = require('express').Router();
const { Customer, LineItem, Product, Order } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const dbProductData = await Product.findAll({});

    const homepage = dbProductData.map((product) =>
      product.get({ plain: true })
    );

    res.render('product', {
      // logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
}
)

module.exports = router;