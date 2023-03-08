require('dotenv').config();
const app = require('./app.js');
const request = require('supertest');


describe('GET /', () => {
    it('should return a 200 response', async() => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});

describe('GET /questions', () => {
    it('should return a 200 response', async() => {
        const response = await request(app).get('/questions');
        expect(response.statusCode).toBe(200);
    });
});

describe('GET /questions/:category', () => {
    it('should return a 200 response', async() => {
        const response = await request(app).get('/questions/english');
        expect(response.statusCode).toBe(200);
    });
});

describe('PORT', () => {
    it('should return a port number', async() => {
        const port = process.env.PORT;
        expect(port).not.toBe(undefined);
    });
});