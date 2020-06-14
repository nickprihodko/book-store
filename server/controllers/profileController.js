const Profile = require("../models/Profile");

exports.getProfile = async (req, res) => {
  try {
    console.log(req.user.id);

    const profile = await Profile.findOne({
      where: {
        userId: req.user.id,
      },
    });

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.createProfile = async (req, res) => {
  const { formData, edit } = req.body;
  const { avatar, about } = formData;
  const userId = req.user.id;

  // use edit instead of findOne ???
  try {
    let profile = await Profile.findOne({
      where: {
        userId: req.user.id,
      },
    });
    if (profile) {
      profile = await Profile.update(
        { about: formData.about },
        { where: { userId: req.user.id } }
      );
    } else {
      profile = new Profile({ userId: userId, avatar, about });
      await profile.save();
    }
    return res.json(profile);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};
