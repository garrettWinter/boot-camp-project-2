const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
 
class Customer extends Model {


  checkPassword(CustomerPassword) {
    console.log('inside checkPassword');
    return bcrypt.compareSync(CustomerPassword, this.password);
    // return this.password; // Will use non-encryped passwords
  }
}

Customer.init(
  {
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      references: {
        model: 'Order',
        key: 'customer_id',
      },
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newPassword) => {
        newPassword.password = await bcrypt.hash(newPassword.password, 10);
        console.log(newPassword);
        return newPassword;
      },
      beforeUpdate: async (updatedPassword) => {
        updatedPassword.password = await bcrypt.hash(updatedPassword.password, 10);
        console.log(updatedPassword);
        return updatedPassword;
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Customer',
    indexes: [
      { unique: true, fields: ["user_name"]},
      { unique: true, fields: ["email"]}
    ]
  },
);

module.exports = Customer;