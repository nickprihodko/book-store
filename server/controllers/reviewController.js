const sequelize = require("../config/db");
const { QueryTypes } = require("sequelize");
const Review = require("../models/Review");

exports.getReviews = async (req, res) => {
  try {
    const reviews = await sequelize.query(
      `
      SELECT r.id, r.text, r."createdAt", pr.avatar, 
            u.id as "userId", u.name as username
        FROM reviews r
        LEFT JOIN users pr ON pr.id = r."userId"
        INNER JOIN users u ON u.id = r."userId"
      WHERE r."bookId" = :bookid
      ORDER BY r."createdAt" DESC
      `,
      {
        replacements: { bookid: req.params.id },
        type: QueryTypes.SELECT,
      }
    );
    res.json(reviews);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

exports.addReview = async (req, res) => {
  try {
    const { review, bookid } = req.body;
    const userId = req.user.id;

    const newReview = new Review({
      text: review,
      userId: userId,
      bookId: bookid,
    });

    await newReview.save();

    res.json(newReview);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const queryParams = {
      where: { id: +req.params.id },
    };
    const review = await Review.destroy(queryParams);
    res.json(review);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};
