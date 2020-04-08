const router = require('express').Router();
const avengerControlador = require('../controladores/controladorAvengers')

router.get('/traer',avengerControlador.traerAvengers);
router.get('/traerId/:Id',avengerControlador.traerAvenger);
router.post('/agregar',avengerControlador.agregarAvengers);
router.put('/editar/:Id',avengerControlador.editarAvengers);
router.delete('/borrar/:Id',avengerControlador.eliminarAvengers);

module.exports = router;