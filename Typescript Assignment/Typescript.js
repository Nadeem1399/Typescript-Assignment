
// Define the Genre enum
var Genre;
(function (Genre) {
    Genre[Genre["Non-Fiction"] = 0] = "Non-Fiction";
    Genre[Genre["Math"] = 1] = "Math";
    Genre[Genre["Technology"] = 2] = "Technology";
    Genre[Genre["English Studies"] = 3] = "English Studies";
})(Genre || (Genre = {}));
// Create a Type Guard to check if a type is Book
function isBook(arg) {
    return arg.title !== undefined;
}
// The Generic getDetails function
function getDetails(item) {
    if (isBook(item)) { // Type Guard check for 'Book'
        // Type assertion that 'item' is of type 'Book'
        var book = item;
        return "Book Title: ".concat(book.title, ", Author: ").concat(book.author, ", Genre: ").concat(Genre[book.genre], ", Year: ").concat(book.year, ", Available: ").concat(book.availability ? 'Yes' : 'No');
    }
    else {
        // Type assertion that 'item' is of type 'BookTuple'
        var tuple = item;
        return "Book ID: ".concat(tuple[0], ", Quantity: ").concat(tuple[1]);
    }
}
// Creating a book using the 'Book' interface
var book1 = {
    title: "Learning TypeScript",
    author: "Nadeem Syed",
    id: 1,
    availability: true,
    year: 2024,
    genre: Genre.Technology,
};
// Creating a book tuple using the 'BookTuple' type
var bookTuple = [1, 10]; // [book id, quantity]
// Test the getDetails function
console.log(getDetails(book1)); // Pass 'Book' object
console.log(getDetails(bookTuple)); // Pass 'BookTuple'