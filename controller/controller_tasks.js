const Task = require('../model/post_model_tasks');

exports.addTask = (req, res, next) => {
    const postTask = new Task({
  task: req.body.task,
  //    ip_add: req.body.ip_add
  identificador: req.body.identificador,
  dir_ip: req.body.dir_ip,
  dir_mac: req.body.dir_mac,
  tipo: req.body.tipo,
  subtipo: req.body.subtipo,
  habilitado: req.body.habilitado,
  medicion: req.body.medicion

    });
  postTask
    .save()
    .then(() => {
      // console.log(req.body.title);
      res.send('Tarea agregada con éxito');
      console.log('tarea agregada con exito');
    })
    .catch(err => {
      res.status(400).send(err);
    });
};
