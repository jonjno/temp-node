const {readFileSync,writeFileSync} = require('fs');
console.log("strat")

const first =readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first,second);

// create file and add and then rewrite 
writeFileSync('./content/result-syn.txt',
`Here is the result ${first}',${second}`,
{flag:'a'})

console.log("done with the stack");
console.log("startung the next one");

// strat
// Hello this is first text file Hello this is second text file
// done with the stack
// startung the next one