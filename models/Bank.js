const mongoose = require("mongoose");
const { Schema } = mongoose;

const bankSchema = new Schema({
    nameBank: {
        type : String,
        required : true
    },
    accountNumber: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Bank', bankSchema)