const { leerArchivoAnimeJsonController } = require('./leerArchivoAnimeJsonController');

const generadorIdController = {
    async generarId() {
        try {
            const archivoAnimes = await leerArchivoAnimeJsonController();
            const objetoAnimes = JSON.parse(archivoAnimes);
            const idAnimes = Object.keys(objetoAnimes);

            if (idAnimes.length === 0) {
                return '1';
            } else {
                const nuevoId = (Math.max(...idAnimes.map(Number)) + 1).toString();
                return nuevoId;
            }
        } catch (error) {
            console.error(`Error al generar un nuevo ID: ${error}`);
            throw new Error('Ocurrió un error al generar un nuevo ID.');
        }
    },
};

module.exports = generadorIdController;
