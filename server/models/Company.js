const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['service_based', 'product_based'],
        required: true
    },
    insta_link: {
        type: String,
        required: true,
        unique: true

    },
    linkedin_link: {
        type: String,
        required: true,
        unique: true

    },
    twitter_link: {
        type: String,
        required: true,
        unique: true

    },
    address: {
        type: String,
        required: true,
    },
   
    password: {
        type: String,
        required: true
    }
});
companySchema.pre('save', async function(next) {
    try {
        if (!this.isModified('password')) return next();

        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});


companySchema.methods.comparePassword = async function(candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
};
const Company = mongoose.model('Company', companySchema);
module.exports = Company;