//the OS module
const os = require ('os');

//info about current user
const user = os.userInfo()

console.log(user);

//system uptime module
console.log(`The system uptime is : ${os.uptime()} seconds `);

//more examples
const currentOS = {
    name :os.type(),
    release : os.release(),
    totalMemory: os.totalmem(),
    freeMemory : os.freemem(),
    hostname : os.hostname
}

console.log(currentOS);