const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb+srv://sa123:sa123@cluster0-vti8v.mongodb.net/test',
{useNewUrlParser:true, useUnifiedTopology: true })