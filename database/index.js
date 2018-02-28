const Sequelize = require("sequelize");

const sequelize = new Sequelize("menus", "Joe", "", {
  host: "localhost",
  port: 5554,
  dialect: "postgres"
});

const RestaurantMenuItems = sequelize.define("RestaurantMenuItems", {
  restaurantId: Sequelize.INTEGER,
  menuCategoryName: Sequelize.TEXT,
  menuItemName: Sequelize.TEXT,
  menuItemDescription: Sequelize.TEXT,
  menuItemPrice: Sequelize.DECIMAL
});

let fetchRestaurantMenuItems = function(id, cb) {
   RestaurantMenuItems.findAll({
    restaurantId: id
  })
  .then(data => cb(data))
  .catch(err => err)
}

module.exports = {
  fetch: fetchRestaurantMenuItems
}