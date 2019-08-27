var db = require("../models");

module.exports = function(app) {
  app.get("/api/inventory/drinks", function(req, res) {
    db.Inventory.findAll({
      where: {
        category: "Drink"
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/inventory/foods", function(req, res) {
    db.Inventory.findAll({
      where: {
        category: "Food"
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/inventory/products", function(req, res) {
    db.Inventory.findAll({
      where: {
        category: "Product"
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/inventory/:id", function(req, res) {
    db.Inventory.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  app.post("/api/inventory", function(req, res) {
    console.log(req.body);
    db.Inventory.create({
      name: req.body.name,
      category: req.body.category,
      type: req.body.type,
      description: req.body.description,
      smallPrice: req.body.smallPrice,
      mediumPrice: req.body.mediumPrice,
      largePrice: req.body.largePrice,
      quantity: req.body.quantity
    }).then(function(dbInventory) {
      res.json(dbInventory);
    });
  });

  app.post("/api/user", function(req, res) {
    console.log(req.body);
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
