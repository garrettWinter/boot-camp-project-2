const router = require('express').Router();
const { Customer, LineItem, Product, Order, SavedCart } = require('../../models');
let cart;
let ordertotal = 0;
let userId;

/*
Make API call to create order
    API Call
        DONE -- Should then find line items from 'SavedCart' for that user and join these against 'Product' Table
          sum of line item to get the order total
          create order in table
          Create line item table
        Should then delete records from the SavedCart Table
        Should then redirect the customer to the Account Summary Page with onscreen messagin thanking for order
*/


router.post('/createorder', async (req, res) => {
  userId = req.session.customer_id
  console.log("In submitorder controller");
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
    cart = dbSavedCartData.map((cartLineItems) =>
      cartLineItems.get({ plain: true })
    );
    console.log(cart);

    // Summing the order total of the line items in cart
    for (let i = 0; i < cart.length; i++) {
      ordertotal += cart[i].line_price;
    }

    // Create the order in the order table ----- Need to figure out how to get a res out of this, so can pass the created OID 
    const newOrder = await Order.create({
      customer_ID: userId,
      order_total: ordertotal,
    });

    // Create the records in the line item table
    for (let i = 0; i < cart.length; i++) {
      let newLineItem = await Order.create({
        order_id: XXX, //THIS NEEDS TO BE PICKED UP 
        product_id: cart[i].product_id,
        line_qty: cart[i].line_qty,
        line_price: cart[i].line_price,
      });
    }

    /// Forloop via the size of the cart array to delete lines out of savedCart table.

    // Should then redirect the customer to the Account Summary Page with onscreen messagin thanking for order

  } catch (err) {
    res.status(500).json(err);

  }
}
)




module.exports = router;