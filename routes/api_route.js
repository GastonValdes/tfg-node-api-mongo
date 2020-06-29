const express = require('express');
const router = express.Router();
const controllerSensores = require('../controller/controller_sensores');
const controllerActuadores = require('../controller/controller_actuadores');
const controllerRegistros = require('../controller/controller_registros');
const controllerUmbrales = require('../controller/controller_umbrales');
const controllerCalculos = require('../controller/controller_calculos');


//endPoint Sensores
router.post('/sensores', controllerSensores.addSensor);
router.get('/sensores', controllerSensores.showSensores);
router.get('/sensores/:id', controllerSensores.showSingleSensor);
router.patch('/sensores', controllerSensores.updateSensor);
router.delete('/sensores/:id', controllerSensores.deleteSensor);
//endPoint umbrales
router.post('/umbrales', controllerUmbrales.addUmbral);
router.get('/umbrales', controllerUmbrales.showUmbrales);
router.get('/umbrales/:id', controllerUmbrales.showSingleUmbral);
router.patch('/umbrales', controllerUmbrales.updateUmbral);
router.delete('/umbrales/:id', controllerUmbrales.deleteUmbral);
//endPoint Actuadores
router.post('/actuadores', controllerActuadores.addActuador);
router.get('/actuadores', controllerActuadores.showActuadores);
router.get('/actuadores/:id', controllerActuadores.showSingleActuador);
router.patch('/actuadores', controllerActuadores.updateActuador);
router.delete('/actuadores/:id', controllerActuadores.deleteActuador);
//endPoint Registros
router.post('/registros', controllerRegistros.addRegistro);
router.get('/registros', controllerRegistros.showARegistros);
router.get('/registros/:id', controllerRegistros.showSingleRegistro);
router.patch('/registros', controllerRegistros.updateRegistro);
router.delete('/registros/:id', controllerRegistros.deleteRegistro);
//endPoint Calculos
router.get('/calculos', controllerCalculos.executeCalculos);


module.exports = router;