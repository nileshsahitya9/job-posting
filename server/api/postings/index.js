const express = require('express');
const router = express.Router();

const db = require('../../db');

router.get('/', async (req, res) => {
  try {
    const postings = await db('Posting');
    res.send({
      success: true,
      data: { postings }
    });
  } catch (e) {
    res.send({
      success: false
    });
  }
});


router.post('/', async (req, res) => {
  try {

    const payload = req.body;
    await db('Posting').insert({ ...payload });
    res.send({
      success: true,
    });
  } catch (e) {
    res.send({
      success: false
    });
  }
});


module.exports = router;
