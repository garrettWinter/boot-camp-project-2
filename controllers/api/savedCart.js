const router = require('express').Router();
const session = require('express-session');
const { SavedCart } = require('../../models');

router.post('/newLineItem', async (req, res) => {
    console.log(req.session);
    console.log(req.body);
    
try {
   const dbSavedLine = await SavedCart.create({
    customer_id: req.session.customer_id,
    product_id: req.body.savedData.product_id,
    qty: req.body.savedData.qty,
   });

} catch (error) {
    console.log(error)
    res.status(500).json(error);
}
});





module.exports = router;