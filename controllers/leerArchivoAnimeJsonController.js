const fs = require('fs/promises');

const leerArchivoAnimeJsonController = async () => {
    try {
        const jsonAnime = await fs.readFile('./datos/anime.json', 'utf-8');
        return jsonAnime;
    } catch (error) {
        console.log(`No fue posible acceder al archivo anime.json: ${error}`);
        throw error;
    }
};

module.exports = { leerArchivoAnimeJsonController };
