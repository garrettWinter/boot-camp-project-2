const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model {
}

Order.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    order_total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Order',
  },
);

module.exports = Order;