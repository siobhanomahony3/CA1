var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var recipe = require("./routes/recipe");
var user = require("./routes/user");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.get('/recipe', recipe.findAll);
app.get('/recipe/:id', recipe.findOne);
app.post('/recipe', recipe.addRecipe);
app.delete('/recipe/:id', recipe.deleteRecipe);
app.put('/recipe/:id/rating', recipe.updateRecipe);


app.get('/user', user.findAllUsers);
app.get('/user/:id', user.findOneUser);
app.post('/user', user.addUser);
app.delete('/user/:id', user.deleteUser);
app.put('/user/:id/username', user.updateUser);

//app.put('/recipe/:id/ratings', recipe.updateRecipe1);
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
  res.render('error');
});

module.exports = app;
