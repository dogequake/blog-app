const express = require('express');
const { 
    getPost, 
    deletePost, 
    getEditPost, 
    putPost, 
    getPosts, 
    postAddPost, 
    getAddPost
} = require('../controllers/post-controller')

const router = express.Router()

router.get('/posts/:id', getPost);
router.delete('/posts/:id', deletePost);
router.get('/edit/:id', getEditPost);
router.put('/edit/:id', putPost);
router.get('/posts', getPosts);
router.post('/add-post', postAddPost)
router.get('/add-post', getAddPost);

module.exports = router;