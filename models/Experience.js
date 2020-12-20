const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const experienceSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    duration: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    userId: {
        type: ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Experience', experienceSchema)