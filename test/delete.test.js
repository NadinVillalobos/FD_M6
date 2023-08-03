const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../index.js');

chai.use(chaiHttp);

describe('Pruebas para la ruta DELETE /api/anime/:id', () => {
    it('Debería eliminar un anime existente y devolver código 200', (done) => {
        chai
            .request(app)
            .delete('/api/anime/1')
            .end((error, respuesta) => {
                chai.expect(respuesta).to.have.status(200);
                done();
            });
    });

    it('Debería devolver código 404 para un anime que no existe', (done) => {
        chai
            .request(app)
            .delete('/api/anime/999')
            .end((error, respuesta) => {
                chai.expect(respuesta).to.have.status(404);
                done();
            });
    });
});
