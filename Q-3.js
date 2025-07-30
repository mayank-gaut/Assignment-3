let string = 'INDIA';

// Step 1: Convert the string to an array of characters
let arr = string.split(''); // ['I', 'N', 'D', 'I', 'A']

// Step 2: Use splice to insert ['O', 'N', 'E', 'S'] at position 3
arr.splice(3, 0, 'O', 'N', 'E', 'S');

// Step 3: Join the array back into a string
let result = arr.join('');

// Step 4: Output the result
console.log(result);
