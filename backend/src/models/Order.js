const { Schema, model } = require("mongoose");

const OrderSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  qtd: Number
});

module.exports = model("Order", OrderSchema);
