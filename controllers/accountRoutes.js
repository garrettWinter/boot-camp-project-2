const router = require('express').Router();
const { Customer, LineItem, Product, Order } = require('../models');

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

module.exports = router;