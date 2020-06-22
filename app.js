const express = require('express');
const mongoose = require('mongoose');
const app = express();
const mongodb = process.env.MONGODB; //aca declaro que voy a usar una variable de entorno
const postRoutes = require('./routes/api_route');
const Pusher = require('pusher');
const channel = 'sensores'; 

// En el siguiente blowue armo el objeto para suscribir al canal de pusher
const pusher = new Pusher({
    appId: '1020587',
    key: '9456bc135d545fdf5c87',
    secret: '5f76128ca417469ca320',
    cluster: 'mt1',
    encrypted: true
  });



  
var cors = require('cors');
app.use(cors()) ;
app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.use('/', postRoutes);


app.get('/', (req, res, next) => {
    res.send('API REST Desarrollada por Gastón Valdés para el Trabajo Final de Graduación de Licenciatura en Informatica (2020) - Esta API cumple la funcion de mediar entre el Front y la base Mongo que persiste la informacion del sistema');
});
mongoose.connect(mongodb);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));

db.once('open', () => {

});

db.once('open', () => {
  app.listen(3010, () => {
    console.log('REST API iniciada en Puerto 3010');
  });

  const taskCollection = db.collection('sensores');
  const changeStream = taskCollection.watch();

  changeStream.on('change', (change) => {
console.log(change);

if(change.operationType === 'insert') {
      const task = change.fullDocument;
      pusher.trigger(
        channel,
        'inserted', 
        {
          id: task._id,
          task: task.task,
        }
      ); 
    } else if(change.operationType === 'delete') {
      pusher.trigger(
        channel,
        'deleted', 
        change.documentKey._id
      );
    }
    else if(change.operationType === 'update') {
      pusher.trigger(
        channel,
        'updated', 
        change.documentKey._id
      );
    }
  })
  
});