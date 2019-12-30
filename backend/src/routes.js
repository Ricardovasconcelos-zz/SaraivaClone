const express = require("express");
const routes = express.Router();
const OrderController = require("./controllers/OrderController");
const AllPriceController = require("./controllers/AllPriceController");
const CleanDatabase = require("./controllers/CleanDatabase");

routes.post("/order", OrderController.store);
routes.get("/order", OrderController.index);
routes.delete("/order/delete", OrderController.destroy);

routes.get("/order/allprice", AllPriceController.index);

routes.delete("/Clean", CleanDatabase.destroy);

module.exports = routes;
