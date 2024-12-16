// Import the books array from books.js
const books = require('./books');

// Use map to create an array of book summaries
const bookSummaries = books.map(book => book.getSummary());

// Log the array of book summaries to the console
console.log(bookSummaries);