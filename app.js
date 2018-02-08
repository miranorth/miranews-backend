const express    = require('express');
const path       = require('path');
const logger     = require('morgan');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose')
const user       = require('./routes/user');
const cors       = require('cors');
const app        = express();

mongoose.connect("mongodb://fabio:fabio@ds229648.mlab.com:29648/miranorth")

app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', user);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
