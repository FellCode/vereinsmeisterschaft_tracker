const disciplineConfig = [
	
	//LUFTGEWHER STEHEND FREIHAND
	{abk:"LSF",diszplin:"Schüler",minAlter:0,maxAlter:15},
	{abk:"LSF",diszplin:"Jugend",minAlter:16,maxAlter:20},
	{abk:"LSF",diszplin:"Schützen",minAlter:21,maxAlter:43},
	{abk:"LSF",diszplin:"Senioren I",minAlter:44,maxAlter:59},
	{abk:"LSF",diszplin:"Senioren II",minAlter:60,maxAlter:69},
	{abk:"LSF",diszplin:"Altersklasse",minAlter:70,maxAlter:999},
	
	//LUFTGEWEHR STEHEND AUFGELEGT
	{abk:"LSA",diszplin:"Schüler",minAlter:0,maxAlter:15},
	{abk:"LSA",diszplin:"Jugend",minAlter:16,maxAlter:20},
	{abk:"LSA",diszplin:"Schützen",minAlter:21,maxAlter:43},
	{abk:"LSA",diszplin:"Senioren I",minAlter:44,maxAlter:59},
	{abk:"LSA",diszplin:"Senioren II",minAlter:60,maxAlter:69},
	{abk:"LSA",diszplin:"Altersklasse",minAlter:70,maxAlter:999},
	
	//LUFTGEWEHR SITZEND
	{abk:"LS",diszplin:"Schüler",minAlter:0,maxAlter:15},
	{abk:"LS",diszplin:"Jugend",minAlter:16,maxAlter:20},
	{abk:"LS",diszplin:"Schützen",minAlter:21,maxAlter:43},
	{abk:"LS",diszplin:"Senioren I",minAlter:44,maxAlter:59},
	{abk:"LS",diszplin:"Senioren II",minAlter:60,maxAlter:69},
	{abk:"LS",diszplin:"Altersklasse",minAlter:70,maxAlter:999},
	
	//KK OLYMPISCH MATCH
	{abk:"KOM",diszplin:"Schüler",minAlter:0,maxAlter:15},
	{abk:"KOM",diszplin:"Jugend",minAlter:16,maxAlter:20},
	{abk:"KOM",diszplin:"Schützen",minAlter:21,maxAlter:43},
	{abk:"KOM",diszplin:"Senioren I",minAlter:44,maxAlter:59},
	{abk:"KOM",diszplin:"Senioren II",minAlter:60,maxAlter:69},
	{abk:"KOM",diszplin:"Altersklasse",minAlter:70,maxAlter:999},
	
	//KK STEHEND AUFGELEGT
	{abk:"KSA",diszplin:"Schüler",minAlter:0,maxAlter:15},
	{abk:"KSA",diszplin:"Jugend",minAlter:16,maxAlter:20},
	{abk:"KSA",diszplin:"Schützen",minAlter:21,maxAlter:43},
	{abk:"KSA",diszplin:"Senioren I",minAlter:44,maxAlter:59},
	{abk:"KSA",diszplin:"Senioren II",minAlter:60,maxAlter:69},
	{abk:"KSA",diszplin:"Altersklasse",minAlter:70,maxAlter:999},
	
	//KK SITZEND
	{abk:"KS",diszplin:"Schüler",minAlter:0,maxAlter:15},
	{abk:"KS",diszplin:"Jugend",minAlter:16,maxAlter:20},
	{abk:"KS",diszplin:"Schützen",minAlter:21,maxAlter:43},
	{abk:"KS",diszplin:"Senioren I",minAlter:44,maxAlter:59},
	{abk:"KS",diszplin:"Senioren II",minAlter:60,maxAlter:69},
	{abk:"KS",diszplin:"Altersklasse",minAlter:70,maxAlter:999},
	
	//PISTOLE
	{abk:"LP",diszplin:"",minAlter:0,maxAlter:999},
	{abk:"FP",diszplin:"",minAlter:0,maxAlter:999},
	{abk:"SP",diszplin:"",minAlter:0,maxAlter:999},
	
	//ZIMMERSTUTZEN
	{abk:"ZS",diszplin:"",minAlter:0,maxAlter:999},
	
	//SPASSSCHIEßEN
	{abk:"SS",diszplin:"",minAlter:0,maxAlter:999},
	
	];
	
	function returnConstraints(abk,diszplin){
		return disciplineConfig.find(function(element){
			if(diszplin !=="")
				return element.abk === abk && element.diszplin === diszplin
			else
				return element.abk === abk
		})
	}
	
module.exports = {returnConstraints:returnConstraints}