const mongoose = require('mongoose');



const tweetSchema = new mongoose.Schema({
    tweetText:String,
    datePosted: Date,
    likes:Number,
    reposts: String,
    views: String,

});

const profileSchema = new mongoose.Schema({
    profileName: String,
    tweets: [tweetSchema]
});

const TwitterProfile = mongoose.model('TwitterProfile', profileSchema);

module.exports = TwitterProfile;
