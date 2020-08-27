const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Verify token
  if (token) {
    try {
      const decoded = jwt.verify(token, config.get("jwtSecret"));

      console.log('decoded:', decoded);

      req.user = decoded.user;
      next();
    } catch (error) {
      res.status(401).json({ msg: "Token is not valid" });
    }
  } else {
    next();
  }
};
