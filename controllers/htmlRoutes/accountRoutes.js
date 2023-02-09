const router = require('express').Router();
const { Customer, LineItem, Product, Order } = require('../../models');

router.get('/account', async (req, res) => {
  try { 
  // const users = userData.map((project) => project.get({ plain: true }));

  res.render('account', {
    // users,
    // logged_in: req.session.logged_in,
  });

} catch (err) {
      res.status(500).json(err);
    }
}
)

module.exports = router;