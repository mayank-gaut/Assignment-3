function countWords(paragraph) {
  // Remove extra spaces and split by space
  let words = paragraph.trim().split(/\s+/);
  return words.length;
}

// Example usage
let para = "JavaScript is a powerful programming language.";
let result = countWords(para);

console.log("Number of words:", result);