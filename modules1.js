// Common js,every file is module(by default)
// modules-encapsulated code (only share minimum);

const names = require("./4_names")//require used for getting data from exports.
const sayHi = require("./5_utlis");
// console.log(names); testing


// sayHi("susan");
// sayHi(names.john);
// sayHi(names.peter);




// alternative method
// const data = require("./6_alternative_method");
// console.log(data);


// mind_granade
require("./7_mind_granade");