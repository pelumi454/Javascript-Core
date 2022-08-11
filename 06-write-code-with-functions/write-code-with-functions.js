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

// exercise 4
function getCard() {
 const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    // const idx = Math.floor(Math.random() * values.length);
//    const value = values[idx];
    const value = pickItem(values);
    const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    // const idx2 = Math.floor(Math.random() * suits.length);
    // const suit = suits[idx2];
    const suit = pickItem(suits); 
    return {
        value: value || pickItem(values),
        suit: suit || pickItem(suits)
    }
}
// or you can write a function that returns the index of items in an array and call the function
function pickItem(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}