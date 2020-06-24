const express = require('express'); //incluyo express para manejar el app server
const mongoose = require('mongoose'); //incluyo mongoose como driver de conexión a MongoDB
const app = express(); //declaro la aplicacion como express
const mongodb = process.env.MONGODB; //aca declaro que voy a usar una variable de entorno
const postRoutes = require('./routes/api_route'); //incluyo este archivo para declarar el ruteo endpoints
const Pusher = require('pusher'); //incluyo la librería pusher
const channel1 = 'sensores'; 
const channel2 = 'actuadores'; 
const channel3 = 'umbrales';
const channel4 = 'registros';

// En el siguiente bloque armo el objeto para suscribir al canal de pusher
const pusher = new Pusher({
    appId: '1020587',
    key: '9456bc135d545fdf5c87',
    secret: '5f76128ca417469ca320',
    cluster: 'mt1',
    encrypted: true
  });



// Declaro la seguridad con Cors  
var cors = require('cors');
app.use(cors()) ;
app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.use('/', postRoutes);

//Declaro la respuesta en el enpoint default
app.get('/', (req, res, next) => {
    res.send('API REST Desarrollada por Gastón Valdés para el Trabajo Final de Graduación de Licenciatura en Informatica (2020) - Esta API cumple la funcion de mediar entre el Front y la base Mongo que persiste la informacion del sistema');
});


//Configuro el driver de conexión a la base de datos
mongoose.connect(mongodb); 
const db = mongoose.connection;  
db.on('error', console.error.bind(console, 'Connection Error:'));

//Abro la conexión
db.once('open', () => {
});

//Inicio la aplicacion y la dejo escuchando en el puerto 3010
db.once('open', () => {
  app.listen(3010, () => {
    console.log('REST API iniciada en Puerto 3010');
  });


//Declaro la coleccion Sensores y los eventos a monitorear
  const taskCollection = db.collection('sensores');
  const changeStream = taskCollection.watch();

  changeStream.on('change', (change) => {
console.log(change);

if(change.operationType === 'insert') {
      const task = change.fullDocument;
      pusher.trigger(
        channel1,
        'inserted', 
        {
          id: task._id,
          task: task.task,
        }
      ); 
    } else if(change.operationType === 'delete') {
      pusher.trigger(
        channel1,
        'deleted', 
        change.documentKey._id
      );
    }
    else if(change.operationType === 'update') {
      pusher.trigger(
        channel1,
        'updated', 
        change.documentKey._id
      );
    }
  })
  
//Declaro la coleccion Actuadores y los eventos a monitorear
  const taskCollection2 = db.collection('actuadores');
  const changeStream2 = taskCollection2.watch();

  changeStream2.on('change', (change) => {
console.log(change);

if(change.operationType === 'insert') {
      const task = change.fullDocument;
      pusher.trigger(
        channel2,
        'inserted', 
        {
          id: task._id,
          task: task.task,
        }
      ); 
    } else if(change.operationType === 'delete') {
      pusher.trigger(
        channel1,
        'deleted', 
        change.documentKey._id
      );
    }
    else if(change.operationType === 'update') {
      pusher.trigger(
        channel2,
        'updated', 
        change.documentKey._id
      );
    }
  })

//Declaro la coleccion Umbrales y los eventos a monitorear
  const taskCollection3 = db.collection('umbrales');
  const changeStream3 = taskCollection3.watch();

  changeStream3.on('change', (change) => {
console.log(change);

if(change.operationType === 'insert') {
      const task = change.fullDocument;
      pusher.trigger(
        channel3,
        'inserted', 
        {
          id: task._id,
          task: task.task,
        }
      ); 
    } else if(change.operationType === 'delete') {
      pusher.trigger(
        channel3,
        'deleted', 
        change.documentKey._id
      );
    }
    else if(change.operationType === 'update') {
      pusher.trigger(
        channel3,
        'updated', 
        change.documentKey._id
      );
    }
  })



//Declaro la coleccion Registros y los eventos a monitorear
  const taskCollection4 = db.collection('registros');
  const changeStream4 = taskCollection3.watch();

  changeStream4.on('change', (change) => {
console.log(change);

if(change.operationType === 'insert') {
      const task = change.fullDocument;
      pusher.trigger(
        channel4,
        'inserted', 
        {
          id: task._id,
          task: task.task,
        }
      ); 
    } else if(change.operationType === 'delete') {
      pusher.trigger(
        channel4,
        'deleted', 
        change.documentKey._id
      );
    }
    else if(change.operationType === 'update') {
      pusher.trigger(
        channel4,
        'updated', 
        change.documentKey._id
      );
    }
  })



});