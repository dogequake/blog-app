const express = require('express');
const {
  getPosts,
  addPost,
  getPost, 
  deletePost,
  editPost,
} = require('../controllers/api-post-controller');

const router = express.Router();

//Получение всех постов
router.get('/api/posts', getPosts);
//Добавление нового поста
router.post('/api/post/', addPost);
//Получение поста по ID
router.get('/api/post/:id', getPost);
//Удаление поста по ID
router.delete('/api/post/:id', deletePost);
//Обновление поста по ID
router.put('/api/post/:id', editPost);

module.exports = router;