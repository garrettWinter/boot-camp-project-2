const router = require('express').Router();
const { Customer, LineItem, Product, Order, SavedCart } = require('../../models');
let cart;
let ordertotal = 0;
let userId;
let createdOrder;


//submits all prodcuts in saved cart to an order.
router.post('/createorder', async (req, res) => {
  userId = req.session.customer_id;
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
   
    for (let i = 0; i < cart.length; i++) {
      ordertotal += parseFloat(cart[i].Product.product_price);
    };

    const newOrder = await Order.create({
      customer_id: userId,
      order_total: ordertotal,
    })
    .then(function (response) {
      console.log(response);
      createdOrder = response.dataValues.order_id;
    });

    // Create the records in the line item table
    for (let i = 0; i < cart.length; i++) {
      let newLineItem = await LineItem.create({
        order_id: createdOrder,
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

  } catch (err) {
    console.log(err);
    res.status(500).json(err);

  }
}
)

module.exports = router;