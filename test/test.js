
const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('devrait renvoyer le message "Bienvenue sur notre API !" avec un statut 200', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .end((err, res) => {
        if (err) return done(err);
        if (res.text !== "Bienvenue sur notre API !") {
          return done(new Error('Message incorrect renvoyé par l\'API'));
        }
        done();
      });
  });
});

