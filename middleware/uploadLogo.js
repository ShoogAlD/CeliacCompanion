
const path = require('path')
const multer = require('multer');
const bodyParser = require('body-parser');


const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file , cb) {
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname));

    }
});

const uploadLogo = multer({
    storage : storage
}) //.single('picture');

module.exports = uploadLogo