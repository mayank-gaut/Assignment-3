// Input data
const input = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student2: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student3: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  }
};

// Create output with averages
const output = {};

for (let student in input) {
  const marks = Object.values(input[student]); // get subject marks as array
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const average = Math.round(total / marks.length); // rounded average

  output[student] = { average };
}

console.log(output);