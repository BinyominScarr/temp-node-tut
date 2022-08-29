const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf-8", (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = res;
    readFile("./content/second.txt", "utf-8", (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = res;
        writeFile("./content/async-combined-result.txt", `Here is the result: ${first}, ${second}. `, {flag: "a"}, (err, res) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("done with this task");
        });
    });
});
console.log("starting the next one");

/*
start
starting the next one
done with this task
*/