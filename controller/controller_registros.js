 const Registro = require('../model/post_model_registros');

exports.addRegistro = (req, res, next) => {
  const postRegistro = new Registro({
    identificador: req.body.identificador,
    actividad: req.body.actividad,
    actuador: req.body.actuador,
    sensor: req.body.sensor
    });
  postRegistro
    .save()
    .then(() => {
      // console.log(req.body.title);
      res.send('Registro agregado con éxito');
      console.log('Registro agregado con éxito');
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

exports.showARegistros = (req, res, next) => {
  Registro.find()
    .then(result => {
      res.send(result);
      console.log(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.showSingleRegistro = (req, res, next) => {
  Registro.findById(req.params.id)
    .then(result => {
      res.send(result);
      console.log(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.updateRegistro = (req, res, next) => {
  Registro.findById(req.body.id).then(result => {
    result.identificador = req.body.identificador,
    result.actividad = req.body.actividad,
    result.actuador = req.body.actuador,
    result.sensor = req.body.sensor;
    return result.save();
  }).then(postRegistro => {
    res.send('Registro actualizado con éxito');
    console.log('Registro actualizado con éxito');
  }).catch(err => res.status(400).send(err));
};

exports.deleteRegistro = (req, res, next) => {
  Registro.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send('Registro eliminado');
      console.log('Registro eliminado');
    }).catch(err => res.status(400).send(err));
};
