var express = require('express');
var router = express.Router();

/* GET home page and admin page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'user view' });
});

router.get('/admin', function(req, res, next) {
  res.send( 'admin page' );
});

module.exports = router;
