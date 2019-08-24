module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    username: DataTypes.STRING,
    administrator: DataTypes.BOOLEAN
  });
  User.associate = function(models) {
    User.hasMany(models.Checkout, {
      onDelete: "CASCADE"
    });
  };
  return User;
};
