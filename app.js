var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');
var fs = require('fs');
var rfs = require('rotating-file-stream');
var accesslog = require('access-log');

var index = require('./routes/index');

//Check for existence of log dir or make it
var logDirectory = path.join(__dirname, 'logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

//Create a rotating write stream
var accessLogStream = rfs('access.log', {
	interval: '1h', 
	path: logDirectory
});

//Instruct the app to use logger to file
app.use(morgan('combined', {stream:accessLogStream}));

//Routes to use
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render(err.message);
});

module.exports = app;
