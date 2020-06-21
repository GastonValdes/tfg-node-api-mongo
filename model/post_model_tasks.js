const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchemaTasks = new Schema({
    task: {

    },
    identificador: {
      
    },
    dir_ip: {
        
    },
    dir_mac: {
        
    },
      
    tipo: {
        
    },
    subtipo: {
        
    },
      date: {
        type: Date,
        default: Date.now()
    },
    habilitado: {
        
    },
    medicion: {
        
    }
    
});

 module.exports = mongoose.model('postTask', postSchemaTasks, 'Tasks');