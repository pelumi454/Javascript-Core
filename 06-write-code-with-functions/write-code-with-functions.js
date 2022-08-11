// functions 
function rollDice () {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`You rolled a ${roll}`);
}

function throwDice(numDice) {
    for (let i = 0; i < numDice; i++) {
        rollDice();
    }
}

//exercise 
// write a function to check if a password is invalid for these conditions
function isValidPassword(password, username) {
    if (password.length <= 8) {
        return false;
    }
    if (password.indexOf(' ') !== -1) {
        return false;
    }
    if (password.indexOf(username) !== -1) {
        return false;
    }
    return true;
}

// exercise 2
// find the average value in an array of numbers
function avg(arr) {
    let total = 0;
    for (let num of arr) {
        total += num
    }
    let res = total / arr.length
    return res;
}

// excercise 3
//write a function to see if every letter of the alphabet is contained in a sentence else return false
function isPangram(sentence) {
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (sentence.toLowerCase().indexOf(char) === -1) {
            return false;
        }
        //or 
        if (!sentence.toLowerCase().includes(char)) {
            return false;
        }
    }
    return true;
}