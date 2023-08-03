const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../index');

chai.use(chaiHttp);

describe('Pruebas para la ruta POST /api/anime', () => {
    it('Debería agregar un nuevo anime y devolver código 201', (done) => {
        chai
            .request(app)
            .post('/api/anime')
            .send({
                nombre: 'Nuevo Anime',
                genero: 'Género',
                año: '2023',
                autor: 'Autor',
            })
            .end((error, respuesta) => {
                chai.expect(respuesta).to.have.status(201);
                done();
            });
    });
});
