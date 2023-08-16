//in order to access the exported variables we use require
const names = require("./3-names");
const sayhi = require("./4-utils");
const data = require("./5-alternative-flavor").default;

//note when there is a function in a module the code will run even though it is not assigned tp a variable

require("./6-mind-grenade");

sayhi("susan");
sayhi(names.john);
sayhi(names.eve);

console.log(names);
console.log(data);
