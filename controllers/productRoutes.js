const router = require('express').Router();
const { Customer, LineItem, Product, Order } = require('../models');

//Gets specific data on product by id.
router.get('/:id', async (req, res) => {
  try {
    const dbProductData = await Product.findByPk(req.params.id);

    const productDetail = [dbProductData.get({ plain: true })];

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