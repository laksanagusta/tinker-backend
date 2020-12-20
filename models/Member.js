const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const memberSchema = new Schema({
    fullName: {
        type : String,
        required : true
    },
    about: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    socialMediaId : [{
        type: ObjectId,
        ref: 'SocialMedia'
    }],
    experienceId : [{
        type: ObjectId,
        ref: 'Experience'
    }]
});

module.exports = mongoose.model('Member', memberSchema)