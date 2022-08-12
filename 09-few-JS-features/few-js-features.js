// destructure an array
const raceResults = [
    'Eliud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu'
];

const [first, , , fourth] = raceResults;
// skip the index using the comma

// destructure an object
const runner = {
    first: 'Eliud', 
    last: 'Kipchoge',
    country: 'Kenya',
    title: 'Elder of the Order of the Golden Heart of Kenya'
}
const {first: f, last: l} = runner;