const express = require('express');
const router = express.Router();
const Company = require('./../models/Company');
const InstagramProfile=require('../models/InstagramProfile');
const LinkedinProfile=require('../models/LinkedinProfile');
const TwitterProfile=require('../models/TwitterProfile');

const puppeteer = require('puppeteer');
const axios = require('axios');
const cheerio = require('cheerio');
const { jwtAuthMiddleware, generateToken } = require('./../jwt');



router.post('/signup', async (req, res) => {
    try {
        const data = req.body;
        const newCompany = new Company(data);
        const response = await newCompany.save();
        console.log('Data saved');
        const payload = {
            id: response.id,
            username: response.username
        };
        const token = generateToken(payload);
        console.log("Token is:", token);
        res.status(200).json({ response: response, token: token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { name, password } = req.body;
        const user = await Company.findOne({ name: name });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: "Invalid username or password" });
        }
        const payload = {
            id: user.id,
            username: user.name
        };
        const token = generateToken(payload);
        res.json({ token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});



router.post('/fetch-instagram-posts', async (req, res) => {
    const username = req.body.username;
    const postOptions = {
        method: 'GET',
        url: `https://instagram-scraper-2022.p.rapidapi.com/ig/posts_username/`,
        params: { user: username },
        headers: {
            'X-RapidAPI-Key': '36d772bd08msh12b66f7448202dap1affeejsn99c0586f3836',
            'X-RapidAPI-Host': 'instagram-scraper-2022.p.rapidapi.com'
        }
    };

    try {
        const postResponse = await axios.request(postOptions);
        const posts = postResponse.data.data.xdt_api__v1__feed__user_timeline_graphql_connection.edges.map(edge => ({
            shortcode: edge.node.code,
            comments: [],
            postText:edge.node.caption.text,
            datePosted: new Date(edge.node.caption.created_at * 1000),
            likes: edge.node.like_count

        }));

        const instagramProfileDocument  = new InstagramProfile({
            profileName: username, 
            posts: []
        });

        for (const post of posts) {
            const comments = await fetchAndStoreComments(post.shortcode);
            post.comments = comments;
            instagramProfileDocument.posts.push(post);
          
        }

        await instagramProfileDocument.save();
        res.status(200).json({ message: 'Profile, posts, and comments fetched and stored successfully!' });
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        res.status(500).json({ message: 'Failed to fetch posts', error: error.message });
    }
});

async function fetchAndStoreComments(shortcode) {
    const options = {
        method: 'GET',
        url: `https://instagram-scraper-20231.p.rapidapi.com/postcomments/${shortcode}/%7Bend_cursor%7D/%7Bscraperid%7D`,
        headers: {
          'X-RapidAPI-Key': 'ccadf28cfcmshbd7373e9ad2ae73p1b8622jsn3a51425bb43e',
          'X-RapidAPI-Host': 'instagram-scraper-20231.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        
        if (!response.data || response.data.status !== 'success' || !response.data.data.comments) {
            console.error("API did not return successful status or lacks comment data.");
            return [];
        }

        const comments = response.data.data.comments.map(comment => {
            return {
                text: comment.text,
                author: comment.user.username, 
                date: new Date(comment.created_at * 1000),
                likes: comment.comment_like_count
                
            };
        });

        return comments;
    } catch (error) {
        console.error('Error fetching comments:', error);
        return [];
    }
}
router.post('/fetch-linkedin-posts', async (req, res) => {
    const username = req.body.username;
    const postOptions = {
        method: 'POST',
        url: 'https://linkedin-data-scraper.p.rapidapi.com/company_updates',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'e58299936amsh7bada2bffa89b10p153a38jsn637736b9ac15',
            'X-RapidAPI-Host': 'linkedin-data-scraper.p.rapidapi.com'
        },
        data: {
            company_url: `http://www.linkedin.com/company/${username}`,
            posts: 12,
            comments: 15,
            reposts: 10
        }
    };

    try {
        const postResponse = await axios.request(postOptions);
        const LinkedinProfileDocument = new LinkedinProfile({
            profileName: username,
            posts: []
        });

        for (const edge of postResponse.data.response) {
            const post = {
                postLink: edge.postLink,
                datePosted: edge.postedAt,
                postText: edge.postText,
                likes: edge.socialCount.numLikes,
                shares: edge.socialCount.numShares,
                comments: []
            };

            if (edge.comments && edge.comments.length > 0) {
                post.comments = edge.comments.map(comment => {
                    return {
                        text: comment.text,
                        author: comment.commenter.title,
                        date:new Date(Number(comment.timestamp) * 1000)
                    };
                });
            }

            LinkedinProfileDocument.posts.push(post);
        }

        await LinkedinProfileDocument.save();
        res.status(200).json({ message: 'Profile, posts, and comments fetched and stored successfully!' });
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        res.status(500).json({ message: 'Failed to fetch posts', error: error.message });
    }
});
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchAllTweets(username) {
    let tweets = [];
    const baseUrl = 'https://twitter154.p.rapidapi.com/user/tweets';
    
    const initialOptions = {
        method: 'GET',
        url: baseUrl,
        params: { username, limit: '40', include_replies: 'false', include_pinned: 'false' },
        headers: {
            'X-RapidAPI-Key': 'ccadf28cfcmshbd7373e9ad2ae73p1b8622jsn3a51425bb43e', 
            'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
        }
    };

    try {
        let response = await axios.request(initialOptions);
        tweets = response.data.results.map(tweet => ({
            tweetText: tweet.text,
            datePosted: tweet.creation_date,
            likes: tweet.favorite_count || 0,
            reposts: tweet.retweet_count || 0,
            views: tweet.views || 0,
        }));

        const continuationToken = response.data.continuation_token;
        if (continuationToken) {
            await delay(1000); 
            const continuationOptions = {
                method: 'GET',
                url: `${baseUrl}/continuation`,
                params: { continuation_token: continuationToken, username, limit: '40', include_replies: 'false' },
                headers: {
                    'X-RapidAPI-Key': 'ccadf28cfcmshbd7373e9ad2ae73p1b8622jsn3a51425bb43e', 
                    'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
                }
            };

            response = await axios.request(continuationOptions);
            const moreTweets = response.data.results.map(tweet => ({
                tweetText: tweet.text,
                datePosted: tweet.creation_date,
                likes: tweet.favorite_count || 0,
                reposts: tweet.retweet_count || 0,
                views: tweet.views || 0,
            }));
            tweets = tweets.concat(moreTweets);
        }
    } catch (error) {
        console.error('Error fetching tweets:', error);
        throw error;
    }

    return tweets;
}

router.post('/fetch-twitter-posts', async (req, res) => {
    const username = req.body.username;

    try {
        const tweets = await fetchAllTweets(username);
        const TwitterProfileDocument = new TwitterProfile({
            profileName: username,
            tweets: tweets
        });

        await TwitterProfileDocument.save();
        res.status(200).json({ message: 'Profile and all tweets fetched and stored successfully!' });
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        res.status(500).json({ message: 'Failed to fetch posts', error: error.message });
    }
});
module.exports = router;
