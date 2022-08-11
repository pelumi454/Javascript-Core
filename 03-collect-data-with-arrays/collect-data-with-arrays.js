let shoppingList = ["milk", "eggs", "bread", "apples"];
shoppingList[2] = "butter";
console.log(shoppingList);
// to add to the end of the array 
// shoppingList[shoppingList.length] = "cheese";
// or use Push or pop
shoppingList.push("cheese");
shoppingList.pop();
console.log(shoppingList);

// splice method
// shoppingList.splice(0, 3);
// console.log(shoppingList);

//slice method
let animals = ["cat", "dog", "fish", "bird", "cow"];
let newAnimals = animals.slice(1, 3);
console.log(newAnimals);