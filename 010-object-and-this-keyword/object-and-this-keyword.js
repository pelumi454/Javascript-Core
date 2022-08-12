// computed properties
const role = 'admin';
const person = 'John';

const team = {
    role: person,
}
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
    add: function (a,b) {
        return a + b;
    }
}
// math.add(1,2)

// the THIS keyword in methods
const peter = {
    first: 'John',
    last: 'Bellion',
    nickName: 'Jelly',
    fullName: function () {
        const {first, last} = this;
        return `${first} ${last}`;
    }
}

// annoymatic demo
const annoyer = {
    phrases: ['literally', 'cray cray', 'i can haz cheezburger', 'goodbye!', 'can leave', 'i am a robot'],
    pickPhrase: function () { 
        const {phrases} = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx];
    },
    start: function () {
        setInterval(() => {
            console.log(this.pickPhrase());
        }, 1000);
    }
}
// annoyer.pickPhrase();