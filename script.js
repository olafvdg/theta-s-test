$(document).ready(function() {
	var mydata = {
			"name": "camera.startSession",
			"parameters": {}
		};
		
    $.ajax({
		type: "GET",
		url: 'http://192.168.1.1/osc/info',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
			//'Content-Length': mydata.length
		},
		//data: JSON.stringify(mydata),
		complete: function(data) {
			alert(JSON.stringify(data));
		},
		dataType: 'json'
	});
});