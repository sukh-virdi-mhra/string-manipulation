import wordCount from "./services/wordCount"
import characterCount from "./services/characterCount"
import averageWordLength from "./services/averageWordLength"
import topKeywords from "./services/topKeywords"

let readline = require('readline')

export default function main(str: string): string{

// let rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// rl.question("Enter your text here... ", (answer: string) : void => {
// console.log(topKeywords(answer))
return(
  `Word Count: ${wordCount(str)}
Character Count: ${characterCount(str)}
Average Word Length: ${averageWordLength(str)}
Top Keywords: ` + JSON.stringify(topKeywords(str)))
}

// main()