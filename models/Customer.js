const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Customer extends Model {


  checkPassword(CustomerPassword) {
    // return bcrypt.compareSync(userPassword, this.password);
    return this.password; // Will use non-encryped passwords
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
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Customer',
  },
);

module.exports = Customer;