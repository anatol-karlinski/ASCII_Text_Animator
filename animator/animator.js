$( document ).ready(function() {
	
	console.log("Document ready.");
	
	animacjaPrzejsciaZPotrzepieniem(
		'ascii_table',
		'down',
		4, 
		400, 
		'gray',
		'Solid'
	);

});

// Animacje

function animacjaPrzejscia(table, direction, steps ,delay, palet, charSet){

	var rowCount = $('#' + table + ' tr').length;
	var columnCount = $('#' + table + ' td').length / rowCount;
	var mainTable = document.getElementById(table);
	var $point, $point2, $point3;
	
	var pointArray = new Array();
	var stringPointArray = new Array();
	  

	console.log("Animation start.");
	
	switch (direction)
	{
		case 'up': 
		
		for (i = 0; i < rowCount; i++){
			for (j = 0; j < columnCount; j++){
				
				pointArray = [];
				stringPointArray = [];
				if (i + steps > rowCount){steps = rowCount - i}
				
				for (k = 0; k < steps; k++){
					pointArray.push($(mainTable.rows[rowCount-i-1-k].cells[columnCount-j-1].children[0]));
					stringPointArray.push(pointArray[k].text());
				}
				zmienKolor(pointArray, stringPointArray, delay*i, palet, charSet);
			}
		}
		
		break;
   
		case 'down': 
		
		for (i = 0; i < rowCount; i++){
			for (j = 0; j < columnCount; j++){
				
				pointArray = [];
				stringPointArray = [];
				
				if (i + steps > rowCount){steps = rowCount - i}
				
				for (k = 0; k < steps; k++){
					pointArray.push($(mainTable.rows[i+k].cells[j].children[0]));
					stringPointArray.push(pointArray[k].text());
				}
				zmienKolor(pointArray, stringPointArray, delay*i, palet, charSet);
			}
		}
		
		break;
		
		case 'right': 
		
		for (i = 0; i < columnCount; i++){
			for (j = 0; j < rowCount; j++){
				
				pointArray = [];
				stringPointArray = [];
				
				if (i + steps > columnCount){steps = columnCount - i}
				
				for (k = 0; k < steps; k++){
					pointArray.push($(mainTable.rows[j].cells[i+k].children[0]));
					stringPointArray.push(pointArray[k].text());
				}
				zmienKolor(pointArray, stringPointArray, delay*i, palet, charSet);
			}
		}
		
		break;
		
		case 'left': 
		
		for (i = 0; i < columnCount; i++){
			for (j = 0; j < rowCount; j++){
				
				pointArray = [];
				stringPointArray = [];
				
				if (i + steps > columnCount){steps = columnCount - i}
				
				for (k = 0; k < steps; k++){
					pointArray.push($(mainTable.rows[rowCount-j-1].cells[columnCount-i-1-k].children[0]));
					stringPointArray.push(pointArray[k].text());
				}
				zmienKolor(pointArray, stringPointArray, delay*i, palet, charSet);
			}
		}
		
		break;
   
		default: 
		
		for (i = 0; i < rowCount; i++){
			for (j = 0; j < columnCount; j++){
				
				pointArray = [];
				stringPointArray = [];
				
				if (i + steps > rowCount){steps = rowCount - i}
				
				for (k = 0; k < steps; k++){
					pointArray.push($(mainTable.rows[i+k].cells[j].children[0]));
					stringPointArray.push(pointArray[k].text());
				}
				zmienKolor(pointArray, stringPointArray, delay*i, palet, charSet);
			}
		}
		break;
		
	}
}

function animacjaPrzejsciaZPotrzepieniem(table, direction, steps ,delay, palet, charSet){

	var rowCount = $('#' + table + ' tr').length;
	var columnCount = $('#' + table + ' td').length / rowCount;
	var mainTable = document.getElementById(table);
	var $point, $point2, $point3;
	
	var pointArray = new Array();
	var stringPointArray = new Array();
	  

	console.log("Animation start.");
	
	
	switch (direction)
	{
		case 'up': 
		
		var offsetArray = generujWzorPostrzepienia(columnCount, steps);

		for (i = 0; i < rowCount; i++){
			for (j = 0; j < columnCount; j++){
				
				pointArray = [];
				stringPointArray = [];
				if (i + steps > rowCount){steps = rowCount - i}
				
				for (k = 0; k < steps; k++){
					pointArray.push($(mainTable.rows[rowCount-i-1-k].cells[columnCount-j-1].children[0]));
					stringPointArray.push(pointArray[k].text());
				}
				zmienKolorZPostrzepieniem(pointArray, stringPointArray, delay*i, palet, charSet, offsetArray[j]);
			}
		}
		
		break;
   
		case 'down': 
		
		var offsetArray = generujWzorPostrzepienia(columnCount, steps);

		for (i = 0; i < rowCount; i++){
			for (j = 0; j < columnCount; j++){
				
				pointArray = [];
				stringPointArray = [];
				
				if (i + steps > rowCount){steps = rowCount - i}
				
				for (k = 0; k < steps; k++){
					pointArray.push($(mainTable.rows[i+k].cells[j].children[0]));
					stringPointArray.push(pointArray[k].text());
				}
				zmienKolorZPostrzepieniem(pointArray, stringPointArray, delay*i, palet, charSet, offsetArray[j]);
			}
		}
		
		break;
		
		case 'right': 
		
		var offsetArray = generujWzorPostrzepienia(rowCount, steps);

		for (i = 0; i < columnCount; i++){
			for (j = 0; j < rowCount; j++){
				
				pointArray = [];
				stringPointArray = [];
				
				if (i + steps > columnCount){steps = columnCount - i}
				
				for (k = 0; k < steps; k++){
					pointArray.push($(mainTable.rows[j].cells[i+k].children[0]));
					stringPointArray.push(pointArray[k].text());
				}
				zmienKolorZPostrzepieniem(pointArray, stringPointArray, delay*i, palet, charSet, offsetArray[j]);
			}
		}
		
		break;
		
		case 'left': 
		
		var offsetArray = generujWzorPostrzepienia(rowCount, steps);

		for (i = 0; i < columnCount; i++){
			for (j = 0; j < rowCount; j++){
				
				pointArray = [];
				stringPointArray = [];
				
				if (i + steps > columnCount){steps = columnCount - i}
				
				for (k = 0; k < steps; k++){
					pointArray.push($(mainTable.rows[rowCount-j-1].cells[columnCount-i-1-k].children[0]));
					stringPointArray.push(pointArray[k].text());
				}
				zmienKolorZPostrzepieniem(pointArray, stringPointArray, delay*i, palet, charSet, offsetArray[j]);
			}
		}
		
		break;
   
		default: 
		
		for (i = 0; i < rowCount; i++){
			for (j = 0; j < columnCount; j++){
				
				pointArray = [];
				stringPointArray = [];
				
				if (i + steps > rowCount){steps = rowCount - i}
				
				for (k = 0; k < steps; k++){
					pointArray.push($(mainTable.rows[i+k].cells[j].children[0]));
					stringPointArray.push(pointArray[k].text());
				}
				zmienKolor(pointArray, stringPointArray, delay*i, palet, charSet);
			}
		}
		break;
		
	}
}

// Manipulacja kolorami

function zmienKolor(pointArray, dupPointArray, delayTime, palet, charSet){
	var steps = pointArray.length;
	
	$(pointArray[0])
		.delay(delayTime)
		.queue(function () { 
			for (i = 0; i <= steps; i++){
				if ($(pointArray[steps-i]).text() != " " && i != steps){
					$(pointArray[steps-i]).text(losowyZnak(charSet));
					
				}else if (i == steps){
					$(pointArray[steps-i]).text(dupPointArray[steps-i]);
				}
				
				$(pointArray[steps-i]).css('color', kolorDlaStopnia(steps-i, steps, palet));

			}
		});
}

function zmienKolorZPostrzepieniem(pointArray, dupPointArray, delayTime, palet, charSet, offset){
	var steps = pointArray.length;
	var currentStep, offset, aaaaa;
	$(pointArray[0])
		.delay(delayTime)
		.queue(function () { 
			for (i = 0; i <= steps; i++){
				
				currentStep = steps-i;
				if (currentStep - offset >= 0){
					currentStep -= offset;
				}else{
					currentStep = 0;
				}
				
				//znaki 
				
				if ($(pointArray[steps-i]).text() != " " && i != steps){
					$(pointArray[steps-i]).text(losowyZnak(charSet));
					
				}else if (i == steps){
					$(pointArray[steps-i]).text(dupPointArray[steps-i]);
				}
				
				// kolor
				

				
				$(pointArray[steps-i]).css('color', kolorDlaStopnia(currentStep, steps, palet));

			}
		});
}

function kolorDlaStopnia(currentStep, stepsTotal, palet){
	var step = zaokraglij(currentStep/stepsTotal*10);
	
		switch (palet)
	{
		case 'gray':
			color = ["#000000", "#1C1C1C", "#383838", "#555555", "#717171", "#8D8D8D", "#AAAAAA", "#C6C6C6", "#E2E2E2", "#FFFFFF"];
		break;
		
		case 'fab':
			color = ["#E5000F", "#E06A00", "#DADC00", "#61D800", "#00D412", "#00CF81", "#00AACB", "#003BC7", "#2E00C3", "#9400BF"];
		break;
		
		default:
			color = ["#000000", "#1C1C1C", "#383838", "#555555", "#717171", "#8D8D8D", "#AAAAAA", "#C6C6C6", "#E2E2E2", "#FFFFFF"];
		break;
	}
	
	return color[step];
}

// Reszta

function generujWzorPostrzepienia(height, width){
	var offsetArray = new Array(height);
	for (i = 0; i<height; i++){
		offsetArray[i] = losowaLiczbaZPrzedzialu(0, width);
	}
	return offsetArray;
	
}

function losowyZnak (type){
	
	var characters = new Array();
	
	switch (type)
	{
		case 'Solid': 
		characters = ["█"];
	break;
		case 'ExtendedSet1': 
		characters = ["█", "▓", "▒", "░", "▄", "▀"];
	break;
	
		case 'ExtendedSet2': 
		characters = ["║", "║", "╔", "╗", "╒", "╕", "╓", "╕", "╚", "╝", "═", "╬", "╫", "╪"];
	break;
	
		case 'NumbersSet':
		characters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
	break;
	
		case 'BinarySet':
		characters = ["0", "1"];
	break;
	
		case 'LettersSmall':
		characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "w", "x", "y", "z"];
	break;
	
		case 'LettersBig':
		characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "W", "X", "Y", "Z"];
	break;
	
		default:
		characters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
	break;
	
	
	} 
	var character = characters[Math.floor(Math.random()*characters.length)];
	return character;
}

function losowaLiczbaZPrzedzialu(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function zaokraglij(num){
	return Math.floor(num + 0.5);
}