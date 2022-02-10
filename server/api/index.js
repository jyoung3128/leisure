const { Router } = require('express');
const api = Router();
const facts = require('./facts');

api.use('/facts', facts);



module.exports = api;
