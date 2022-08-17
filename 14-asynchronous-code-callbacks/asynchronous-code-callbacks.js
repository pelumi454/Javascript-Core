//example
const repeat = (str, times) => {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
};

const scream = (str) => {
  return str.toUpperCase() + "!!!";
};

const getRantText = (phrase) => {
  let text = scream(phrase);
  let rant = repeat(text, 8);
  return rant;
};

const makeRant = (phrase, el) => {
  const h1 = document.createElement("h1");
  h1.innerText = getRantText(phrase);
  el.appendChild(h1);
};
console.log("HELLO!");

makeRant("I hate mayonnaise", document.body);
// makeRant('if you have to cough, please cover your mouth', document.body);

//
btn = document.querySelector("button");
const moveX = (element, amount, delay) => {
    setTimeout(() => {
      element.style.transform = `translateX(${amount}px)`;
  }, delay);
};
moveX(btn, 100, 1000);


// promises
const willGetYouADog = new Promise((resolve, reject) => { 
    const rand = Math.random();
    if (rand > 0.5) {
        resolve();
    }
    else { 
        reject();
    }
});
willGetYouADog.then(() => {
    console.log("You got a dog!");
});
willGetYouADog.catch(() => { 
    console.log("You didn't get a dog.");
});


// another example
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Bilbo" },
          { id: 5, username: "Esmerelda" },
        ],
        "/about": "This is the about page!",
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data }); //resolve with a value!
      } else {
        reject({ status: 404 }); //reject with a value!
      }
    }, 1000);
  });
};

fakeRequest("/users")
  .then((res) => {
    console.log("Status Code", res.status);
    console.log("Data", res.data);
    console.log("REQUEST WORKED!");
  })
  .catch((res) => {
    console.log(res.status);
    console.log("REQUEST FAILED");
  });

fakeRequest("/dogs")
  .then((res) => {
    console.log("Status Code", res.status);
    console.log("Data", res.data);
    console.log("REQUEST WORKED!");
  })
  .catch((res) => {
    console.log(res.status);
    console.log("REQUEST FAILED");
  });
