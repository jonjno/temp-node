// npm --version'


// npm  i  <packageName>

// npm install -g <packageName> can be used in any project

// package.json -  stores importnat info about our Project
// manual approach (Create packahe.json in the route)
// npm init (step by step process)
// npm init -y(everything default)

const _= require('lodash');
const item =[1,[2,[3,[4]]]]
const newItem = _.flattenDeep(item)
console.log(newItem)