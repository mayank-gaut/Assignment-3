const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

// Use map to create a new array with average scores
const output = students.map(student => {
  const total = student.scores.reduce((sum, score) => sum + score, 0);
  const average = total / student.scores.length;
  return { name: student.name, average: Math.round(average) };
});

console.log(output);