const router = require('express').Router();
const accountRoutes = require('./account');
const savedCartRoutes = require('./savedCart');

router.use('/account', accountRoutes);
router.use('/savedCart', savedCartRoutes);

module.exports = router;
