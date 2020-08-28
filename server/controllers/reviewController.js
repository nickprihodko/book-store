const sequelize = require("../config/db");
const { QueryTypes } = require("sequelize");
const Review = require("../models/Review");
const User = require("../models/User");

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      attributes: [
        "id",
        "text",
        "createdAt"
      ],
      where: { bookId : req.params.id },
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
          attributes: [
            "avatar",
            ["id", "userId"],
            ["name", "username"]
          ],
        },
      ],
    })
    return res.status(200).json(reviews);
  } catch (err) {
    console.log("getReviews:", err.message);
    res.status(500).json({ message: err });
  }
};

exports.addReview = async (req, res) => {
  try {
    const { review, bookid } = req.body;
    const userId = req.user.id;

    const createdReview = await Review.create({
      text: review,
      userId: userId,
      bookId: bookid,
    });

    return res.status(201).json(createdReview);

  } catch (err) {
    console.log("addReview:", err.message);
    res.status(500).json({ message: err });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const queryParams = {
      where: { id: +req.params.id },
    };
    const review = await Review.destroy(queryParams);
    if (review) {
      return res.status(200).json(review);
    } else {
      return res.status(404).send();
    }
  } catch (err) {
    console.log("deleteReview:", err.message);
    res.status(500).json({ message: err });
  }
};
