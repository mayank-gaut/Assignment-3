let str = "JavaScript is very powerful!";

// Convert to lowercase
str = str.toLowerCase();

// Vowels to check
let vowels = "aeiou";

// Counters
let vowelCount = 0;
let consonantCount = 0;

// Loop through each character
for (let i = 0; i < str.length; i++) {
  let ch = str[i];
  
  // Check if it's a letter
  if (ch >= 'a' && ch <= 'z') {
    if (vowels.includes(ch)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
}

// Show result
console.log("Vowels:", vowelCount);
console.log("Consonants:", consonantCount);