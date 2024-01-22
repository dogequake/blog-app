const Contact = require('../models/contact');
const createPath = require('../helpers/create-path');

const getContacts = (req, res) => {
    const title = 'Contacts';
    Contact
        .find()//ищем все значения
        .then((contacts) => res.render(createPath('contacts'), { contacts, title})) //переход на contacts
        .catch((error) => { //ловим ошибки
            console.log(error);
            //и редиректим на страницу ошибки
            res.render(createPath('error'), { title: 'Error' })
        });
};

module.exports = {
    getContacts
}