const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchemaSensores = new Schema({
    task: {},
    identificador: {
        type: String,
        required: true
    },
    dir_ip: {
        type: String
        
    },
    dir_mac: {
        type: String
        
    },
      
    tipo: {
        type: String,
        required: true
    },
    subtipo: {
        type: String,
        required: true
    },
      date: {
        type: Date,
        default: Date.now()
    },
    habilitado: {
        type: Boolean,
        
    },
    medicion: {
        type: Number,
        required: true
    }
   
});

module.exports = mongoose.model('postSensor', postSchemaSensores, 'sensores');