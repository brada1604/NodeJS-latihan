const request = require("request");

const url = "http://api.positionstack.com/v1/forward?access_key=96e4d61e6113c70c8a7537df24c6eadd&query=1600 Pennsylvania Ave NW, Washington DC";

request({ url: url }, (error, response) => {
	const data = JSON.parse(response.body);
	if (error) {
		console.log("Error connecting to API");
	} else if (data.data.length == 0) {
		console.log("Unable to find location. Try another search.");
	} else {
		const latitude = data.data[0].latitude;
		const longtitude = data.data[0].longitude;
		console.log(latitude, longtitude);
	}
});