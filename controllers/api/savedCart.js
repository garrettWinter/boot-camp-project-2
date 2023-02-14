const router = require('express').Router();
const session = require('express-session');
const { SavedCart } = require('../../models');

router.post('/newLineItem', async (req, res) => {
    console.log(req.body)
try {
   const dbSavedLine = await SavedCart.create({
    customer_id: req.session.customer_id,
    product_id: req.body.product_id,
    qty: req.body.qty,
   });

} catch (error) {
    console.log(error)
    res.status(500).json(error);
}
});





module.exports = router;