const jwt = require("jsonwebtoken");
const config = require("config");

const jwtSign = (user, res) => {
  const payload = {
    user: {
      id: user.id,
    },
  };

  jwt.sign(
    payload,
    config.get("jwtSecret"),
    { expiresIn: 3600 },
    (err, token) => {
      if (err) throw err;
      res.json({ token });
    }
  );
};

module.exports = jwtSign;
