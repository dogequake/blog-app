const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
}, { timestamps: true});
//timestamps это data которая будет присваиваться посту

const Post = mongoose.model('Post' , postSchema);
//('ИМЯМОДЕЛИ', ИМЯСХЕМЫ)

module.exports = Post;//экспортируем модель