const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${uuidv4()}${path.extname(file.originalname)}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|JPEG|JPG|png|PNG|gif|GIF)$/)) {
    return cb(new Error("Only image files are allowed!"));
  } else {
    cb(null, true);
  }
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;
