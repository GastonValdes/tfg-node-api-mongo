const mongoose = require('mongoose');
const { text } = require('express');
const Schema = mongoose.Schema;

// Comento esta parte para probar el envio de una tarea
/*
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
*/

const postSchemaSensores = new Schema({
    task: {
        type : String        
    },
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
    }
   
});

module.exports = mongoose.model('postSensor', postSchemaSensores, 'sensores');