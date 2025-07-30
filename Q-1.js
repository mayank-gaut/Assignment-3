// Step 1: Create an array of Indian state names
const states = [
  "Andhra Pradesh", "Bihar", "Uttar Pradesh", "Karnataka",
  "Odisha", "Tamil Nadu", "Maharashtra", "Assam", "Punjab", "Gujarat"
];

// Step 2: Define a function to check if a name starts with a vowel
const startsWithVowel = name => /^[AEIOU]/i.test(name);

// Step 3: Use filter to remove names starting with a vowel
const filteredStates = states.filter(state => !startsWithVowel(state));

// Step 4: Output the result
console.log(filteredStates);
