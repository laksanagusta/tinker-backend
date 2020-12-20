const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const reviewSchema = mongoose.Schema({
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
    },
    {
      timestamps: true,
})

const likeSchema = mongoose.Schema({
    name: { type: String, required: true},
    memberId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Member',
    },
})

const productSchema = new Schema({
    title: {
        type : String,
        required : true
    },
    price : {
        type: Number,
        required: true,
    },
    brand : {
        type: String,
        required: true,
    },
    description: {
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
    like: [likeSchema],
    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0,
    },
    numLikes: {
        type: Number,
        required: true,
        default: 0,
    },
    categoryId : {
        type: ObjectId,
        ref: 'Category'
    },
    imageId: [{
        type: ObjectId,
        ref: 'Image'
    }],
    featureId: [{
        type: ObjectId,
        ref: 'Feature'
    }],
    descriptionId: [{
        type: ObjectId,
        ref: 'Description'
    }]
});

module.exports = mongoose.model('Product', productSchema)