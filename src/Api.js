const SPREADSHEET_ID = '1uS4Nr_Vl6ZljcKsmLRnDS-X9uYIlNvkS4lQAhcSXhIg';
const KEY = 'AIzaSyB5NPQXUnbJYcNBwZ0vHwbpkCv8Jp-EB5Y';

function build_request() {
    let BASE_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A1:D7?key=${KEY}`;
    return BASE_URL; 
}

function fetchData () {
    fetch(build_request()).then(resp => {
        return resp.json();
    }).then( data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
}

export default fetchData;