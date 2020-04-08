const express = require('express');
const app = express();

app.use(express.json());


const rutasEjemplo = require('./rutas/rutas');
const rutasAvengers = require('./rutas/rutaAvengers');
const rutasDigimon = require('./rutas/rutaDigimon');
app.use("/api", rutasDigimon);
app.listen(8080, () => { console.log("Hola") });