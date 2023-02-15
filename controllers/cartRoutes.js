const router = require('express').Router();
const { Customer, LineItem, Product, Order, SavedCart } = require('../models');

router.get('/', async (req, res) => {
  console.log("In cart route");
  console.log(req.session.logged_in); //This will return session
  try {
    const dbSavedCartData = await SavedCart.findAll({
      include: [
        {
            model: Product,
        },
    ],
      where: {
        customer_id: req.session.customer_id, 
      },
    });
    const cart = dbSavedCartData.map((cartLineItems) =>
  cartLineItems.get({ plain: true })
    );
    console.log("about to log cart");
    console.log(cart); //This will log the cart object
    console.log("about to log Products");
    console.log(cart[0].Product)
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