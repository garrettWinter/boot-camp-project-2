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
      },
      product_id: {
        type: DataTypes.INTEGER,
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