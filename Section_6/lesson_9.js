const geocode = require("./utils/geocode");

geocode("Ciamis", (error, data) => {
	console.log("Error", error);
	console.log("Data", data);
});