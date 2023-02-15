const Customer = require('./Customer');
const Product = require('./Product');
const LineItem = require('./LineItem');
const Order = require('./Order');
const SavedCart = require('./SavedCart');

// Customer.hasMany(Order, {
//     foreignKey: 'customer_id',
// });
// Order.belongsTo(Customer, {
//     foreignKey: 'customer_id',
// });




// Order.hasMany(LineItem, {
//     foreignKey: 'order_id',
// });

// LineItem.belongsToMany(Order, {
//     through: 'order_id', 
// });



// Product.hasOne(LineItem, {
//     foreignKey: 'product_id',
// });

// LineItem.belongsToMany(Product, {
//     through: 'product_id',
// });


// SavedCart.hasMany(Product, {
//     foreignKey: 'product_id',
// });


// Product.belongsToMany(SavedCart, {
//     through: 'product_id',
// });


// SavedCart.hasOne(Customer, {
//     foreignKey: 'customer_id',
// });

// Customer.belongsTo(SavedCart, {
//     through: 'customer_id',
// });

//////////////////////////////////////////

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