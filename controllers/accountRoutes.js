const router = require('express').Router();
const { Customer, LineItem, Product, Order } = require('../models');

// Gets all customer's data.
router.get('/', async (req, res) => {
  try {
    const dbAccountData = await Customer.findAll({
    
    });

    const account = dbAccountData.map((account) =>
      account.get({ plain: true })
    );

    res.render('account', {
      account,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
}
)
//Getting all of logged in customer's order data.
router.get('/orderhistory', async (req, res) => {
  try {
    const dbOrderData = await Order.findAll({
      where: {
        customer_id: req.session.customer_id,
      },
    });

    const order = dbOrderData.map((order) =>
      order.get({ plain: true })
    );

    res.render('account', {
      order,
      logged_in: req.session.logged_in,
    });

  } catch (error) {
    res.status(500).json(error);
  }
})

// Getting data of a single order by logged in customer.
router.get('/orderHistory/:id', async (req, res) => {
  try {
    const dbOrderDetail = await Order.findByPk(req.params.id);

    const orderDetail = dbOrderDetail.get({ plain: true });

    console.log(orderDetail);
    res.render('account', {
      orderDetail,
      logged_in: req.session.logged_in,
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
})

module.exports = router;