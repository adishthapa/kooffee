module.exports = function(sequelize, DataTypes) {
  var Inventory = sequelize.define("Inventory", {
    category: {
      type: DataTypes.ENUM(),
      values: ["Drink", "Food", "Product"]
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    quantity: DataTypes.INTEGER,
    type: DataTypes.STRING
  });
  Inventory.associate = function(models) {
    Inventory.belongsTo(models.Checkout, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Inventory;
};
