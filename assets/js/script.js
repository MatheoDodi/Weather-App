function loadData() {
	$('.tempText').remove();
	//Open Weather API Key
	const API_KEY = "2bbe0c3e7a31fbc13a839ee37bbe975f";
	//Get the input of the user
	const LOCATION = $('#city').val();
	//create API URL
	let apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + LOCATION + "&units=imperial&APPID=" + API_KEY;
	console.log(apiURL);

	$.getJSON(apiURL, function( response ) {
		console.log(response);
		let locationName = response.name;
		let temp = response.main.temp;
		let desc = response.weather[0].description;
		$('#form-container').before('<p class="tempText">' + temp + '  F<br> ' + desc + '</p>');
		$('#locationText').html('<i class="fas fa-map-marker-alt"></i> ' + locationName);
	})

	return false;
}

$('#submit-btn').on('click', loadData);