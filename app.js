var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var classify = require('./routes/classify');
var list = require('./routes/list');

var app = express();

//设置当前环境
// app.set('env', 'production')

var isEnv = null;
app.get('env') === 'development' ? isEnv = true : isEnv =false;

//根据环境配置视图文件路径
if(isEnv) {
  app.set('views', path.join(__dirname, 'views'));
} else {
  app.set('views', path.join(__dirname, 'dist/views'));
}
// view engine setup
app.set('view engine', 'jade');



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//根据环境配置静态资源路径
if(isEnv) {
  app.use(express.static(path.join(__dirname, 'public')));
} else {
  app.use(express.static(path.join(__dirname, 'dist/public')));
}


app.use('/', index);
app.use('/users', users);
app.use('/classify', classify);
app.use('/list', list);

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
  res.render('pages/error');
});


module.exports = app;
