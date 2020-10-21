import wordCount from "./services/wordCount"
import characterCount from "./services/characterCount"
import averageWordLength from "./services/averageWordLength"
import topKeywords from "./services/topKeywords"

let readline = require('readline')

function main(){

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Enter your text here... ", (answer: string) : void => {
// console.log(topKeywords(answer))
console.log(
  `Word Count: ${wordCount(answer)}
Character Count: ${characterCount(answer)}
Average Word Length: ${averageWordLength(answer)}
Top Keywords: ` + JSON.stringify(topKeywords(answer)))
})}

main()