var express = require('express');
var router = express.Router();
const db = require('../model/helper');

/* GET home page and quotes. */
router.get('/', function(req, res, next) {
  db('SELECT * FROM quotes;')
  .then(results => {
    res.send(results.data);
  })
  .catch(err => 
    res.status(500).send(err));
});

// router.get('/quotes', function(req, res, next) {
//   res.send( 'all quotes' );
// });

// router.post('/quotes/:id', function(req, res, next) {
//     res.send();
// });

// router.delete('/quotes/:id', function(req, res, next) {
//   res.send(msg: 'Deleted');
// });

module.exports = router;
