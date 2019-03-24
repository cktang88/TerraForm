const SPREADSHEET_ID = '1uS4Nr_Vl6ZljcKsmLRnDS-X9uYIlNvkS4lQAhcSXhIg';
const KEY = 'AIzaSyB5NPQXUnbJYcNBwZ0vHwbpkCv8Jp-EB5Y';

const BASE_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A1:D7?key=${KEY}`;

function fetchData() {
    return fetch(BASE_URL).then(resp => resp.json())
}

export default fetchData;