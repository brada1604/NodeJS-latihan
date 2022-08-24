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

const yargs = require('yargs')
yargs.version('1.1.0')
// yargs.command({
//  command: 'add',
//  describe: 'Add a new note',
//  handler: function () {
//  console.log('Adding a new note!')
//  }
// })

yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Note body',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function (argv) {
		console.log('Title: ' + argv.title)
		console.log('Body: ' + argv.body)
	}
})
console.log(yargs.argv)