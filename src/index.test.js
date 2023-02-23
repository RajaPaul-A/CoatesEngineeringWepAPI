const request = require('supertest');

import index from './index';

describe('GET /', () => {

    it('POST / => add new user', () => {
        return (
          request(app)
            .post('/')
            .send({
              name: 'Raja Paul A',
              email: 'rajapaul@gmail.com',
              dob: "24/03/1994"
            })
            .expect('Content-Type', /json/)
            .expect(201)
            .then((response) => {
              expect(response.body).toEqual(
                expect.objectContaining({
                    name: 'Raja Paul A',
                    email: 'rajapaul@gmail.com',
                    dob: "24/03/1994",
                    id: 1
                })
              );
            })
        );
    });

    it('GET / => get all users', () => {
        return request(index)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            id: expect.any(Number),
                            name: expect.any(String),
                            email: expect.any(String),
                            dob: expect.any(String)
                        }),
                    ])
                );
            });
    });

    it('GET / => get user by Id', () => {
        return request(index)
        .get('/1')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    email: expect.any(String),
                    dob: expect.any(String)
                })
            );
        });
    });

    it('GET /id => 404 if user not found', () => {
        return request(app).get('/10000000000').expect(404);
    });
});
