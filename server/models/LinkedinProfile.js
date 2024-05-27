const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: String,
    author: String,
    date: Date
});

const postSchema = new mongoose.Schema({
    postLink: String,
    comments: [commentSchema],
    datePosted: Date,
    postText:String,
    likes:Number,
    shares:Number
});

const profileSchema = new mongoose.Schema({
    profileName: String,
    posts: [postSchema]
});

const LinkedinProfile = mongoose.model('LinkedinProfile', profileSchema);

module.exports = LinkedinProfile;
