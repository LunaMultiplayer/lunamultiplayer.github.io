Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

function ignoreIndex(index){
	let indexesToIgnore = ["Id", "InternalEndpoint", "ServerVersion", "DisplayedPing", 
			       "Ping", "WebsiteText", "WarpMode", "TerrainQuality", 
			       "VesselUpdatesSendMsInterval", "SecondaryVesselUpdatesSendMsInterval", 
			       "DropControlOnVesselSwitching", "DropControlOnExitFlight", "DropControlOnExit", 
			       "ShowVesselsInThePast"];
	
	return indexesToIgnore.contains(index);
}

function parseRows(json){
    	let html = '';
	$.each(json, function(index, value){	
		html += '<tr>';
		$.each(value, function(index2, value2){
			if (ignoreIndex(index2) == false){
				html += '<td>'+value2+'</td>';
			}
		});
		html += '<tr>';
	});
    	return html;
}

function parseHeader(json){
    	let html = '';
	html += '<tr>';
	$.each(json[0], function(index, value){
		if (ignoreIndex(index) == false){
			html += '<th>'+index+'</th>';
		}
	});
	html += '</tr>';    
    	return html;
}

function parseServers(json){	
	let html = '<table class="table table-striped">';		
    	html += parseHeader(json);
	html += parseRows(json, html);    
	html += '</table>';
	return html;
}

function getServers(url){	
	let request = url;	
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			var response = JSON.parse(this.responseText);
			$('.table').html(parseServers(response));
		}
	}
	xhr.open("GET", request);
	xhr.setRequestHeader("Accept", 'application/json');
	xhr.send();	
}
