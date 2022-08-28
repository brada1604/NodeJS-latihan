const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

const hbs = require('hbs')

// Other lines hidden for brevity
const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)
// Other lines hidden for brevity

// const weatherForm = document.querySelector('form')
// const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')
app.get('', (req, res) => {
	res.render('index', {
		title: 'My title',
		name: 'Andrew Mead'
	})
})
// app.get('/weather', (req, res) => { 
// 	res.send('You provided "' + req.query.address + '" as the address.') 
// })


messageOne.textContent = 'My new text'


// weatherForm.addEventListener('submit', (e) => {
// 	e.preventDefault()
// 	const location = search.value
// 	fetch('http://localhost:3000/weather?address=' +
// 		location).then((response) => {
// 			response.json().then((data) => {
// 				if (data.error) {
// 					console.log(data.error)
// 				} else {
// 					console.log(data.location)
// 					console.log(data.forecast)
// 				}
// 			})
// 		})
// 	})
// app.get('*', (req, res) => {
// 	res.render('404', {
// 		title: '404',
// 		name: 'Andrew Mead',
// 		errorMessage: 'Page not found.'
// 	})
// })
// const greeter = (name = 'user', age) => {
// 	console.log('Hello ' + name)
// }
// greeter('Andrew') // Will print: Hello Andrew
// greeter() // Will print: Hello user

// const transaction = (type, { label, stock = 0 } = {}) => {
// 	console.log(type, label, stock)
// }
// transaction('order')

// fetch('http://localhost:3000/weather?address=Boston').then((response) => {
// 	response.json().then((data) => {
// 		if (data.error) {
// 			console.log(data.error)
// 		} else {
// 			console.log(data.location)
// 			console.log(data.forecast)
// 		}
// 	})
// }) 

app.listen(3000, () => {
	console.log('Server is up on port 3000.')
})
