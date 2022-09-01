const request = require('request')

const url = 'https://data.covid19.go.id/public/api/prov.json'

request({ url: url }, (error, response) => {
	// Parse the response body from JSON string into JavaScript object
	const data = JSON.parse(response.body)

	// Will print the current temperature to the console
	console.log("Jumlah Kasus Covid Indonesia : " + data.list_data[0].jumlah_kasus)
	console.log("Jumlah Kasus Sembuh Indonesia : " + data.list_data[0].jumlah_sembuh)
})