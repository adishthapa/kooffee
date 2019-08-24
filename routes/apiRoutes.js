var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({
      where: { id: req.params.id }
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // POST route for saving a new item to the inventory
  app.post("/api/inventory", function(req, res) {
    console.log(req.body);
    db.Inventory.create({
      name: req.body.name,
      category: req.body.category,
      type: req.body.type,
      price: req.body.price,
      quantity: req.body.quantity
    }).then(function(dbInventory) {
      res.json(dbInventory);
    });
  });
};
