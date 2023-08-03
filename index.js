const express = require('express');
const animeRoutes = require('./routes/animeRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', animeRoutes);

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});

module.exports = { app};