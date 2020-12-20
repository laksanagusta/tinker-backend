const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const shippingAddressSchema = new Schema({
    address: {
        type : String,
        required : true
    },
    postalCode : {
        type: Number,
        required: true,
    },
    city : {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true
    },
    memberId : {
        type: ObjectId,
        ref: 'Member'
    },
});

module.exports = mongoose.model('ShippingAddress', shippingAddressSchema)