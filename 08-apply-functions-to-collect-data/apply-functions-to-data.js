//ForEach method
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(
    function (num) {
        console.log(num);
    }
)
// example of forEach method 2
const books = [
    {
        title: 'Book1',
        authors: ['Terry Practchet', 'Neil Grayman'],
        rating: 4.5
    },
    {
        title: 'Book2',
        authors: ['Harriet Thubman'],
        rating: 4
    },
    {
        title: 'Book3',
        authors: ['Badbot Terri'],
        rating: 3.5
    }
]
books.forEach(
    function (book) {
        console.log(book.title.toUpperCase());
    }
)

// example of forEach method 3
const numbs = [1, 2, 3, 4, 5];
numbs.map(
    function (nu) {
        return {
            value: nu,
            isEven: nu % 2 === 0
        };
    }
)

//find method returns the first element that satisfies the provided testing function.
let movies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Godfather: Part II",
    "Mr and Mrs Smith",
]
movies.find(
    function (movie) {
        return movie.includes("Godfather");
    }
)
// or 
movies.find(movie => movie.includes("Godfather"))
// or 
const movie = movies.find(m => (
    m.indexOf("Godfather") === 0
))

// filter method returns a new array with all elements that pass the test implemented by the provided function.
