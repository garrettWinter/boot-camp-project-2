const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {
}

Product.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_price: {
        type: DataTypes.DECIMAL,
        allowNull: false, 
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    product_image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    product_genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    product_rating: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    product_short_description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    product_long_description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    product_release_year: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Product',
  },
);

module.exports = Product;