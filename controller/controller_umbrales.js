const Umbral = require('../model/post_model_umbrales');

exports.addUmbral = (req, res, next) => {
  const postUmbral = new Umbral({
    token: req.body.token,
    identificador: req.body.identificador,
    descripcion: req.body.descripcion,
    valor: req.body.valor,
    habilitado: req.body.habilitado
    });
  postUmbral
    .save()
    .then(() => {
      // console.log(req.body.title);
      res.send('umbral agregado con éxito');
      console.log('umbral agregado con éxito');
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

exports.showUmbrales = (req, res, next) => {
  Umbral.find()
    .then(result => {
      res.send(result);
      console.log(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.showSingleUmbral = (req, res, next) => {
  Umbral.findById(req.params.id)
    .then(result => {
      res.send(result);
      console.log(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.updateUmbral = (req, res, next) => {
  Umbral.findById(req.body.id).then(result => {
    result.token = req.body.token,
    result.identificador = req.body.identificador,
    result.descripcion = req.body.descripcion,
    result.valor = req.body.valor,
    result.habilitado = req.body.habilitado;
    return result.save();
  }).then(postUmbral => {
    res.send('umbral actualizado con éxito');
    console.log('umbral actualizado con éxito');
  }).catch(err => res.status(400).send(err));
};

exports.deleteUmbral = (req, res, next) => {
  Umbral.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send('umbral eliminado');
      console.log('umbral eliminado');
    }).catch(err => res.status(400).send(err));
};
