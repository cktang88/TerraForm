const SPREADSHEET_ID = 
//'1b3cMRIILqPjdNPxTmAhjKAw0oYgXV1D8Aro2lrTvdDQ'
'1uS4Nr_Vl6ZljcKsmLRnDS-X9uYIlNvkS4lQAhcSXhIg';
const KEY = 'AIzaSyB5NPQXUnbJYcNBwZ0vHwbpkCv8Jp-EB5Y';

const makeURL = range => `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}?key=${KEY}`;

const commentsURL = 'https://api.myjson.com/bins/95ny6';

const fetchData = () => {
    return fetch(makeURL('Sheet1')).then(resp => resp.json())
};

// fetch comments by key
const fetchComments = (key) => {
    console.log(key)
    return fetch(commentsURL)
        .then(data => data.json())
};

const postComment = (key, text, author) => {

    const newcomment = {
        timestamp: (new Date()).toLocaleString(),
        author,
        text
    };

    // fetch, and then update
    return fetchComments(key)
        .then(data => {
            if (!data[key])
                data[key] = [];
            data[key].push(newcomment);
            return data;
        })
        .then(data => putHelper(commentsURL, data))
        .then(data => console.log(data)) // JSON-string from `response.json()` call
        .catch(error => console.error(error));
};

const putHelper = (url, data) => {
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
};

module.exports = {
    fetchComments,
    fetchData,
    postComment
};