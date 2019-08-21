module.exports = function(sequelize, DataTypes) {
  var Checkout = sequelize.define("Checkout", {
    quantity: DataTypes.INTEGER,
    total: DataTypes.DECIMAL(10, 2)
  });
  Checkout.associate = function(models) {
    Checkout.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Checkout.hasMany(models.Inventory, {});
  };
  return Checkout;
};
