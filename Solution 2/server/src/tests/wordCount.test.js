const wordCount = require("../services/wordCount.js")
test("Returns the Word Count", () => {
    testWordCount = 2
    expect(wordCount("github github")).toBe(testWordCount)
})