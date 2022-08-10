if (1 === 1) {
  console.log("1 is equal to 1");
}

let rating = 23;
if (rating === 3) {
  console.log("You got 3 stars!");
} else if (rating === 2) {
  console.log("You got 2 stars!");
} else if (rating === 1) {
  console.log("You got 1 star!");
} else {
  console.log("You got no stars!");
}

let userScore = 1650;
let highScore = 1440;
if (userScore >= highScore) {
  console.log(`You have a new high score of ${userScore}!`);
  highScore === userScore;
} else {
  console.log("oh! sorry about that, you didn't meet up");
}

let password = "hello kitty";
if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Password is valid");
  } else {
    console.log("Password is invalid");
  }
} else {
  console.log("Password must be longer than 6 characters");
}

// Switch
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
        break;
    default:
        console.log("Invalid date")
}
// Ternary operator
let num = 7;
num = 7 ? console.log("lucky") : console.log("bad")

let status = "offline"
let color = status === "offline"? "red" : "black"