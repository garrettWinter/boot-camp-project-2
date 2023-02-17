const router = require('express').Router();
const { Customer, LineItem, Product, Order } = require('../models');
const { Op } = require('sequelize');

//Search for specific genre with likeness
router.get('/:term', async (req, res) => {
  try {
    const dbCategoryData = await Product.findAll({
      where: {
        product_genre:  {
          [Op.like]: `%${req.params.term}%`
        }
      },
    });
    
    const results = dbCategoryData.map((results) =>
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

router.get('/', async (req, res) => {
  try {
    const dbProductData = await Product.findAll({});

    const homepage = dbProductData.map((product) =>
      product.get({ plain: true })
    );

    res.render('category', {
      homepage,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
}
)
module.exports = router;