const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Blog = mongoose.model('blog', blogSchema);
module.exports = Blog;