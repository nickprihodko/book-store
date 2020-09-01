const ReviewController = require('../../controllers/reviewController');
const httpMocks = require('node-mocks-http');

const ReviewModel = require('../../models/Review');
const UserModel = require('../../models/User');

const allReviews = require('../mock-data/all-reviews.json');
const newReview = require('../mock-data/new-review.json');

let req, res, next;

jest.mock('../../models/Review');

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
})

// GET - get all reviews
describe('ReviewController.getReviews', () => {
  it('should have a getReviews function', () => {
    expect(typeof ReviewController.getReviews).toBe('function');
  });
  
  it('should call ReviewModel.findAll', async () => {
    const findAllObj = {
      attributes: [
        'id',
        'text',
        'createdAt'
      ],
      where: { bookId : req.params.id },
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: UserModel,
          attributes: [
            'avatar',
            ['id', 'userId'],
            ['name', 'username']
          ],
        },
      ],
    }

    await ReviewController.getReviews(req, res, next);
    expect(ReviewModel.findAll).toHaveBeenCalledWith(findAllObj);
  });

  it('should return response code 200 and all reviews', async () => {
    ReviewModel.findAll.mockReturnValue(allReviews); // ???
    await ReviewController.getReviews(req, res, next);
    expect(res.statusCode).toBe(200);
    expect(res._isEndCalled()).toBeTruthy();
    expect(res._getJSONData()).toStrictEqual(allReviews);
  });

  it('should handle errors', async () => {
    const errorMessage = {message: 'Internal error'};
    const rejectedPromise = Promise.reject(errorMessage);
    ReviewModel.findAll.mockReturnValue(rejectedPromise);
    await ReviewController.getReviews(req, res, next);
    expect(res.statusCode).toBe(500);
    expect(res._isEndCalled()).toBeTruthy();
  });
});

// POST - add new review
describe('ReviewController.addReview', () => {
  beforeEach(() => {
    req.body = newReview;
    req.user = { id: '1' };
  })

  it('should have a addReview function', () => {
    expect(typeof ReviewController.addReview).toBe('function');
  });

  it('should call ReviewModel.create', async () => {
    await ReviewController.addReview(req, res, next);
    expect(ReviewModel.create).toBeCalledWith({
      text: newReview.review,
      userId: req.user.id,
      bookId: newReview.bookid,
    });
  });

  it('should return response code 201', async () => {
    await ReviewController.addReview(req, res, next);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });

  it('should return json body in response', async () => {
    ReviewModel.create.mockReturnValue(newReview);
    await ReviewController.addReview(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newReview);
  });

  it('should handle errors', async () => {
    const errorMessage = {message: 'Internal error'};
    const rejectedPromise = Promise.reject(errorMessage);
    ReviewModel.create.mockReturnValue(rejectedPromise);
    await ReviewController.addReview(req, res, next);
    expect(res.statusCode).toBe(500);
    expect(res._isEndCalled()).toBeTruthy();
  });
});

// DELETE - delete review
describe('ReviewController.deleteReview', () => {
  it('should have a deleteTodo function', () => {
    expect(typeof ReviewController.deleteReview).toBe('function');
  });

  it('should call destroy', async () => {
    req.params.id = '1';
    await ReviewController.deleteReview(req, res, next);
    expect(ReviewModel.destroy).toBeCalledWith({'where': {'id': 1}});
  });

  it('should return response code 200 and delete review', async () => {
    ReviewModel.destroy.mockReturnValue(newReview);
    await ReviewController.deleteReview(req, res, next);
    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toStrictEqual(newReview);
    expect(res._isEndCalled()).toBeTruthy();
  });

  it('should handle errors', async () => {
    const errorMessage = {message: 'Internal error'};
    const rejectedPromise = Promise.reject(errorMessage);
    ReviewModel.destroy.mockReturnValue(rejectedPromise);
    await ReviewController.deleteReview(req, res, next);
    expect(res.statusCode).toBe(500);
    expect(res._isEndCalled()).toBeTruthy();
  });
});