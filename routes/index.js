var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer( { dest: "uploads/"})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'File Metadata Microservice', author: "Ian Agpawa" });
});


router.post("/", upload.single("upload"), function (req, res){
  res.send( {
    "file name": req.file.originalname,
    "file type": req.file.mimetype,
    size: req.file.size
  })
})

module.exports = router;
