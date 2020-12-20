const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const descriptionSchema = new Schema({
    title: {
        type : String,
        required : true
    },
    description: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    productId: {
        type: ObjectId,
        ref: 'Product'
    },
    imageUrl: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Description', descriptionSchema)