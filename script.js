$(document).ready(function() {
	var mydata = {
			"name": "camera.startSession",
			"parameters": {}
		};
		
    $.ajax({
		type: "POST",
		url: 'http://192.168.1.1/osc/commands/execute',
		headers: {
			'Content-Type':'application/json;charset=utf-8',
			'Accept': 'application/json',
			'Content-Length': mydata.length
		},
		data: mydata,
		success: function(data) {
			alert(data);
		},
		dataType: 'json'
	});
});