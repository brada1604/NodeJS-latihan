// SECTION 3
// LESSON 3
// const checkUtils = require('./src/utils.js')
// checkUtils()

const command = process.argv[2]
if (command === 'add') {
console.log('Adding note!')
} else if (command === 'remove') {
console.log('Removing note!')
}