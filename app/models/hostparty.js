const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    customerId: { 
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
                },
    name: { type: String, required: true },
    coupon: { type: String, default: 'No coupon applied'},
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)