module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    email: DataTypes.STRING,
    administrator: DataTypes.BOOLEAN
  });
  User.associate = function(models) {
    User.hasMany(models.Checkout, {
      onDelete: "CASCADE"
    });
  };
  return User;
};
