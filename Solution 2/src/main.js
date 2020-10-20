const wordCount = require("./services/wordCount.js")
const characterCount = require( "./services/characterCount.js")
const averageWordLength = require("./services/averageWordLength.js")
const topKeywords = require("./services/topKeywords.js")

let readline = require('readline')

function main(){

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Enter your text here... ", (answer) => {
// console.log(topKeywords(answer))
console.log(
  `Word Count: ${wordCount(answer)}
Character Count: ${characterCount(answer)}
Average Word Length: ${averageWordLength(answer)}
Top Keywords: ` + JSON.stringify(topKeywords(answer)))
})}

main()