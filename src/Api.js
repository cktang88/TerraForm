const SPREADSHEET_ID = '1uS4Nr_Vl6ZljcKsmLRnDS-X9uYIlNvkS4lQAhcSXhIg';
const KEY = 'AIzaSyB5NPQXUnbJYcNBwZ0vHwbpkCv8Jp-EB5Y';

const BASE_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A1:D7?key=${KEY}`;

function fetchData() {
    return fetch(BASE_URL).then(resp => resp.json())
}

function postData(data) {
    // POST to excel spreadsheet
    return postHelper(BASE_URL, data)
    .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
    .catch(error => console.error(error));
}

function postHelper(url = ``, data = {}) {
    // Default options are marked with *
      return fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
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

export {fetchData, postData};