function parseRows(json){
    let html = '';
		$.each(json, function(index, value){
			html += '<tr>';
			$.each(value, function(index2, value2){
				html += '<td>'+value2+'</td>';
			});
			html += '<tr>';
		});
    
    return html;
}

function parseHeader(json){
    let html = '';
		html += '<tr>';
		$.each(json[0], function(index, value){
			html += '<th>'+index+'</th>';
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
			return parseServers(response);
		}
	}
	xhr.open("GET", request);
	xhr.setRequestHeader("Accept", 'application/json');
	xhr.send();	
}
