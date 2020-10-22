const topKeywords = require("../services/topKeywords.js")
test("Returns the Top Keywords", () => {
    testTopKeywords = {"java": 1, "javascript": 3, "python": 1, "react": 1}
    expect(topKeywords("javascript java python react javascript javascript")).toEqual(testTopKeywords)
})