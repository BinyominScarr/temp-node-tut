// Arrays

let items = ["item1", "item2"];
module.exports.firstItem = items[0]; 
//{ firstItem: 'item1' }
module.exports = items = ["item1", "item2"]; 
//[ 'item1', 'item2' ]
module.exports.items = ["item1", "item2"]; 
//{ items: [ 'item1', 'item2' ] }

// Objects

let namesObj1 = {
    name1: "al",
    name2: "bob",
    name3: "clyde"
}
module.exports.al = namesObj1.name1; 
//{ al: 'al' }

module.exports = namesObj1 = {
    name1: "al",
    name2: "bob",
    name3: "clyde"
}; 
//{ name1: 'al', name2: 'bob', name3: 'clyde' }

module.exports.namesObj2 = {
    name1: "dave",
    name2: "erick",
    name3: "frank"
}; 
//{ namesObj2: { name1: 'dave', name2: 'erick', name3: 'frank' } }

// Functions

let func1 = name => {
    console.log(name);
}
module.exports.func2 = func1;
//{ func2: [Function: func1] }

module.exports = func = name => {
    console.log(name);   
};
// [Function: func]

module.exports.func = name => {
    console.log(name);   
};
//{ func: [Function (anonymous)] }