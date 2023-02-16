// Creates Order table which contains Customer's order id, customer id and order totals.
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
      references: {
        model: 'Line_Item',
        key: 'order_id',
      },
    },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Customer',
          key: 'customer_id',
        },
      },
    order_total: {
      type: DataTypes.DECIMAL(10,2),
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