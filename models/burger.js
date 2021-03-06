// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

console.log("In burger.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(result) {
      cb(result);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(cols, vals, cb) {
    orm.delete("burgers", cols, vals, function(res) {
      cb(res);
    });
  }
};

console.log("Burger in Burger JS " + burger);
// Export the database functions for the controller (catsController.js).
module.exports = burger;