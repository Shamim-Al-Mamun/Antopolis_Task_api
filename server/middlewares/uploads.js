const multer = require("multer");

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'server/uploads/'); // Directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Unique file name to avoid conflicts
    }
});

const upload = multer({ storage: storage });

module.exports = upload;