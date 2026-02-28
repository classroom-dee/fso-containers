const express = require('express');
const router = express.Router();
const redis = require('../redis');

const configs = require('../util/config');

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });

  let result = await redis.setAsync('name', 'dee')
  console.log(` Set result: ${result}`)
  result = await redis.getAsync('name')
  console.log(` Get result: ${result}`)
});

router.get('/statistics', async (req, res) => {
  const stat = await redis.getAsync('added_todos')
  res.json({'added_todos': stat})
})

module.exports = router;
