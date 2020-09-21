var express = require('express');
var router = express.Router();
const db = require('../model/helper');


async function getAllQuotes() {
  let results = await db('SELECT * FROM quotes');
  return results.data;
}


router.get('/', function(req, res, next) {
  db('SELECT * FROM quotes;')
  .then(results => {
    res.send(results.data);
  })
  .catch(err => 
    res.status(500).send(err));
});


router.post('/', async function(req, res, next) {
    let { quote, quote_color, background_color } = req.body;

    try {
      let sql = `
        INSERT INTO quotes 
        (quote, quote_color, background_color)
        VALUES ('${quote}', '${quote_color}', '${background_color}')
        `;

      await db(sql);
      let allQuotes = await getAllQuotes();
      res.status(201).send(allQuotes);

    } catch (err) {
      res.status(500).send({ error: err });
    }
});

// router.put('/quotes/:id', function(req, res, next) {
//     res.send();
// });


// router.delete('/quotes/:id', function(req, res, next) {
//   res.send(msg: 'Deleted');
// });

module.exports = router;
