const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchemaUmbrales = new Schema({
    token : {
        type: String,
        required: true
    },

    identificador: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    habilitado: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

 module.exports = mongoose.model('postUmbral', postSchemaUmbrales, 'umbrales');