const fs = require('fs/promises');
const { leerArchivoAnimeJsonController } = require('./leerArchivoAnimeJsonController');

const borrarAnimeController = async (req, res) => {
    const { id } = req.params;

    try {
        const archivoAnimes = await leerArchivoAnimeJsonController();
        const objetoAnimes = JSON.parse(archivoAnimes);

        if (objetoAnimes[id]) {
            delete objetoAnimes[id];

            await fs.writeFile('./datos/anime.json', JSON.stringify(objetoAnimes, null, 2));

            res.status(200).json({
                mensaje: `El anime con id ${id} ha sido eliminado exitosamente.`,
            });
        } else {
            res.status(404).json({
                error: `No se encontró un anime con id ${id}.`,
            });
        }
    } catch (error) {
        console.error(`Error al eliminar el anime con id ${id}: ${error}`);
        res.status(500).json({
            error: 'Ocurrió un error al eliminar el anime.',
        });
    }
};

module.exports = borrarAnimeController;
