const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const featureSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    iconName: {
        type: String,
        required: true
    },
    productId: {
        type: ObjectId,
        ref: 'Product'
    }
});

module.exports = mongoose.model('Feature', featureSchema)