const router = require('express').Router();
const { Customer, LineItem, Product, Order } = require('../models');

router.get('/search/:term', async (req, res) => {
  searchValue = ("'%"+req.params.term+"%'");  
  try {
    const dbSearchData = await Product.findAll({
      where: {
        product_name: {
          [Op.like]: searchValue
        }
      },
    });

    const results = dbSearchData.map((results) =>
      results.get({ plain: true })
    );

    res.render('category', {
      results,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
}
)

module.exports = router;