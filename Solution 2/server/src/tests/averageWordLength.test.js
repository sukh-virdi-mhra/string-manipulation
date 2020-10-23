const averageWordLength = require("../services/averageWordLength.js")
test("Returns the Average Word Length", () => {
    testAverageWordLength = "4.00"
    expect(averageWordLength("Test Case")).toBe(testAverageWordLength)
})