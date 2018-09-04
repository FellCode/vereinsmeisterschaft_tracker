var express = require('express');
var router = express.Router();
var Teilnehmer = require('../models/teilnehmer');
var moment = require('moment');
var Meisterschaft = require('../models/meisterschaft');
var Result = require('../models/result');
var middleware = require("../middleware");

router.get('/',middleware.isLoggedIn, function(req,res){
	Teilnehmer.find({},function(err,teilnehmer){
		if(err){
			// eslint-disable-next-line no-console 
			console.log(err);
		} else{
			res.render('Teilnehmer/index',{teilnehmer:teilnehmer,moment:moment});
		}
	}); 
});

router.post('/',middleware.isLoggedIn, function(req,res){
	
	Teilnehmer.create(req.body.teilnehmer,function(err,teilnehmer){
		if(err){
			res.back();
		}else{
			Meisterschaft.findOne({jahr:'2018'}, function(err,currentMeisterschaft){
				if(err){
					// eslint-disable-next-line no-console 
					console.log(err);
				}else{
					var temp = [];
					teilnehmer.disciplines.forEach(function(disziplin){
						Result.create({abk:disziplin,alterSchuetze:_calculateAge(new Date(teilnehmer.birthdate)),nameSchuetze:teilnehmer.name,nummerSchuetze:'0',teilerSchuetze:'0',ringeSchuetze:'0',teilnehmerID:teilnehmer._id}, function(err,result){
							if(err){
								// eslint-disable-next-line no-console
								console.log(err);
							} else{
								temp.push(result._id);
								if(temp.length === teilnehmer.disciplines.length){
									currentMeisterschaft.ergebnisse.push(...temp);
									currentMeisterschaft.save();
								}
							}
						});
					});
				}
			});
			res.redirect('/teilnehmer');
		}
	});
});

router.get('/:id/edit',middleware.isLoggedIn,function(req, res) {
	Teilnehmer.findById(req.params.id, function(err,foundTeilnehmer){
		res.render('Teilnehmer/edit', {teilnehmer: foundTeilnehmer,moment:moment});
	});
});

router.get('/new',middleware.isLoggedIn,function(req, res) {
	res.render('Teilnehmer/new');
});

router.delete('/:id',middleware.isLoggedIn,function(req,res){
	Teilnehmer.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect('back');
		} else{
		Result.remove({teilnehmerID:req.params.id}, function(err) {
    		if (!err){ 
        		console.log("All Good");
    		} else {throw err;}
		});
			res.redirect('/teilnehmer');
		}
	});
});

router.put('/:id',middleware.isLoggedIn, function(req,res){
	Teilnehmer.findByIdAndUpdate(req.params.id,req.body.teilnehmer, function(err){
		if(err){
			res.redirect('/teilnehmer');
		}else{
			res.redirect('/teilnehmer/');
		}
	});
});

function _calculateAge(birthday) { // birthday is a date
	var ageDifMs = Date.now() - birthday.getTime();
	var ageDate = new Date(ageDifMs); // miliseconds from epoch
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}


module.exports = router;