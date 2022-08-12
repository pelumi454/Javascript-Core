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