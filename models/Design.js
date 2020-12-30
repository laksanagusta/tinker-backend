const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const toolsSchema = mongoose.Schema({
    name: { type: String, required: true},
    icon: { type: String, required: true}
})

const designSchema = new Schema({
    title: {
        type : String,
        required : true
    },
    tag : {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    moreDescription: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    duration : {
        type: String,
        required: true
    },
    tools : [toolsSchema]
});

module.exports = mongoose.model('Design', designSchema)