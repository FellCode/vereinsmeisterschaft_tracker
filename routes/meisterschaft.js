var express = require('express');
var router = express.Router();
var Meisterschaft = require('../models/meisterschaft');
var middleware = require('../middleware');
var csv_export=require('csv-export');
var fs = require('fs');
var iconv     = require("iconv-lite");
var csvCreator = require('../csvCreator.js')



router.get('/',middleware.isLoggedIn, function(req, res) {
	Meisterschaft.findOne({}).populate('ergebnisse').exec(function(err,meisterschaft){
		
		if(err){
			// eslint-disable-next-line no-console
			console.log(err);
		}else{
			res.render('Meisterschaft/index',{meisterschaft:meisterschaft,sortRanking:sortRanking,filter:filter});
		}
	});
});



router.get('/csv',middleware.isLoggedIn,function(req,res){
	Meisterschaft.findOne({}).populate('ergebnisse').exec(function(err,meisterschaft){
		
		if(err){
			// eslint-disable-next-line no-console
			console.log(err);
		}else{
		  let data = csvCreator.createCSV(meisterschaft.ergebnisse);
		  res.setHeader('Content-Type',        'application/vnd.openxmlformats');
		  res.setHeader("Content-Disposition", 'attachment; filename=Ergebnisse.xls');
		  res.write(new Buffer([0xff, 0xfe]));
		  res.write(iconv.encode(data,'utf16le'));
		  res.end();
		}
	});
})


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


function createDataset(rawData,kategorie){
	let dataset = []
	rawData.filter(data => data.abk == kategorie).forEach(data => dataset.push({"nummer":data.nummerSchuetze,"name":data.nameSchuetze,"ringe":data.ringeSchuetze,"teiler":data.teilerSchuetze}) )
	console.dir(dataset);
	return dataset;
}


module.exports = router;