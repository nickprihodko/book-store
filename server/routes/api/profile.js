const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route GET api/profile/me
// @desc Get current users profile
// @access Private

router.get("/", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user_id,
      where: {
        user_id,
      },
    });

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

// @route POST api/profile
// @desc Create or update user profile
// @access Private
router.post(
  "/",
  [auth, [check("status", "Status is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { avatar, about } = req.body;
    // Build profile object
  }
);

module.exports = router;
