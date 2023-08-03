const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../index'); 

chai.use(chaiHttp);

describe('Pruebas para la ruta GET /api/anime', () => {
    it('Debería devolver código 200 y una lista de animes', (done) => {
        chai
            .request(app)
            .get('/api/anime')
            .end((error, respuesta) => {
                chai.expect(respuesta).to.have.status(200);
                chai.expect(respuesta.body).to.be.an('array');
                done();
            });
    });
});
