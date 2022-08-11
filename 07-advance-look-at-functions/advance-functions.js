// write a function to double the items of an array
function doubleItem(arr) {
    let result = [];
    for (let num of arr) {
       let double = num * 2;
        result.push(double);
    }
}
// console.log(doubleItem([1, 2, 3, 4, 5]));

//passing function as arguments
function rage() {
     console.log('I am angry');
}
 
function repeatNthTime(action, num) {
    for (let i = 0; i < num; i++){
        action();
    }
}
repeatNthTime(rage, 5);

//write a function to check numbers between 0 and 18
function makeBetweenFunc(x, y) {
    return function(num) {
        num <=x && num >= y;
    }
}
makeBetweenFunc(0, 18)
const isChild = makeBetweenFunc(0, 18);
console.log(isChild(18));

// callback functions
setTimeout(
    function() {
        console.log('Hello');
    }, 2000
)

