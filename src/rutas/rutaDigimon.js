const router = require('express').Router();
const digimonControlador = require('../controladores/controladoresDigimon')

router.get('/digi/traer',digimonControlador.traerDigimons)

router.get('/digi/traer/:nombre',digimonControlador.traerDigi)

router.post('/digi/agregar',digimonControlador.agregarDigimons)

router.put('/digi/editar/:codigo',digimonControlador.editarDigimons)

router.delete('/digi/eliminar/:codigo',digimonControlador.eliminarDigimons)

module.exports = router;