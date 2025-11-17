const request = require('supertest');
const { app, server } = require('../src/index');

describe('API Endpoints', () => {
  afterAll(() => {
    server.close();
  });

  test('GET / returns welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('DevOps CI/CD Pipeline Demo');
  });

  test('GET /health returns UP status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('UP');
  });
});
