 const Actuador = require('../model/post_model_actuadores');

exports.addActuador = (req, res, next) => {
  const postActuador = new Actuador({
    identificador: req.body.identificador,
    dir_ip: req.body.dir_ip,
    dir_mac: req.body.dir_mac,
    tipo: req.body.tipo,
    subtipo: req.body.subtipo,
    habilitado: req.body.habilitado,
    operacion: req.body.operacion
    });
  postActuador
    .save()
    .then(() => {
      // console.log(req.body.title);
      res.send('Estado de actuador registrado con éxito');
      console.log('Estado de actuador registrado con éxito');
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

exports.showActuadores = (req, res, next) => {
  Actuador.find()
    .then(result => {
      res.send(result);
      console.log(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.showSingleActuador = (req, res, next) => {
  Actuador.findById(req.params.id)
    .then(result => {
      res.send(result);
      console.log(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.updateActuador = (req, res, next) => {
  Actuador.findById(req.body.id).then(result => {
  result.identificador = req.body.identificador,
  result.dir_ip = req.body.dir_ip,
  result.dir_mac = req.body.dir_mac,  
  result.tipo = req.body.tipo,
    result.subtipo = req.body.subtipo,
    result.habilitado = req.body.habilitado,
    result.operacion = req.body.operacion;
    return result.save();
  }).then(postActuador => {
    res.send('estado de actuador actualizado con éxito');
    console.log('estado de actuador actualizado con éxito');
  }).catch(err => res.status(400).send(err));
};

exports.deleteActuador = (req, res, next) => {
  Actuador.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send('actuador eliminado');
      console.log('actuador eliminado');
    }).catch(err => res.status(400).send(err));
};