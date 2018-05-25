var express = require('express');
var router = express.Router();
var Meisterschaft = require('../models/meisterschaft');


router.get('/', function(req, res) {
	Meisterschaft.findOne({}).populate('ergebnisse').exec(function(err,meisterschaft){
		
		if(err){
			// eslint-disable-next-line no-console
			console.log(err);
		}else{
			res.render('Meisterschaft/index',{meisterschaft:meisterschaft,sortRanking:sortRanking,filter:filter});
		}
	});
});


const sortRanking = function(a,b){
		if (a.ringeSchuetze < b.ringeSchuetze) {
    		return 1;
  		}
  		if (a.ringeSchuetze > b.ringeSchuetze) {
    		return -1;
  		}
  		if(a.ringeSchuetze == b.ringeSchuetze){
  			if(a.teilerSchuetze < b.teilerSchuetze)
  				return 1
  			if(a.teilerSchuetze > b.teilerSchuetze)
  				return -1
  		}
  		// a muss gleich b sein
  		return 0;
	}

const filter = function(element){
	if(element.abk === this.abk && element.alterSchuetze <= this.maxAlter && element.alterSchuetze >= this.minAlter){
		return true;
	}
	return false;
}

module.exports = router;