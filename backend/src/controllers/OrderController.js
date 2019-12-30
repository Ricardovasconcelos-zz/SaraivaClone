const Order = require("../models/Order");
const axios = require("axios");

module.exports = {
  async index(req, res) {
    const books = await Order.find();

    return res.json(books);
  },

  async store(req, res) {
    const { bookId } = req.body;

    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${bookId}`
    );

    const { title } = response.data.volumeInfo;
    const { thumbnail } = response.data.volumeInfo.imageLinks;
    const { amount: price } = response.data.saleInfo.retailPrice;

    const BookExists = await Order.findOne({
      title
    });

    if (BookExists) {
      return res.json(BookExists);
    }

    const book = await Order.create({
      title,
      thumbnail,
      price,
      qtd: 1
    });

    return res.json(book);
  },

  async destroy(req, res) {
    const { id } = req.headers;

    const BookId = await Order.findByIdAndDelete(id);

    return res.json(BookId);
  }
};
