const setup = [
    { abk: 'LSF', gruppen:["schueler","jugend","schuetzenklasse","altersklasse","senioren1","senioren2"] },
    { abk: 'LSA', gruppen:["schueler","jugend","schuetzenklasse","altersklasse","senioren1","senioren2"] },
    { abk: 'LS', gruppen:["schueler","jugend","schuetzenklasse","altersklasse","senioren1","senioren2"] },
    { abk: 'KOM', gruppen:["schueler","jugend","schuetzenklasse","altersklasse","senioren1","senioren2"] },
    { abk: 'KSA', gruppen:["schueler","jugend","schuetzenklasse","altersklasse","senioren1","senioren2"] },
    { abk: 'KS', gruppen:["schueler","jugend","schuetzenklasse","altersklasse","senioren1","senioren2"] },
    { abk: 'LP',gruppen: ["schueler","jugend","schuetzenklasse","altersklasse","senioren1","senioren2"] },
    { abk: 'SP', gruppen:["schueler","jugend","schuetzenklasse","altersklasse","senioren1","senioren2"] },
    { abk: 'FP', gruppen:["schueler","jugend","schuetzenklasse","altersklasse","senioren1","senioren2"] },
    { abk: 'ZS', gruppen:["schueler","jugend","schuetzenklasse","altersklasse","senioren1","senioren2"] },
];




function returnRange(gruppe){
	if(gruppe == "schueler"){
		return [0,15]
	}
	if(gruppe == "jugend"){
		return [16,20]
	}
	if(gruppe == "schuetzenklasse"){
		return [21,44]
	}
	if(gruppe == "altersklasse"){
		return [45,59]
	}
	if(gruppe == "senioren1"){
		return [60,69]
	}
	if(gruppe == "senioren2"){
		return [70,999]
	}
}


const filter = function(element){
	if(element.abk === this.abk && element.alterSchuetze <= this.maxAlter && element.alterSchuetze >= this.minAlter){
		return true;
	}
	return false;
}


function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

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

function createSubset(rawData){
	let dataset = []
	rawData.forEach(data => dataset.push({"nummer":data.nummerSchuetze,"name":data.nameSchuetze,"ringe":data.ringeSchuetze,"teiler":data.teilerSchuetze}) )
	return dataset;
}

function MapDisciplinNames(abk){
	if(abk=== 'LSF')
		return 'Luftgewehr Stehend Freihand';
	if(abk=== 'LSA')
		return 'Luftgewehr Stehend Aufgelegt';
	if(abk=== 'LS')
		return 'Luftgewehr Sitzend';
	if(abk=== 'KOM')
		return 'Olympisch Match';
	if(abk=== 'KSA')
		return 'Kleinkaliber Stehend Aufgelegt';
	if(abk=== 'KS')
		return 'Kleinkaliber Sitzend';
	if(abk=== 'LSF')
		return 'Luftgewehr Stehend Freihand';
	if(abk=== 'ZS')
		return 'Zimmerstutzen';
	if(abk=== 'SS')
		return 'Spaßschießen';
	if(abk=== 'LP')
		return 'Luftpistole';
	if(abk=== 'LPA')
		return 'Luftpistole Aufgelegt';
	if(abk=== 'FP')
		return 'Freie Pistole';
	if(abk=== 'SP')
		return 'Sportpistole';
		
	return 'Unbekannte Disziplin';
		
}



function createCSV(allData){
	let content = "";
	let ageRange = "";
	let data= [];
	
	
    for(let i=0;i< setup.length;i++){
        content+= MapDisciplinNames(setup[i].abk) + "\n\n";
        for(let j=0;j < setup[i].gruppen.length;j++){
            ageRange = returnRange(setup[i].gruppen[j])
            data = createSubset(allData.filter(filter,{abk:setup[i].abk,minAlter:ageRange[0],maxAlter:ageRange[1]})).sort(sortRanking);
            if(data.length !== 0){
	            content+=jsUcfirst(setup[i].gruppen[j]) + "\n";
	            content += "Position"+"\t"+"Name"+"\t"+"Ringe"+"\t"+"Teiler"+"\n";
	            for (var k=0,total=data.length; k<total; k++) {
				    content += (k+1)+"\t"+data[k].name+"\t"+data[k].ringe+"\t"+data[k].teiler+"\n";
				  }
        	}
        }
        content+="\n\n";
    }
    return content;
}

module.exports = {createCSV:createCSV};