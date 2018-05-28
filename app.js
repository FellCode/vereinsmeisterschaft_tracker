//PACKAGES
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var dbUtils = require ('./dbUtils.js');

//ROUTES
var indexRoutes = require('./routes/index');
var teilnehmerRoutes = require('./routes/teilnehmer');
var meisterschaftRoutes = require('./routes/meisterschaft');
var resultRoutes = require('./routes/result');
//UTILS



//DATABASE CONNECTION
console.log(process.env.DATABASE_URL);
mongoose.connect(process.env.DATABASE_URL);
//SETTINGS
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
// eslint-disable-next-line no-undef
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));


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

