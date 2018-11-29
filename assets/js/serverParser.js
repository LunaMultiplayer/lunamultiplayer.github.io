function parseRows(json){
    	let html = '';
	html += '<tbody>';
	$.each(json, function(index, value){	
		html += '<tr>';
		html += '<td>'+value.ExternalEndpoint+'</td>';		
		html += '<td>'+value.Country+'</td>';
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
		switch (value.GameMode) {
		    case 0:
			html += '<td>Sandbox</td>';
			break;
		    case 1:
			html += '<td>Science</td>';
			break;
		    case 2:
			html += '<td>Career</td>';
			break;
		}
		html += '<td>'+value.PlayerCount+'</td>';
		html += '<td>'+value.MaxPlayers+'</td>';		
		html += '<td>'+value.Dedicated+'</td>';
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
	html += '<th>Country</th>';
	html += '<th>Password</th>';
	html += '<th>Name</th>';
	html += '<th>Description</th>';
	html += '<th>URL</th>';
	html += '<th>Game Mode</th>';
	html += '<th>Players</th>';
	html += '<th>Max players</th>';
	html += '<th>Dedicated</th>';
	html += '<th>Mod control</th>';
	html += '<th>Cheats</th>';
	html += '</tr>';
	html += '</thead>';
    	return html;
}

function parseServers(json){	
	let html = '<table id="serverstable" class="tablesorter">';
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
			$("#waitForServers").remove();
			var response = JSON.parse(this.responseText);
			$('#serverscontainer').html(parseServers(response));
			$("#serverstable").tablesorter( {sortList: [[7,1]]} ); 					
		}
	}
	xhr.open("GET", request);
	xhr.setRequestHeader("Accept", 'application/json');
	xhr.send();	
}
