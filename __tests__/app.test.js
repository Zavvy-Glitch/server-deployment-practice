'use strict';

const supertest = require('supertest');
const app = require('../server/app.js');
const request = supertest(app);

//takes callbacks within the first set of parenthesis
describe('Testing HTTP API', () => {
    it('Respond to GET request to /hello route with a status 200', async () => {
        const response = await request.get('/hello');

        expect(response.status).toEqual(200);
    });
})
