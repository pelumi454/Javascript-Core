alert("Thy kingdom come to the aid of the JavaScript");

//  String Template Literals
let fhru = "FHRU";
const ageBracket = `${fhru}`;
console.log(ageBracket);

let items = cucumbers;
let pricePerCucumber = 0.5;
let quantity = 5;
`You bought ${quantity} {items} for $${pricePerCucumber * quantity}`;

//Math Object
Math.floor(3.033333333333333); //3
//How to generate numbers between 1 and 10
Math.random() * 10;
let randomNumbers = Math.floor(Math.random() * 10 + 1);
console.log(randomNumbers);

// PARSE INT (to turn a string to a number)
parseInt("45")
