var Meisterschaft = require('./models/meisterschaft');


function createMeisterschaft(){
	Meisterschaft.create({name:'Vereinsmeisterschaft',jahr:'2019',ergebnisse:[]}, function(err,meisterschaft){
		if(err){
			// eslint-disable-next-line no-console 
			console.log(err);
		}else{
			// eslint-disable-next-line no-console 
			console.log(meisterschaft.name + ' sucessfully created');
		}
	});
}

module.exports = {createMeisterschaft:createMeisterschaft};