const router = require('express').Router();
const session = require('express-session');
const { Customer } = require('../../models');

// CREATE new user
router.post('/signup', async (req, res) => {
  console.log(req.body);
  try {
    const dbCustomerData = await Customer.create({
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.customer_id = dbCustomerData.customer_id;
      req.session.logged_in = true;
      res.status(200).json(dbCustomerData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



//Login
router.post('/login', async (req, res) => {
  try {
    const CustomerData = await Customer.findOne({ where: { email: req.body.email } });
    console.log(req.body);

    if (!CustomerData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again --email' });
      return;
    }

    const validPassword = await CustomerData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again --password' });
      return;
    }

    req.session.save(() => {

      req.session.customer_id = CustomerData.customer_id;
      req.session.logged_in = true;
      res.json({ Customer: CustomerData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;