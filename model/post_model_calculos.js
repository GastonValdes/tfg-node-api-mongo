const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchemaCalculos = new Schema({
    token : {
        type: String,
    },
    identificador: {
        type: String,
    },
    descripcion: {
        type: String,
    },
    valor: {
        type: String,
    },
    habilitado: {
        type: Boolean,
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
    medicion: {
        type: Number
    },                
    actividad: {
        type: String
    },
    operacion: {
        type: String,
    }
//

    
    
});

 module.exports = mongoose.model('postCalculos', postSchemaCalculos, 'calculos');