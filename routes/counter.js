const express = require('express');
const router = express.Router();
const Counter = require('../models/Counter');

router.get('/', async (req, res) => {
  const ip = req.ip;

  try {
    let record = await Counter.findOne({ ip });

    if (record) {
      record.count += 1;
      await record.save();
    } else {
      record = new Counter({ ip });
      await record.save();
    }

    res.send(`You have visited ${record.count} times.`);
  } catch (error) {
    res.status(500).send('Error connecting to database.');
  }
});

module.exports = router;
