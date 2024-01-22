const Post = require('../models/post');
const createPath = require('../helpers/create-path');

const handleError = (res, error) => {
    console.log(error); //ловим ошибки
    res.render(createPath('error'), { title: 'Error' }); //и редиректим на страницу ошибки
}

const getPost = (req, res) => {
    const title = 'Posts';
    Post
    .findById(req.params.id) //ищем по id берем из адресной строки браузера
    .then(post => res.render(createPath('post'), { post, title })) 
    .catch((error) => handleError(res, error));
};

const deletePost = (req, res) => {
    Post
    .findOneAndDelete(req.params.id)//ищем по id берем из адресной строки браузера
    .then(result => {
        res.status(200);
    })
    .catch((error) => handleError(res, error));
};

const getEditPost = (req, res) => {
    const title = 'Posts';
    Post
      .findById(req.params.id) //ищем по id берем из адресной строки браузера
      .then(post => res.render(createPath('edit-post'), { post, title }))
      .catch((error) => handleError(res, error));
};

const putPost = (req, res) => {
    const { title, author, text } = req.body;
    const { id } = req.params;
    Post
        .findByIdAndUpdate(id, { title, author, text })
        .then(result => res.redirect(`/posts/${id}`)) 
        .catch((error) => handleError(res, error));
};

const getPosts = (req, res) => {
    const title = 'Posts';
    Post
        .find()//ищем все значения
        .sort({ createdAt: -1 })
        .then((posts) => res.render(createPath('posts'), { posts, title})) //переход на contacts
        .catch((error) => handleError(res, error));
};

//метод post название addPost
const postAddPost = (req, res) => {
    const { title, author, text } = req.body;
    //используя модель Post собираем новый post 
    const post = new Post({ title, author, text });
    post
        .save()
        .then((result) => res.redirect('/posts'))
        .catch((error) => handleError(res, error));
};

const getAddPost = (req, res) => {
    const title = 'Add Post';
    res.render(createPath('add-post'), { title});
};

module.exports = {
    getPost, 
    deletePost,
    getEditPost,
    putPost,
    getPosts,
    postAddPost,
    getAddPost
}