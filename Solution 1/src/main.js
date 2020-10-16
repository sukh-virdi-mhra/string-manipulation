//User stories:
//Shows the number of characters - Done
//Shows the number of words - Done
//Shows the average word length - Done
//Shows the top keywords - Done

let input = document.querySelectorAll('textarea')[0]
  characterCount = document.querySelector('#characterCount')
  wordCount = document.querySelector('#wordCount')
  averageWordLength = document.querySelector('#averageWordLength')
  topKeywords = document.querySelector('#topKeywords')
  
input.addEventListener('keyup', function() {

  console.clear()

  var characters = input.value.length //- input.value.split(" ").length + 1;
  characterCount.innerHTML = characters
  
  var words = input.value.match(/\b[-?(\w+)?]+\b/gi)

  if (words) {
    wordCount.innerHTML = words.length
  } else {
    wordCount.innerHTML = 0
  }

  if (words) {
    var averageWordCharacters = words.toString().length - (words.length - 1)
    var averageWordLengthjs = (averageWordCharacters / words.length)
    averageWordLength.innerHTML = averageWordLengthjs.toFixed(2)
  } else {
    averageWordLength.innerHTML = 0
  }

  if (words) {
    var selectedWords = [];
    for (var i = 0; i < words.length; i++) {
      selectedWords.push(words[i].toLowerCase());
    }
    
    var keywords = {};
    for (var i = 0; i < selectedWords.length; i++) {
    
      if(selectedWords[i] in keywords) {
        keywords[selectedWords[i]] += 1;
      } else {
        keywords[selectedWords[i]] = 1;
      }
    }
    
    var sortedKeywords = [];
    for (var keyword in keywords){
      sortedKeywords.push([keyword, keywords[keyword]])  
    }
    sortedKeywords.sort(function(a, b) {return b[1] - a[1]});

    topKeywords.innerHTML = "";
    for (var i = 0; i < sortedKeywords.length && i < 4; i++) {
      var li = document.createElement('li');
      li.innerHTML = "" + sortedKeywords[i][0] + " " + sortedKeywords[i][1];
      topKeywords.appendChild(li);
    }
  }

})