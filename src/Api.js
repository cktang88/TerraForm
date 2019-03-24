const SPREADSHEET_ID = '1uS4Nr_Vl6ZljcKsmLRnDS-X9uYIlNvkS4lQAhcSXhIg';
const KEY = 'AIzaSyB5NPQXUnbJYcNBwZ0vHwbpkCv8Jp-EB5Y';

const makeURL = range => `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}?key=${KEY}`;

const commentsURL = 'https://api.myjson.com/bins/crimsongoogform';

function fetchData() {
    return fetch(makeURL('Sheet1')).then(resp => resp.json())
}

// fetch comments by key
const fetchComments = (key) => {
    return fetch(makeURL)
    .then(data => data.json())
    .then(items => items[key]);
}

const postComment = (key, author, text) => {

    const data = {timestamp: Date.now(), author, text};

    fetchComments(key)
    .then()

    // PUT to excel spreadsheet
    return putHelper(BASE_URL, data)
    .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
    .catch(error => console.error(error));
}

const putHelper = (url = commentsURL, data = {}) => {
    // Default options are marked with *
      return fetch(url, {
          method: "PUT", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
              "Content-Type": "application/json",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses JSON response into native Javascript objects 
  }

export {fetchData, postComment};