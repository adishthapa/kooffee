var db = require("../models");

module.exports = function(app) {
  // Inventory Routes
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

  // User Routes
  app.get("/api/user/:email", function(req, res) {
    db.User.findOne({
      where: {
        email: req.params.email
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  app.post("/api/user", function(req, res) {
    console.log(req.body);
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      administrator: req.body.administrator
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Checkout Routes
  app.get("/api/checkout/:userId", function(req, res) {
    db.Checkout.findAll({
      where: {
        UserId: req.params.userId
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  app.post("/api/checkout", function(req, res) {
    console.log(req.body);
    db.Checkout.create({
      itemName: req.body.itemName,
      quantity: req.body.quantity,
      total: req.body.total,
      UserId: req.body.UserId
    }).then(function(dbInventory) {
      res.json(dbInventory);
    });
  });
};
