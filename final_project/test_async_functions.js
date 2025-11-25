// Test file demonstrating the async/Promise-based functions for Tasks 10-13
// Make sure the server is running before executing these tests

const {
  getBooksAsync,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
} = require('./router/books_async.js');

// Task 10: Get all books using async/await
async function testGetAllBooks() {
  try {
    console.log('Task 10: Getting all books (async/await)...');
    const books = await getBooksAsync();
    console.log('All books:', JSON.stringify(books, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Task 11: Search by ISBN using Promises
function testGetBookByISBN() {
  console.log('Task 11: Getting book by ISBN (Promise)...');
  getBookByISBN('1')
    .then(book => {
      console.log('Book by ISBN:', JSON.stringify(book, null, 2));
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
}

// Task 12: Search by Author using async/await
async function testGetBooksByAuthor() {
  try {
    console.log('Task 12: Getting books by author (async/await)...');
    const books = await getBooksByAuthor('Jane Austen');
    console.log('Books by author:', JSON.stringify(books, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Task 13: Search by Title using async/await
async function testGetBooksByTitle() {
  try {
    console.log('Task 13: Getting books by title (async/await)...');
    const books = await getBooksByTitle('Pride');
    console.log('Books by title:', JSON.stringify(books, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run all tests
async function runAllTests() {
  console.log('=== Testing Async Functions ===\n');
  
  await testGetAllBooks();
  console.log('\n');
  
  testGetBookByISBN();
  console.log('\n');
  
  await testGetBooksByAuthor();
  console.log('\n');
  
  await testGetBooksByTitle();
}

// Uncomment to run tests (make sure server is running first)
runAllTests();

module.exports = {
  testGetAllBooks,
  testGetBookByISBN,
  testGetBooksByAuthor,
  testGetBooksByTitle,
  runAllTests
};

