let LATITUDE;
let LONGITUDE;
const API_KEY = "2bbe0c3e7a31fbc13a839ee37bbe975f";

function usersLocation() {
	navigator.geolocation.getCurrentPosition(getCurrentLocation);
}
function getCurrentLocation (position) {
	$('.tempText').remove();
	currentPosition = position;
	LATITUDE = currentPosition.coords.latitude;
	LONGITUDE = currentPosition.coords.longitude;

	$.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=' + LATITUDE + '&lon=' + LONGITUDE  + '&units=imperial&APPID=' + API_KEY, function( response ) {
	let locationName = response.name;
	let temp = response.main.temp;
	let desc = response.weather[0].description;

	if (temp >= 70) {
		$('body').css({
			'background' : 'url(assets/img/sun.jpg) no-repeat center center fixed',
			'background-size' : 'cover'	
		})
	} else if ( temp >= 64 && temp < 70) {
		$('body').css({
			'background' : 'url(assets/img/hazy.jpg) no-repeat center center fixed',
			'background-size' : 'cover'	
		})
	}

	$('#form-container').before('<p class="tempText">' + temp + '  F<br> ' + desc + '</p>');
	$('#locationText').html('<i class="fas fa-map-marker-alt"></i> ' + locationName);
})

}

$('#locationButton').on('click', usersLocation);

console.log(LATITUDE);
console.log(LONGITUDE);




function loadData() {
	$('.tempText').remove();
	//Get the input of the user
	const LOCATION = $('#city').val();
	//create API URL
	let apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + LOCATION + "&units=imperial&APPID=" + API_KEY;

	$.getJSON(apiURL, function( response ) {
		console.log(response);
		locationName = response.name;
		temp = response.main.temp;
		desc = response.weather[0].description;

		if (temp >= 70) {
			$('body').css({
				'background' : 'url(assets/img/sun.jpg) no-repeat center center fixed',
				'background-size' : 'cover'	
			})
		} else if ( temp >= 64 && temp < 70) {
			$('body').css({
				'background' : 'url(assets/img/hazy.jpg) no-repeat center center fixed',
				'background-size' : 'cover'	
			})
		}

		$('#form-container').before('<p class="tempText">' + temp + '  F<br> ' + desc + '</p>');
		$('#locationText').html('<i class="fas fa-map-marker-alt"></i> ' + locationName);
	})

	return false;
}

$('#submit-btn').on('click', loadData);