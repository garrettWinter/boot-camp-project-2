const sequelize = require('../config/connection');
const Product = require('../models/Product');
const productData = require('./data/productSeeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: false });

  await Product.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();