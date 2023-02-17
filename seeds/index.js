//Controls the seeded data.
const sequelize = require('../config/connection');

const Product = require('../models/Product');
const Customer = require('../models/Customer');
const Order = require('../models/Order');
const LineItem = require('../models/LineItem');
const SavedCart = require('../models/SavedCart');

const productData = require('./data/productSeeds.json');
const customerData = require('./data/customerSeeds.json');
const orderData = require('./data/orderSeeds.json');
const lineItemData = require('./data/lineItemSeeds.json');
const savedCartData = require('./data/savedCartDataSeeds.json');

//Creates data for all tables.
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Product.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });

  await Customer.bulkCreate(customerData, {
    individualHooks: true,
    returning: true,
  });

  await Order.bulkCreate(orderData, {
    individualHooks: true,
    returning: true,
  });

  await LineItem.bulkCreate(lineItemData, {
    individualHooks: true,
    returning: true,
  });

  await SavedCart.bulkCreate(savedCartData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

// Starts seed database function.
seedDatabase();