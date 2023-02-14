const router = require('express').Router();
const { Customer, LineItem, Product, Order, SavedCart } = require('../../models');

/*
Make API call to create order
    API Call
        Should then find line items from 'SavedCart' for that user and join these against 'Product' Table
        Should use this data to then create entry in the Orders table and Line Item Table
        Should then delete records from the SavedCart Table
        Should then redirect the customer to the Account Summary Page with onscreen messagin thanking for order
*/


router.get('/', async (req, res) => {
    console.log("In cart route");
    console.log(req.session.logged_in); //THis will return session
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
      console.log(cart.Products)

      
     } catch (err) {
      res.status(500).json(err);
    
    }
  }
  )




module.exports = router;