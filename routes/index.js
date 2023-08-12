const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils.js');

// GET Route for retrieving all the tips
notes.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


module.exports = notes;
