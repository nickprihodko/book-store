import jwt from 'jsonwebtoken';
import config from 'config';

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

export default jwtSign;
