const router = require('express').Router();
const { Customer, LineItem, Product, Order } = require('../models');

router.get('/:id', async (req, res) => {
  console.log(req.params);
  try {
    const dbProductData = await Product.findByPk(req.params.id);

    const productDetail = dbProductData.get({ plain: true });

    console.log(productDetail);
    res.render('product', {
      productDetail,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
)

module.exports = router;