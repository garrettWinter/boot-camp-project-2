const router = require('express').Router();
const { Customer, LineItem, Product, Order, SavedCart } = require('../../models');
let cart;
let ordertotal = 0;
let userId;
let createdOrder;

/*
Make API call to create order
    API Call
        DONE -- Should then find line items from 'SavedCart' for that user and join these against 'Product' Table
        DONE -- sum of line item to get the order total
        DONE -- create order in table
        DONE -- Create line item table
        Should then delete records from the SavedCart Table
        Should then redirect the customer to the Account Summary Page with onscreen messagin thanking for order
*/


router.post('/createorder', async (req, res) => {
  console.log("In submitOrder controller");
  // console.log(req.session.logged_in); //THis will return session
  userId = req.session.customer_id;
  // console.log("about to console log the userId");
  // console.log(userId);
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
    // console.log(cart[0].Product.product_price);




    // Summing the order total of the line items in cart
    for (let i = 0; i < cart.length; i++) {
      // ordertotal += Number[cart[i].Product.product_price];
      ordertotal += parseFloat(cart[i].Product.product_price);
    };
    console.log("about to parse the summed orderTotal");
    console.log(ordertotal);

    

    // Create the order in the order table ----- Need to figure out how to get a res out of this, so can pass the created OID 
      console.log(userId);
    const newOrder = await Order.create({
      customer_id: userId,
      order_total: ordertotal,
    })
    .then(function (response) {
      console.log(response);
      createdOrder = response.dataValues.order_id;
    });
console.log("about to log the createdOrder")
console.log(createdOrder);


    // Create the records in the line item table
    for (let i = 0; i < cart.length; i++) {
      let newLineItem = await LineItem.create({
        order_id: createdOrder, //THIS NEEDS TO BE PICKED UP 
        product_id: cart[i].Product.product_id,
        line_qty: cart[i].qty,
        line_price: cart[i].Product.product_price,
      });
    }

    
    // Delete the records in the SavedCart
      let deleteSavedCarts = await SavedCart.destroy({
        where: {
          customer_id: req.session.customer_id,
        },
      });



    // Should then redirect the customer to the Account Summary Page with onscreen messagin thanking for order





  } catch (err) {
    console.log(err);
    res.status(500).json(err);

  }
}
)

module.exports = router;