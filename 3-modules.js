// CommonJS, every file is a module (by default)
// Modules - "Encapsulated Code" (only share minimum)
const { john, peter } = require("./4-names"); // john peter (as seperate variables)
const sayHi = require("./5-utils");
require("./7-mind-grenade"); //Since file contains an invoked function, said function will invoke upon import (require)

sayHi(john);
sayHi(peter);






