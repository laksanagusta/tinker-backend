const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;
const bycrypt = require("bcryptjs");

const userSchema = new Schema({
    name: {
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
    username: {
        type : String,
        required : true
    },
    password: {
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
    educationId : [{
        type: ObjectId,
        ref: 'Education'
    }],
    experienceId : [{
        type: ObjectId,
        ref: 'Experience'
    }]  
});

userSchema.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')){
        user.password = await bycrypt.hash(user.password, 8);
    }
})

module.exports = mongoose.model('Users', userSchema)