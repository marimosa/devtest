var _items = require("../data/items");
module.exports = function(app) {

  app.get("/api/items", function(req, res) {
    res.status(200).send(_items);
  });

};
