document.getElementById('defaultOpen').click();

// eslint-disable-next-line no-unused-vars	
function openTab(evt, header,subContent) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class='tabcontent' and hide them
	tabcontent = document.getElementsByClassName(subContent);
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none';
	}

	// Get all elements with class='tablinks' and remove the class 'active'
	tablinks = document.getElementsByClassName('tablinks');
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '');
	}

	// Show the current tab, and add an 'active' class to the button that opened the tab
	document.getElementById(header).style.display = 'block';
	evt.currentTarget.className += ' active';
}

// eslint-disable-next-line no-unused-vars
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



