
const names = require('./4-names') ;
const sayHi = require('./5-util');
const data = require('./6-alternative-flavor');
console.log(data)
require('./7-mind-gernade')

// sayHi('jino')
// sayHi(names.john)
// sayHi(names.peter)

const os = require('os');

// info about current user

const user =os.userInfo()
console.log(user);

// method return teh system uptime in seconds

console.log(`the system uptime is ${os.uptime()} seconds}`)


const curentOS = {
    name:os.type(),
    release:os.release(),
    freeMem:os.freemem(),
}

console.log(curentOS)