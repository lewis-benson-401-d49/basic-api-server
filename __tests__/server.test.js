'use strict';
const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);
const { SQLDb } = require('../src/models/index.js');

beforeAll(async () => {
  await SQLDb.sync();
});

afterAll(async () => {
  await SQLDb.drop();
});


describe('Rest API Server', () => {

  test('Creates a food item', async () => {
    let response = await (request.post('/food')).send({
      name: 'tester',
      age: 42,
      pronouns: 'they/them',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('tester');
    expect(response.body.age).toEqual(42);

  });
  test('Creates a customer', async () => {
    let response = await (request.post('/customer')).send({
      name: 'tester',
      age: 42,
      pronouns: 'they/them',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('tester');
    expect(response.body.age).toEqual(42);

  });

});


// Assert the following
// 404 on a bad route
// 404 on a bad method
// The correct status codes and returned data for each REST route
// Create a record using POST
// Read a list of records using GET
// Read a record using GET
// Update a record using PUT
// Destroy a record using DELETE