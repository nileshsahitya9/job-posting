const express = require('express');
const router = express.Router();

const db = require('../../db');

router.get('/', async (req, res) => {
  try {
    const postings = await db('Posting');
    res.send({
      success: true,
      data: {postings}
    });
  } catch(e) {
    res.send({
      success: false
    });
  }
});

module.exports = router;
