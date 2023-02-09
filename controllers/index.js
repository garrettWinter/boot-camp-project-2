const router = require('express').Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./htmlRoutes');
const homepageRoutes= require('./homepageRoutes');

router.use('/api', apiRoutes);
router.use('/html', htmlRoutes);
router.use('/', homepageRoutes);

module.exports = router;
