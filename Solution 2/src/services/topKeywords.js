function topKeywords(str) {
  let words = str.replace(/[.]/g, '').split(/\s/);
  let freqMap = {}
  words.forEach(function(w) {
      if (!freqMap[w]) {
          freqMap[w] = 0;
      }
      freqMap[w] += 1;
  });

  return freqMap
}

module.exports = topKeywords