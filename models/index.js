// Controls the different assosiations between tables.
const Customer = require('./Customer');
const Product = require('./Product');
const LineItem = require('./LineItem');
const Order = require('./Order');
const SavedCart = require('./SavedCart');

Product.belongsToMany(Customer,{
    through: SavedCart, foreignKey: 'product_id',
});

Customer.belongsToMany(SavedCart,{
    through: SavedCart, foreignKey: 'customer_id',
})

Product.hasMany(SavedCart, {
    foreignKey: 'product_id',
});

SavedCart.belongsTo(Product, {
    foreignKey: 'product_id',
})

module.exports = { Customer, LineItem, Product, Order, SavedCart }