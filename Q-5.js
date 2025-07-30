
function correctfn(string, wrong, correct) {
  return string.replace(wrong, correct);
}

// Example usage:
let sentence = "I love Javscript programming";
let fixedSentence = correctfn(sentence, "Javscript", "JavaScript");

console.log(fixedSentence);
