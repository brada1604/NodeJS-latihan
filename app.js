// SECTION 3
// LESSON 3
// const checkUtils = require('./src/utils.js')
// checkUtils()

// const command = process.argv[2]
// if (command === 'add') {
// console.log('Adding note!')
// } else if (command === 'remove') {
// console.log('Removing note!')
// }

// const yargs = require('yargs')
// yargs.version('1.1.0')
// yargs.command({
//  command: 'add',
//  describe: 'Add a new note',
//  handler: function () {
//  console.log('Adding a new note!')
//  }
// })

// const yargs = require('yargs')
// yargs.version('1.1.0')
// yargs.command({
// 	command: 'add',
// 	describe: 'Add a new note',
// 	builder: {
// 		title: {
// 			describe: 'Note title',
// 			demandOption: true,
// 			type: 'string'
// 		},
// 		body: {
// 			describe: 'Note body',
// 			demandOption: true,
// 			type: 'string'
// 		}
// 	},
// 	handler: function (argv) {
// 		console.log('Title: ' + argv.title)
// 		console.log('Body: ' + argv.body)
// 	}
// })
// console.log(yargs.argv)

// const book = {
//  title: 'Ego is the Enemy',
//  author: 'Ryan Holiday'
// }
// // Covert JavaScript object into JSON string
// const bookJSON = JSON.stringify(book)
// // Covert JSON string into object
// const bookObject = JSON.parse(bookJSON)
// console.log(bookObject.title) // Print: Ego is the Enemy
// console.log(bookJSON) // Print: {"title":"Ego is the Enemy","author":"Ryan Holiday"}


// const squareAlt = (x) => x * x
// console.log(squareAlt(2)) // Will print: 4


// const event = {
// 	name: 'Birthday Party',
// 	guestList: ['Andrew', 'Jen', 'Mike'],
// 	printGuestList() {
// 		console.log('Guest list for ' + this.name)

// 		this.guestList.forEach((guest) => {
// 			console.log(guest + ' is attending ' + this.name)
// 		})
// 	}
// }
// event.printGuestList()


// const users = [{
// 	name: 'Andrew Mead',
// 	age: 27
// },{
// 	name: 'George Hudson',
// 	age: 72
// },{
// 	name: 'Clay Klay',
// 	age: 45
// }]
// const user1 = users.find((user1) => user1.name === 'Andrew Mead')
// const user2 = users.find((user2) => user2.name === 'George Hudson')
// const user3 = users.find((user3) => user3.name === 'Clay Klay')
// console.log(user1) // Will print the second object in the array
// console.log(user2) // Will print the second object in the array
// console.log(user3) // Will print the second object in the array


// console.log('Starting')
// // Wait 2 seconds before running the function
// setTimeout(() => {
// 	console.log('2 Second Timer')
// }, 2000)
// console.log('Stopping')
// 


// const request = require('request')
// const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233'
// request({ url: url }, (error, response) => {
// 	// Parse the response body from JSON string into JavaScript object
// 	const data = JSON.parse(response.body)
// 	// Will print the current temperature to the console
// 	console.log(data.currently.temperature)
// })

// const request = require('request')
// const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233'
// request({ url: url, json: true }, (error, response) => {
// 	console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
// })

// const request = require('request')
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => { 
// 	if (error) { 
// 		console.log('Unable to connect to location services!') 
// 	} else if (response.body.features.length === 0) { 
// 		console.log('Unable to find location. Try another search.') 
// 	} else { 
// 		const latitude = response.body.features[0].center[0] 
// 		const longitude = response.body.features[0].center[1] 
// 		console.log(latitude, longitude) 
// 	}
// })

// const geocode = (address, callback) => {
// 	setTimeout(() => {
// 		const data = {
// 			latitude: 0,
// 			longitude: 0
// 		}
// 		callback(data)
// 	}, 2000)
// }
// geocode('Philadelphia', (data) => {
// 	console.log(data)
// })



// const geocode = require('./utils/geocode.js')
// geocode('Boston', (error, data) => {
// 	console.log('Error', error)
// 	console.log('Data', data)
// })


// geocode(address, (error, data) => {
// 	if (error) {
// 		return console.log(error)
// 	}
// 	forecast(data.latitude, data.longitude, (error, forecastData) => {
// 		if (error) {
// 			return console.log(error)
// 		}
// 		console.log(data.location)
// 		console.log(forecastData)
// 	})
// })


// const name = 'Andrew'
// const userAge = 27
// const user = {
// 	name: name,
// 	age: userAge,
// 	location: 'Philadelphia'
// }

// const name = 'Andrew'
// const userAge = 27
// const user = {
// 	name,
// 	age: userAge,
// 	location: 'Philadelphia'
// }
// console.log(user)

// const user = {
// 	name: 'Andrew',
// 	age: 27,
// 	location: 'Philadelphia'
// }
// // The line below uses destructuring
// const { age, location:address } = user
// console.log(age)
// console.log(address)


// const product = {
// 	label: 'Red notebook',
// 	price: 3,
// 	stock: 201,
// 	salePrice: undefined,
// 	rating: 4.2
// }
// const transaction = (type, { label, stock }) => {
// 	console.log(type, label, stock)
// }
// transaction('order', product)


const https = require('https')
const url =
'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/40,-75'
const request = https.request(url, (response) => {
	let data = ''
	response.on('data', (chunk) => {
		data = data + chunk.toString()
	})
	response.on('end', () => {
		const body = JSON.parse(data)
		console.log(body)
	})
})
request.on('error', (error) => {
	console.log('An error', error)
})
request.end()