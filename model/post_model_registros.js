 const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchemaRegistros = new Schema({
    identificador: {
        type: String,
        
    },
    actividad: {
        type: String
        
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
    },
    dir_ip: {
        type: String        
    },
    dir_mac: {
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
    medicion: {
        type: Number
    }
});

module.exports = mongoose.model('postRegistro', postSchemaRegistros, 'registros');