const router = require('express').Router();
const accountRoutes = require('./account');

router.use('/account', accountRoutes);

module.exports = router;
