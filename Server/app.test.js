require('dotenv').config();
const app = require('./app.js');
const request = require('supertest');

describe('GET /', () => {
	it('should return a 200 response', async () => {
		const response = await request(app).get('/');
		expect(response.statusCode).toBe(200);
	});
});

describe('GET /questions', () => {
	it('should return a 200 response', async () => {
		const response = await request(app).get('/questions');
		expect(response.statusCode).toBe(200);
	});

	it('should return the entire questions array with this request', async () => {
		const response = await request(app).get('/questions');
		expect(response.body.length).not.toBe(0);
	});

	it('should return a 404 response if questions is mis-spelled', async () => {
		const response = await request(app).get('/qustions');
		expect(response.statusCode).toBe(404);
	});
});

describe('GET /questions/:category', () => {
	it('should return a 200 response', async () => {
		const response = await request(app).get('/questions/english');
		expect(response.statusCode).toBe(200);
	});

	it('should return 10 responses per category', async () => {
		const response = await request(app).get('/questions/art');
		expect(response.body.length).toBe(10);
	});

	it('should return a 404 for an unknown category', async () => {
		const response = await request(app).get('/questions/fake');
		expect(response.statusCode).toBe(404);
	});
});

describe('PORT', () => {
	it('should return a port number', async () => {
		const port = process.env.PORT;
		expect(port).not.toBe(undefined);
	});
});
