const router = require('express').Router();
const { Customer, LineItem, Product, Order } = require('../../models');

router.get('/', async (req, res) => {
    try {
    
    } catch (err) {
        res.status(500).json(err);
      }
}
)

module.exports = router;