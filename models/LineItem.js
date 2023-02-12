const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class LineItem extends Model {
}

LineItem.init(
  {
    line_item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Order',
        key: 'order_id',
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'product_id',
      },
    },
    line_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    line_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    // NOT MVP
    // product_type: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Line_Item',
  },
);

module.exports = LineItem;