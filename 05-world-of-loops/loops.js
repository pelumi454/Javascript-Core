// example 1
for (let i = 1; i <= 10; i++) {
  console.log("Hello", i);
}

// 2
const examScores = [99, 88, 78, 95, 83, 33];
for (let i = 0; i < examScores.length; i++) {
  console.log(i, examScores[i]);
}

//3
const myStudents = [
  {
    firstName: "Arthemis",
    grade: 86,
  },
  {
    firstName: "Zeus",
    grade: 98,
  },
  {
    firstName: "Hera",
    grade: 34,
  },
  {
    firstName: "Apollos",
    grade: 67,
  },
];

for (let i = 0; i < myStudents.length; i++) {
  let students = myStudents[i];
  console.log(`${students.firstName} got ${students.grade}`);
}

// number guesser using while loop
const target = Math.floor(Math.random() * 10);
let guess;

while (guess !== target) {
  console.log(`Target: ${target}, Guess: ${guess} `);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess${guess}`);
console.log("Congratulations you win!");

// example
const magicSquare = [
  [2, 7, 6],
  [4, 7, 4],
  [5, 6, 4],
];
for (let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i];
  let total = 0;
  for (j = 0; j < row.length; j++) {
    // console.log(row[j])
    total += row[j];
    }
    console.log(`${row} summed up to ${total}`)
}
