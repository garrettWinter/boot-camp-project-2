const router = require('express').Router();
const accountRoutes = require('./account');
const savedCartRoutes = require('./savedCart');
const submitOrderRoutes = require('./submitOrder');

router.use('/account', accountRoutes);
router.use('/savedCart', savedCartRoutes);
router.use('/submitorder', submitOrderRoutes);

module.exports = router;