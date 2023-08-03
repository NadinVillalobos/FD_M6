const fs = require('fs/promises');
const { generadorIdController } = require('./generadorIdController');
const { leerArchivoAnimeJsonController } = require('./leerArchivoAnimeJsonController');

const animeController = {
    async obtenerAnime(req, res) {
        try {
            const archivoAnimes = await leerArchivoAnimeJsonController();
            const objetoAnimes = JSON.parse(archivoAnimes);
            
            res.status(200).json(objetoAnimes);
        } catch (error) {
            console.error(`Error al obtener los animes: ${error}`);
            res.status(500).json({
                error: 'Ocurrió un error al obtener los animes.',
            });
        }
    },

    async agregarAnime(req, res) {
        const nuevoAnime = req.body;

        try {
            const archivoAnimes = await leerArchivoAnimeJsonController();
            const objetoAnimes = JSON.parse(archivoAnimes);
            
            const id = await generadorIdController.generarId();
            objetoAnimes[id] = nuevoAnime;

            await fs.writeFile('../datos/anime.json', JSON.stringify(objetoAnimes, null, 2));

            res.status(201).json({
                mensaje: 'El anime ha sido agregado exitosamente.',
            });
        } catch (error) {
            console.error(`Error al agregar un anime: ${error}`);
            res.status(500).json({
                error: 'Ocurrió un error al agregar el anime.',
            });
        }
    },
};

module.exports = animeController;
