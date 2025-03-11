const os = require('os')

console.log(os.userInfo());
console.log(os.uptime());


const obj = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem : os.freemem()
}

// Update the console.log statement to display the complete object
console.log('main methods of os module-', obj);
