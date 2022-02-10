// TODO
const path = require('path');
const express = require('express');
const { PORT = 1337 } = process.env;
const app = express();
const api = require('./api');


app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));
app.use('/api', api);












app.listen(PORT, () => {
  console.log(`http://127.0.0.1:${PORT}`);
});
