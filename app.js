const express = require('express');
const cors = require('cors');
const app = express();
const indexRouter = require('./routes/index');

app.use(cors());
app.use(express.json());
app.use('/', indexRouter);

module.exports = app;
