//PACKAGES
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var dbUtils = require ('./dbUtils.js');
require('dotenv').config();

//MODELS
var User = require('./models/user');

//ROUTES
var indexRoutes = require('./routes/index');
var teilnehmerRoutes = require('./routes/teilnehmer');
var meisterschaftRoutes = require('./routes/meisterschaft');
var resultRoutes = require('./routes/result');

mongoose.set('useFindAndModify', false);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-6qd5o.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{ useNewUrlParser: true });


//SETTINGS
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
// eslint-disable-next-line no-undef
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(require("express-session")({
    secret: 'what is love baby dont hurt me',
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

//dbUtils.createMeisterschaft();


//ROUTES
app.use(indexRoutes);
app.use('/teilnehmer',teilnehmerRoutes);
app.use('/meisterschaft',meisterschaftRoutes);
app.use('/result',resultRoutes);


//SERVER START

// eslint-disable-next-line no-undef
app.listen(process.env.PORT,process.env.IP, function(){
	// eslint-disable-next-line no-console 
	console.log('Server Started');
});

