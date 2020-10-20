const wordCount = require("./services/topKeywords.js")
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
    console.log("The Word Count is:", wordCount(answer))
    console.log("The Character Count is:", characterCount(answer)), 
    console.log("The Average Word Length is:", averageWordLength(answer)), 
    console.log("The Top Keywords are:", topKeywords(answer))
    rl.close()
  })
}

main()