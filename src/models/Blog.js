const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        minlength: 3
    },
    content:{
        type: String,
        required: true,
        minlength: 30
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

const Blog = new mongoose.model('blogs', BlogSchema)

module.exports = Blog