const bcrypt = require("bcryptjs");

exports.makePassword = (pw) => {
  return new Promise(async (res) => {
    let salt, hash;
    salt = await bcrypt.genSalt(10);
    hash = await bcrypt.hash(pw, salt);
    return res(hash);
  });
};
