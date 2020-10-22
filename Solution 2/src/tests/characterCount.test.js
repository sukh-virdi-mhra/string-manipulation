const characterCount = require("../services/characterCount.js")
test("Returns the Character Count", () => {
    testCharacterCount = 19
    expect(characterCount("This is a test case")).toBe(testCharacterCount)
})