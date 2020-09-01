const request = require('supertest');
const app = require('../../app');
const newReview = require('../mock-data/new-review.json');
const newUser = require('../mock-data/new-review.json');
const UserModel = require('../../models/User');
const jwtSign = require('../../utils/jwtSign');

const endpointUrl = '/api/reviews/';
const endpointUrlUser = '/api/users/';
const bookId = '1';
let token;
let newReviewId;
const nonExistingReviewId = '1253415327826352735';

describe('endpointUrl', () => {
  it(`GET ${endpointUrl}`, async () => {
    const response = await request(app).get(`${endpointUrl}${bookId}`);
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body[0].createdAt).toBeDefined();
    expect(response.body[0].id).toBeDefined();
    expect(response.body[0].text).toBeDefined();
    expect(response.body[0].user.userId).toBeDefined();
    expect(response.body[0].user.username).toBeDefined();
  });

  it(`POST ${endpointUrl}`, async () => {
    let response;
    const user = await UserModel.findOne({
      attributes: ['id', 'name', 'email', 'password'],
      where: { email: 'test@gmail.com' }, // ???
    });

    if (user) {
      token = jwtSign(user);
    } else {
      response = await request(app)
        .post(endpointUrlUser)
        .send(newUser);
      
      token = response.body.token;
    }

    response = await request(app)
      .post(endpointUrl)
      .set('x-auth-token', token)
      .send(newReview);
    expect(response.statusCode).toBe(201);
    expect(response.body.bookId).toBeDefined();
    expect(response.body.createdAt).toBeDefined();
    expect(response.body.id).toBeDefined();
    expect(response.body.text).toBeDefined();
    expect(response.body.updatedAt).toBeDefined();
    expect(response.body.userId).toBeDefined();
    newReviewId = response.body.id;
  });

  it('HTTP DELETE', async () => {
    const response = await request(app)
      .delete(endpointUrl + newReviewId)
      .set('x-auth-token', token)
      .send();
    expect(response.statusCode).toBe(200);
  });

  it('HTTP DELETE 404', async () => {
    const res = await request(app)
      .delete(endpointUrl + nonExistingReviewId)
      .set('x-auth-token', token);
    expect(res.statusCode).toBe(404);
  });
});