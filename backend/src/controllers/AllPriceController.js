const Order = require("../models/Order");

module.exports = {
  async index(req, res) {
    const price = await Order.aggregate([
      {
        $group: {
          _id: null,
          sum: { $sum: "$price" }
        }
      }
    ]);

    return res.json(price);
  }
};
