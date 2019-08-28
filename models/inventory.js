module.exports = function(sequelize, DataTypes) {
  var Inventory = sequelize.define("Inventory", {
    category: {
      type: DataTypes.ENUM(),
      values: ["Drink", "Food", "Product"]
    },
    description: DataTypes.TEXT,
    largePrice: DataTypes.DECIMAL(10, 2),
    mediumPrice: DataTypes.DECIMAL(10, 2),
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    smallPrice: DataTypes.DECIMAL(10, 2),
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
