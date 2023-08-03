const express = require('express');
const animeController = require('../controllers/animeController');
const crearAnimeController = require('../controllers/crearAnimeController');
const actualizarAnimeController = require('../controllers/actualizarAnimeController');
const borrarAnimeController = require('../controllers/borrarAnimeController');
const leerAnimeController = require('../controllers/leerAnimeController');

const router = express.Router();

// Rutas para obtener y crear animes
router.get('/anime', leerAnimeController);
router.post('/anime', crearAnimeController);

// Rutas para actualizar y eliminar animes
router.put('/anime/:id', actualizarAnimeController);
router.delete('/anime/:id', borrarAnimeController);

module.exports = router;
