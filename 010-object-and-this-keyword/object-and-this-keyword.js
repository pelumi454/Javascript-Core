// computed properties
const role = "admin";
const person = "John";

const team = {
  role: person,
};
// role here is equal to John
// team = {
//     role: 'John'
// }
// to get the value of the role key we need to
team[role] = person;
// {admin = 'John'} or
// {
//     [role]: person
// }

// methods are functions that are attached to objects
const math = {
  add: function (a, b) {
    return a + b;
  },
};
// math.add(1,2)

// the THIS keyword in methods
const peter = {
  first: "John",
  last: "Bellion",
  nickName: "Jelly",
  fullName: function () {
    const { first, last } = this;
    return `${first} ${last}`;
  },
};

// annoymatic demo
const annoyer = {
  phrases: [
    "literally",
    "cray cray",
    "i can haz cheezburger",
    "goodbye!",
    "can leave",
    "i am a robot",
  ],
  pickPhrase: function () {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  start() {
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase());
    }, 1000);
  },
  stop() {
    clearInterval(this.timerId);
    console.log("cleared");
  },
};
// annoyer.pickPhrase();

// deck of cards
// function makeDeck() {
//   // const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
//   // const values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
//   // const deck = [];
//   // for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
//   //     for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
//   //         deck.push({
//   //             suit: suits[suitIdx],
//   //             value: values[valueIdx]
//   //         });
//   //     }
//   // }
//   // return deck;
//   //or
//   const suits = ["hearts", "diamonds", "spades", "clubs"];
//   const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
//   const deck = [];
//   for (let value of values.split(",")) {
//     for (let suit of suits) {
//       deck.push({
//         suit,
//         value,
//       });
//     }
//   }
//   return deck;
// }

// or
// const myDeck = makeDeck();
const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ["hearts", "diamonds", "spades", "clubs"],
  values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
  initializeDeck() {
    const { suits, values, deck } = this;
    for (let value of values.split(",")) {
      for (let suit of suits) {
        deck.push({
          suit,
          value,
        });
      }
    }
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMultiple(numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  },
  shuffle() {
      const { deck } = this;
      // loop over the deck backwards
      for (let i = deck.length - 1; i > 0; i--) {
        // pick a random index before current element
          let j = Math.floor(Math.random() * (i + 1));
          // swap 
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  },
};
