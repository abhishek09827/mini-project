const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: String,
    author: String,
    date: Date,
    likes:Number
});

const postSchema = new mongoose.Schema({
    shortcode: String,
    comments: [commentSchema],
    postText:String,
    datePosted: Date,
    likes:Number
});

const profileSchema = new mongoose.Schema({
    profileName: String,
    posts: [postSchema]
});

const InstagramProfile = mongoose.model('InstagramProfile', profileSchema);

module.exports = InstagramProfile;
