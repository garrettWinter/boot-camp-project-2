const router = require('express').Router();
const session = require('express-session');
const { SavedCart } = require('../../models');
const withAuth = require('../../utils/auth');

//Add a product to the shopper's saved cart.
router.post('/newLineItem', withAuth, async (req, res) => {  
try {
   const dbSavedLine = await SavedCart.create({
    customer_id: req.session.customer_id,
    product_id: req.body.savedData.product_id,
    qty: req.body.savedData.qty,
   });

} catch (error) {
    res.status(500).json(error);
}
});

module.exports = router;