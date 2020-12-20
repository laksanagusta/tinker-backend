const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const bookingSchema = new Schema({
    startDate: {
        type : Date,
        required : true
    },
    endDate : {
        type: Date,
        required: true,
    },
    service: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "OUTSTANDING"
    },
    paymentLink: {
        type: String,
        default: ""
    },
    paymentMethod: {
        type: String,
        required: true,
        default: "PAYPAL"
    },
    paymentDate : {
        type: Date,
        required: false,
        default: ""
    },
    paymentEmail : {
        type: String,
        required: false,
        default: ""
    },
    productId: [{
        _id: {
            type: ObjectId,
            ref: 'Product',
            required: true
        },
        title : {
            type: String,
            required: true
        },
        price : {
            type: Number,
            required: true
        }
    }],
    memberId: {
        type: ObjectId,
        ref: 'Member'
    },
});

module.exports = mongoose.model('Booking', bookingSchema)