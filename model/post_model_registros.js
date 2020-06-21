 const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchemaRegistros = new Schema({
    identificador: {
        type: String,
        required: true
    },
    actividad: {
        type: String,
        required: true
    },
    actuador: {
        type: String
    },
    sensor: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('postRegistro', postSchemaRegistros, 'registros');