 const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchemaActuadores = new Schema({
    dir_ip: {
    type: String
    
    },
    dir_mac: {
        type: String
        },
        
    identificador: {
        type: String
        
    },
    tipo: {
        type: String
        
    },
    subtipo: {
        type: String
    },
    habilitado: {
        type: Boolean
    },
    operacion: {
        type: String
        },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('postActuador', postSchemaActuadores, 'actuadores');