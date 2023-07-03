const express = require('express');
const { QueryTypes, } = require('sequelize');
const config = require('../config');
const db = require('../database');

const home = express.Router();

home.get('/', async (req, res) => {
  let author = 'Jane Doe';
  const [results, metadata] = await db.query(
      "SELECT uid, title, author FROM books where author=? ORDER BY uid ASC LIMIT 1", 
      {
          replacements: [ author, ],
          type: QueryTypes.SELECT,
      },
  );
  const [results2, metadata2] = await db.query(
      "SELECT uid, title, author FROM books where author=:author ORDER BY uid DESC LIMIT 1", 
      {
          replacements: { author, },
          type: QueryTypes.SELECT,
      },
  );

  return res.render('home.pug', {
      config,
      title: 'Homepage',
      data: [
          results, 
          results2, 
      ],
  });
})

module.exports = home;