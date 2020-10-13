var input = document.querySelectorAll('textarea')[0]
  characterCount = document.querySelector('#characterCount')
  wordCount = document.querySelector('#wordCount')
  sentenceCount = document.querySelector('#sentenceCount')  
  averageWords = document.querySelector('#averageWords')
  
input.addEventListener('keyup', function() {
  
  console.clear();
  

  var characters = input.value.length //- input.value.split(" ").length + 1;
  characterCount.innerHTML = characters
  
  var words = input.value.match(/\b[-?(\w+)?]+\b/gi);

  if (words) {
    wordCount.innerHTML = words.length;
  } else {
    wordCount.innerHTML = 0;
  }

  if (words) {
    var sentences = input.value.split(/[.|!|?]+/g);
    var averageWordCharacters = words.toString().length - (words.length - 1);
    var averageWordsjs = (averageWordCharacters / words.length)
    console.log(words.toString())
    sentenceCount.innerHTML = sentences.length - 1;
    averageWords.innerHTML = averageWordsjs
  } else {
    sentenceCount.innerHTML = 0;
    averageWords.innerHTML = 0;
  }

});