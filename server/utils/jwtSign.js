const jwt = require("jsonwebtoken");
const config = require("config");

const jwtSign = (user) => {
  const payload = {
    user: {
      id: user.id,
    },
  };

  const token = jwt.sign(payload, config.get("jwtSecret"), {
    expiresIn: 36000,
  });

  return token;
};

module.exports = jwtSign;
