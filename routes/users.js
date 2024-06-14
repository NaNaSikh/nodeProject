var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/id', function (res, req, next) {
  res.status(200).json({ message: "hi" + req.params.id })
})

module.exports = router;
