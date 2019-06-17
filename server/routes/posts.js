const express = require('express');

const db = require('../db');

const router = express.Router();

router.get('/:id', (req, res) => {
  const post = db
    .get('posts')
    .find({ id: Number(req.params.id) })
    .value();

  if (!post) {
    res.status(404).json({ error: 'Item not found.' });
    return;
  }

  res.json(post);
});

router.get('/', (req, res) => {
  const posts = db.get('posts').value();
  res.json(posts);
});

module.exports = router;
