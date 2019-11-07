module.exports = function(sequelize, DataTypes) {
  var Checkout = sequelize.define("Checkout", {
    itemName: DataTypes.STRING,
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    total: DataTypes.DECIMAL(10, 2)
  });
  Checkout.associate = function(models) {
    Checkout.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Checkout;
};
