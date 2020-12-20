const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const socialMediaSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    code: {
        type : String,
        required : true
    },
    link: {
        type : String,
        required : true
    },
    imageUrl: {
        type : String,
        required : true
    },
});

module.exports = mongoose.model('SocialMedia', socialMediaSchema)