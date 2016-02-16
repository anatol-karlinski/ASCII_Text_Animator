$( document ).ready(function() {
	console.log("Document ready.");
	getRawAsciiContent();
});

function getRawAsciiContent() {
   $.get('ascii_source2.txt', function(data) {
		console.log("Text file loaded.");
        processAscii(data);
	}, 'text');
} 

function processAscii(data) {
	var width = data.indexOf("\r\n");
	data = data.replace(/(\r\n|\n|\r)/gm,"");
	var i = 0, j = 0;
	var mainTable = new Array();
	
	while (!isNaN(data.charCodeAt(i))){
		var tempTable = new Array();
		for (j = 0; j<width; j++){
			tempTable.push(data.charAt(i));
			i++;
		}
		mainTable.push(tempTable);
	}
	
	console.log("Ascii to array transition complete.");
	createTable(mainTable.length,mainTable[1].length,mainTable);
}


function createTable(height, width, mainTable){
	
	for (i = 0; i<height-1; i++){		
		var row = "<tr>";
		for (j=0; j<width-1; j++){
			row = row + "<td><div>" + mainTable[i][j] + "</div></td>";
		}
		row = row + "</tr>";
		$('#ascii_table > tbody:last-child').append(row);

	}
	console.log("Ascii to table transition complete.");

}