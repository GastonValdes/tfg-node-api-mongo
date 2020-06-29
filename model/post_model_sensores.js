const mongoose = require('mongoose');
const { text } = require('express');
const Schema = mongoose.Schema;


const postSchemaSensores = new Schema({
    identificador: {
        type: String       
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
      date: {
        type: Date,
        default: Date.now()
    },
    habilitado: {
        type: Boolean        
    },
    medicion: {
        type: Number
    },
    actividad: {
        type: String
    }
   
});

module.exports = mongoose.model('postSensor', postSchemaSensores, 'sensores');