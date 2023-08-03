const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Pruebas para la ruta PUT /api/anime/:id', () => {
    it('Debería actualizar un anime existente y devolver código 200', (done) => {
        chai
            .request(app)
            .put('/api/anime/2') // Cambia el ID por el ID de un anime existente en tu archivo anime.json
            .send({
                nombre: 'Nombre actualizado',
                genero: 'Género actualizado',
                año: '2023',
                autor: 'Autor actualizado',
            })
            .end((error, respuesta) => {
                chai.expect(respuesta).to.have.status(200);
                done();
            });
    });

    it('Debería devolver código 404 para un anime que no existe', (done) => {
        chai
            .request(app)
            .put('/api/anime/999') // Cambia el ID a uno que no existe en tu archivo anime.json
            .send({
                nombre: 'Nombre actualizado',
                genero: 'Género actualizado',
                año: '2023',
                autor: 'Autor actualizado',
            })
            .end((error, respuesta) => {
                chai.expect(respuesta).to.have.status(404);
                done();
            });
    });
});
