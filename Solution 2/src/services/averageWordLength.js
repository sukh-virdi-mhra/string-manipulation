function averageWordLength (str) {
  var wordCount = str.split(" ").length;
  var wordArray = str.split(" ");
  var string = 0;
  for (var i = 0; i < wordCount; i++){
    string += wordArray[i].length;
  }
  var averageWordLength = string / wordCount;
  return averageWordLength.toFixed(2)
}

module.exports = averageWordLength