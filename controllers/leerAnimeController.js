const { leerArchivoAnimeJsonController } = require('./leerArchivoAnimeJsonController');

const leerAnimeController = async (req, res) => {
    try {
        const archivoAnimes = await leerArchivoAnimeJsonController();
        const objetoAnimes = JSON.parse(archivoAnimes);

        const animes = Object.values(objetoAnimes);
        
        res.status(200).json(animes);
    } catch (error) {
        console.error(`Error al leer los animes: ${error}`);
        res.status(500).json({
            error: 'Ocurrió un error al obtener los animes.',
        });
    }
};

module.exports = leerAnimeController;
