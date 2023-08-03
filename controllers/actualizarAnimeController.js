const fs = require('fs/promises');
const { leerArchivoAnimeJsonController } = require('./leerArchivoAnimeJsonController');

const actualizarAnimeController = async (req, res) => {
    const { id } = req.params;
    const datosParaModificar = req.body;

    try {
        const archivoAnimes = await leerArchivoAnimeJsonController();
        const objetoAnimes = JSON.parse(archivoAnimes);

        if (objetoAnimes[id]) {
            objetoAnimes[id] = { ...objetoAnimes[id], ...datosParaModificar };

            await fs.writeFile('./datos/anime.json', JSON.stringify(objetoAnimes, null, 2));

            res.status(200).json({
                mensaje: `Los datos del anime con id ${id} han sido modificados exitosamente.`,
            });
        } else {
            res.status(404).json({
                error: `No se encontró un anime con id ${id}.`,
            });
        }
    } catch (error) {
        console.error(`Error al actualizar el anime con id ${id}: ${error}`);
        res.status(500).json({
            error: 'Ocurrió un error al actualizar el anime.',
        });
    }
};

module.exports = actualizarAnimeController;
