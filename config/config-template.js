// config file
// copy into `config.js` in this directory

module.exports = {
    SPREADSHEET_ID: '<google spreadsheet id>',
    KEY: '<google api key>',
    COMMENTS_URL: 'https://api.myjson.com/bins/<bin hash>', // create one from http://myjson.com/ 
    USER_NAME_COLS: [1], // which column(s) are for user name (zero-indexed) - will be combined into a string
    LIST_DISPLAY_COLS: [0, 2] // which columns to display in list view
};