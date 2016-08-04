$(document).ready(function() {	
    $.ajax({
		type: "POST",
		url: 'http://192.168.1.1:80/osc/commands/execute',
		data: JSON.stringify({
			"name": "camera.startSession",
			"parameters": {}
		}),
		complete: function(data) {
			alert(JSON.stringify(data));
		},
		dataType: 'json'
	});
});