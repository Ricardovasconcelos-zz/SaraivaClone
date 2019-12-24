const Order = require("../models/Order");

module.exports = {
  async destroy(req, res) {
    const Books = await Order.deleteMany();

    return res.json(Books);
  }
};
