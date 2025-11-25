const axios = require('axios');

const baseURL = 'http://localhost:5000';

// Task 10: Get all books – Using async/await function
async function getBooksAsync() {
  try {
    const response = await axios.get(`${baseURL}/`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching books: ${error.message}`);
  }
}

// Task 11: Search by ISBN – Using Promises
function getBookByISBN(isbn) {
  return new Promise((resolve, reject) => {
    axios.get(`${baseURL}/isbn/${isbn}`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(new Error(`Error fetching book by ISBN: ${error.message}`));
      });
  });
}

// Task 12: Search by Author – Using async/await
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`${baseURL}/author/${author}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching books by author: ${error.message}`);
  }
}

// Task 13: Search by Title – Using async/await
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`${baseURL}/title/${title}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching books by title: ${error.message}`);
  }
}

module.exports = {
  getBooksAsync,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
};

