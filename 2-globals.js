// __dirname - path to current directory
// __filename - path to current file
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about environment where the program is being executed

console.log(__dirname);
console.log(__filename);

setInterval(() => {
    console.log("hello world")
}, 1000);