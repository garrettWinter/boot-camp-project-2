const Customer = require('./Customer');
const Product = require('./Product');
const LineItem = require('./LineItem');
const Order = require('./Order');
const SavedCart = require('./SavedCart');

Customer.hasMany(Order, {
    foreignKey: 'customer_id',
});

Order.hasOne(Customer, {
    foreignKey: 'customer_id',
});

Order.hasMany(LineItem, {
    foreignKey: 'order_id',
});

LineItem.hasOne(Order, {
    foreignKey: 'order_id',
});

Product.hasOne(LineItem, {
    foreignKey: 'product_id',
});

LineItem.hasOne(Product, {
    foreignKey: 'product_id',
});

SavedCart.hasMany(Product, {
    foreignKey: 'product_id',
});

SavedCart.hasOne(Customer, {
    foreignKey: 'customer_id',
});

module.exports = { Customer, LineItem, Product, Order, SavedCart }