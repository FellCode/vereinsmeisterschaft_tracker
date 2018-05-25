var express = require('express');
var router = express.Router();
var Result = require('../models/result');


router.get('/:id/edit', function(req, res) {
	Result.findById(req.params.id,function(err,foundResult){
		if(err){
			// eslint-disable-next-line no-console 
			console.log(err);
		}else{
			res.render('Result/edit',{result:foundResult});
		}
	});
});


router.put('/:id', function(req, res) {
	Result.findByIdAndUpdate(req.params.id,req.body.result,function(err){
		if(err){
			// eslint-disable-next-line no-console 
			console.log(err);
		}else{
			res.redirect('/Meisterschaft');
		}
	});
});


module.exports = router;