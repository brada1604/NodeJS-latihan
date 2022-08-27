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


const request = require('request')
const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233'
request({ url: url }, (error, response) => {
	// Parse the response body from JSON string into JavaScript object
	const data = JSON.parse(response.body)
	// Will print the current temperature to the console
	console.log(data.currently.temperature)
})