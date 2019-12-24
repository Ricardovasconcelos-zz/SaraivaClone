const Order = require('../models/Order')


module.exports = {

    async destroy(req, res){

        const { _id } = req.body

        const BookId = await Order.findByIdAndDelete(_id)

        return res.json(BookId)
    }

}
