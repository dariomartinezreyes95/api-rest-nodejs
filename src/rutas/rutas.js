const router = require('express').Router();
const {cachoVar,nombreVar} = require('../controladores/controlador')
router.get('/home', (req, res) => {
    var nombre = "Hola sadsdsad"
    console.log(nombre)
    res.status('200').send(nombre)
});

router.get('/casa',nombreVar)
router.get('/casas',cachoVar)
router.delete('/home', (req, res) => {
    var nombre = "Hola sadsdsad"
    console.log(nombre)
});

router.post('/home', (req, res) => {
    var nombre = "Hola xd"
    console.log(nombre)
});

module.exports = router;