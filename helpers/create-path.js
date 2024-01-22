const path = require('path');

const createPath = (page) => path.resolve(__dirname, '../views', `${page}.ejs`);
//создаем путь по которому пойдет наша страница

module.exports = createPath;