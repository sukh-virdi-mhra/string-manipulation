var input = document.querySelectorAll('textarea')[0]
  characterCount = document.querySelector('#characterCount')
  wordCount = document.querySelector('#wordCount')
  sentenceCount = document.querySelector('#sentenceCount')  
  averageWordLength = document.querySelector('#averageWordLength')
  
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
    var sentences = input.value.split(/[.|!|?]+/g)
    sentenceCount.innerHTML = sentences.length - 1
  } else {
    sentenceCount.innerHTML = 0
  }

});