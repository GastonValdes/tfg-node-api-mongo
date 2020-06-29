 const Sensor = require('../model/post_model_sensores'); //Importo el modelo de sensores


//CREACION DE NUEVOS DATOS DE SENSOR
exports.addSensor = (req, res, next) => {
  const postSensor = new Sensor({
    identificador: req.body.identificador,
    //dir_ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    dir_ip: req.body.dir_ip,
    dir_mac: req.body.dir_mac,
    tipo: req.body.tipo,
    subtipo: req.body.subtipo,
    habilitado: req.body.habilitado,
    medicion: req.body.medicion,
    actividad: req.body.actividad
    });
  postSensor
    .save()
    .then(() => {
      // console.log(req.body.title);
      res.send('Medición de Sensor agregada con éxito');
      console.log('Medición de Sensor agregada con éxito');
    })
    .catch(err => {
      res.status(400).send(err);
    });
   
};

exports.showSensores = (req, res, next) => {
  Sensor.find()
    .then(result => {
      res.send(result);
      console.log(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.showSingleSensor = (req, res, next) => {
  Sensor.findById(req.params.id)
    .then(result => {
      res.send(result);
      console.log(result);
    })
    .catch(err => res.status(400).send(err));
};
//ACTUALIZACION DATOS DE SENSOR
exports.updateSensor = (req, res, next) => {
  Sensor.findById(req.body.id).then(result => {
  result.identificador = req.body.identificador,
    result.dir_ip = req.body.dir_ip,
    result.dir_mac= req.body.dir_mac,
    result.tipo = req.body.tipo,
    result.subtipo = req.body.subtipo,
    result.habilitado = req.body.habilitado,
    result.medicion = req.body.medicion;
    return result.save();
  }).then(postSensor => {
    res.send('Medición de sensor actualizada con éxito');
    console.log('Medición de sensor actualizada con éxito');
  }).catch(err => res.status(400).send(err));
};

exports.deleteSensor = (req, res, next) => {
 Sensor.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send('Medición de sensor eliminada');
      console.log('Medición de sensor eliminada');
    }).catch(err => res.status(400).send(err));
};