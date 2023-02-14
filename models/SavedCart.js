const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SavedCart extends Model {
}

SavedCart.init(
    {
        saved_cart_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model: 'Customer',
            //     key: 'customer_id',
            // },
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model: 'Product',
            //     key: 'product_id',
            // },
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'SavedCart',
    },
);

module.exports = SavedCart;