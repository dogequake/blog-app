const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
});
//timestamps не нужен в отличии от post.js т.к. мы не будем создавать новые контакты

const Contact = mongoose.model('Contact' , contactSchema);
//('ИМЯМОДЕЛИ', ИМЯСХЕМЫ)

module.exports = Contact;//экспортируем модель