function parseRows(json){
    	let html = '';
	html += '<tbody>';
	$.each(json, function(index, value){	
		html += '<tr>';
		html += '<td>'+value.ExternalEndpoint+'</td>';
		html += '<td>'+value.Password+'</td>';
		html += '<td>'+value.ServerName+'</td>';
		html += '<td>'+value.Description+'</td>';
		if(value.Website != ''){
			html += '<td><a href="' + value.Website + '">';
			if(value.WebsiteText != ''){
				html += value.WebsiteText;
			}
			else{
				html += 'URL';
			}
			html += '</a></td>';
		}
		else{
			html += '<td></td>';
		}
			
		html += '<td>'+value.GameMode+'</td>';
		html += '<td>'+value.PlayerCount+'</td>';
		html += '<td>'+value.MaxPlayers+'</td>';
		html += '<td>'+value.ModControl+'</td>';
		html += '<td>'+value.Cheats+'</td>';
		html += '<tr>';
	});
	html += '</tbody>';
    	return html;
}

function parseHeader(json){
    	let html = '';
	html += '<thead>';
	html += '<tr>';
	html += '<th>Address</th>';
	html += '<th>Password</th>';
	html += '<th>Name</th>';
	html += '<th>Description</th>';
	html += '<th>URL</th>';
	html += '<th>Game Mode</th>';
	html += '<th>Players</th>';
	html += '<th>Max players</th>';
	html += '<th>Mod control</th>';
	html += '<th>Cheats</th>';
	html += '</tr>';
	html += '</thead>';
    	return html;
}

function parseServers(json){	
	let html = '<table id="LmpTable" class="tablesorter">';
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
