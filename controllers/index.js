const router = require('express').Router();
const apiRoutes = require('./api');
const homepageRoutes= require('./homepageRoutes');
const productRoutes = require('./productRoutes');
const cartRoutes = require('./cartRoutes');
const accountRoutes = require('./accountRoutes');
const categoryRoutes = require('./categoryRoutes');

router.use('/api', apiRoutes);
router.use('/', homepageRoutes);
router.use('/product', productRoutes);
router.use('/cart', cartRoutes);
router.use('/account', accountRoutes);
router.use('/category', categoryRoutes);

module.exports = router;