const express = require("express");
const routes = express.Router();
const OrderController = require("./controllers/OrderController");
const RemoveOrderController = require("./controllers/RemoveOrderController");
const CleanDatabase = require("./controllers/CleanDatabase");

routes.post("/order", OrderController.store);
routes.get("/order", OrderController.index);
routes.delete("/orderRemove", RemoveOrderController.destroy);
routes.delete("/Clean", CleanDatabase.destroy);
module.exports = routes;
