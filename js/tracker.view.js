var CORE_DATA = {
	caste: [
		"dawn", "zenith", "night", "zenith", "eclipse", "other"
	],
	attributes:[
		"strength", "charisma", "perception",
		"dexterity", "manipulation", "intelligence",
		"stamina", "appearance", "wits"		  
	],
	abilities: [
		"archery", "athletics", "awareness", "brawl", "bureaucracy", "craft", "dodge",
		"integrity", "investigation", "larceny", "linguistics", "lore", "martial arts",
		"medicine", "melee", "occult", "performance", "presence", "resistance", "ride",
		"sail", "socialize", "stealth", "survival", "thrown", "war"
	]
};

$(document).ready(function(){
	
	var temp;
	
	for(var i = 0; i < CORE_DATA.caste.length; i++){
		$('#caste').append($('<option>', {
			value: CORE_DATA.caste[i],
			text: CORE_DATA.caste[i]
		}));
	}
	
	for(var i = 0; i < CORE_DATA.abilities.length; i++){
		$('#supernal').append($('<option>', {
			value: CORE_DATA.abilities[i],
			text: CORE_DATA.abilities[i]
		}));
	}
	
	for(var i = 0; i < CORE_DATA.attributes.length; i++){
		
		var temp = '<tr><td>' +
		CORE_DATA.attributes[i] +
		'</td><td>';
		i++;
		temp += '<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">' +
		CORE_DATA.attributes[i] +
		'</td><td>';
		i++;
		temp += '<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">' +
		CORE_DATA.attributes[i] +
		'</td><td>' +
		'<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">' +
		'</td></tr>';
		
		$('#attributes tr:last').after(temp);
	}
	
	for(var i = 0; i < CORE_DATA.abilities.length; i++){
		var temp = '<tr><td>' +
		'<input type="checkbox">' +
		CORE_DATA.abilities[i] +
		'</td><td>' + 
		'<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">' +
		'</td></tr>';
		$('#abilities tr:last').after(temp);
	}
	
	for(var i = 0; i < 10; i++){
		var temp = '<tr><td><input type="text">' +
		'</td><td>' + 
		'<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">' +
		'<td><input type="text">' +
		'</td><td>' + 
		'<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">' +
		'</td></tr>';
		$('#merits tr:last').after(temp);
	}
	
	temp = '<tr><td>' +
	'<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">' +
	'<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">' +
	'</td></tr>';
	$('#willpower tr:last').after(temp);
	$('#willpower tr:last').after(temp);
	
	temp = '<tr><td>' +
	'<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">' +
	'<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">' +
	'</td></tr><tr><td> </td></tr>';
	$('#limitbreak tr:last').after(temp);

});
