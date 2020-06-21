 const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchemaActuadores = new Schema({
    dir_ip: {
    type: String,
    required: true
    },
    dir_mac: {
        type: String,
        required: true
        },
        
    identificador: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    subtipo: {
        type: String,
        required: true
    },
    habilitado: {
        type: Boolean,
        required: true
    },
    operacion: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('postActuador', postSchemaActuadores, 'actuadores');