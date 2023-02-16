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

router.get('/genre', async (req, res) => {
  try {
    const dbProductData = await Product.findAll({
      
    });
    const homepage = dbProductData.map((product) =>
      product.get({ plain: true })
    );

/*
push the product_genre into a sperate array
remove commas, spaces and then remove duplicates
sort the array with Array.prototype.sort()
update the render with the new array
*/

    console.log(homepage);
    res.render('genre', {
      layout:'main',
      homepage,
      logged_in: req.session.logged_in,
    });
  

  } catch (err) {
    res.status(500).json(err);
  }
}
)


module.exports = router;

