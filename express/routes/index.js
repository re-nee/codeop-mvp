var express = require('express');
var router = express.Router();
const db = require('../model/helper');


//Helper functions_________________________________________________

async function getAllQuotes() {
  let results = await db('SELECT * FROM quotes');
  return results.data;
}

async function quoteExist(id) {
  let results = await db(`SELECT * FROM quotes WHERE id = ${id}`);
  return results.data.length === 1;
}

//_________________________________________________________________


router.get('/', function(req, res, next) {
  db('SELECT * FROM quotes;')
  .then(results => {
    res.send(results.data);
  })
  .catch(err => 
    res.status(500).send(err));
});

router.get('/:id', async function(req, res, next) {
  let { id } = req.params;

  try {
    if ( quoteExist(id) === false ) {
      res.status(404).send( {error: 'Not found'} );
      return;
    }
    let sql = (`SELECT * FROM quotes WHERE id = ${id}`);
    let results = await db(sql);
    res.send(results.data[0]);

  } catch (err) {
    res.status(500).send( {error: err} );
  }
  
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


router.delete('/:id', async function(req, res, next) {
  let { id } = req.params;

  try {
    if (await quoteExist(id) === false) {
      res.status(404).send( {error: 'Not found'} );
      return;
    }
  
    let sql = `DELETE FROM quotes WHERE id = ${id}`;
    await db(sql);
    res.status(201).send( await getAllQuotes() );

} catch (err) {
    res.status(500).send({ error: err });
}

});

module.exports = router;
