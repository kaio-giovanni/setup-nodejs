const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './__tests__/database.sqlite',
});
const request = require('supertest');
const truncate = require('../utils/truncate');
const app = require('../../src/app');
const User = require('../../src/models/User');

describe('Authentication', () => {
  beforeAll(() => {
    User.init(sequelize);
  });
  beforeEach(async () => {
    await truncate();
  });

  it('should authenticate with valid credentials', async () => {
    const user = await User.create({
      name: 'Kaio',
      email: 'kaio@gmail.com',
      password: '123123',
    });

    const response = await request(app).post('/session').send({
      email: user.email,
      password: user.password,
    });

    expect(response.status).toBe(200);
  });

  it('should not authenticate with invalid credentials', async () => {
    const user = await User.create({
      name: 'Kaio',
      email: 'kaio@gmail.com',
      password: '123123',
    });

    const response = await request(app).post('/session').send({
      email: user.email,
      password: '123123123',
    });

    expect(response.status).toBe(401);
  });
});
