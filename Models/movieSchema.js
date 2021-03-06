/*
 *
 * Database Schema setup for movie data
 *
*/

const { Int32 } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    movieImageName: {
        type: String,
        required: true
    },
    movieFileName:{
      type: String,
      required: true
    },
    rating: {
        type: String,
        required: true
    },
    runtime: {
        type: Number,
        required: true
    },
    category: {
        type: Array,
        required: true
    },
    viewCount: {
        type: Number,
        default: 0,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    movieViewerReview: [{
        user: String,
        amtOfStars: Number,
        reviewText: String,
        dateOfReview: Date,
        recommend: Boolean
    }],
    movieViewerComment: [{
        user: String,
        commentText: String
    }],
}, {timestamps: true});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
