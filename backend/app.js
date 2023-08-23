
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session'); 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');
var adminRouter =  require('./routes/admin/novedades');
var app = express();



require('dotenv').config();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(session({
  secret: 'hy38EWF7efs64G5H33JG3Yjh4g5s',
  reserve: false,
  saveUninitialized: true
}));
secured = async function(req,res,next){
  try{
    console.log(req.session.id_usuario);
    if(req.session.id_usuario){
      next();
    } else {
      res.redirect('/admin/login');
    }
  }catch(error){
    console.log(error);
  }
  }

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/novedades', secured, adminRouter);


app.get('/', function(req,res){
  var know = Boolean(req.session.name);

  res.render('index' , {
    title: "Inicio de sesion",
    know:know,
    name: req.session.name
  });
});


app.post('/admin/login', function(req,res){
  if (req.body.name){
    req.session.name = req.body.name
  }
  res.redirect('/');
})

app.get('/salir', function(req,res){
    req.session.destroy();
    res.redirect('/');
  });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
