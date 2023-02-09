const router = require('express').Router();
// const homepageRoutes= require('../homepageRoutes');
const productRoutes = require('./productRoutes');
const cartRoutes = require('./cartRoutes');
const accountRoutes = require('./accountRoutes');

// router.use('/homepage', homepageRoutes);
router.use('/products', productRoutes);
router.use('/cart', cartRoutes);
router.use('/account', accountRoutes);

module.exports = router;