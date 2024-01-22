const express = require('express'); //добавляем express
const morgan = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const postRoutes = require('./routes/post-routes');
const postApiRoutes = require('./routes/api-post-routes');
const contactRoutes = require('./routes/contact-routes');
const createPath = require('./helpers/create-path');

const app = express(); //инициализируем его

app.set('view engine', 'ejs'); //подключение ejs

const PORT = 3000; //задаем порт нашего приложения
//путь к базе данных mongodb
const MONGODB_URI = "mongodb+srv://nikita:Blocked123@cluster0.ucms0yw.mongodb.net/node-blog?retryWrites=true&w=majority"

mongoose
    .connect(MONGODB_URI)
    .then((res) => console.log('Connected to db'))
    .catch((error) => console.log(error));

app.listen(PORT, 'localhost', (error) => {
    //включаем наше приложение
    error ? console.log(error) : console.log(`listening port ${PORT}`);
    //для ловли ошибок через console.log будем их выводить
});

//должен определятся в самом начале после сервера, но до роутов
//пример использования Middleware
app.use(express.static('styles'));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => { //переход на index
    const title = 'Home';
    res
    .status(200)
    .render(createPath('index'), {title})
});

app.use(postRoutes)//подключение постов
app.use(contactRoutes)//подключение контактов
app.use(postApiRoutes)//подключение Api постов

app.use((req, res) => { //в самый низ чтобы не вызывался
    const title = 'Error Page';
    res
        .status(404) //ставим статускод для крутости
        .render(createPath('error'), { title });
});
