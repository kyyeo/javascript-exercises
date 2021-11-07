const getTheTitles = function(books) {
    return books.map(book => `${book.title}`);
    //map() method creates a new array by calling a function on every element of 'books'
};

// Do not edit below this line
module.exports = getTheTitles;
