# TerraForm

A better viewer for Google Forms responses.
Made during CrimsonHacks 2019.

Usage
---

1. Copy `/config/config-template.js` into `/config/config.js` and fill in the necessary config variables. You can get Google API keys [here](https://developers.google.com/sheets/api/guides/authorizing#APIKey).

2. Install dependencies and run!
```bash
npm i # install deps
npm start # run
```

Config
---
To adapt the view to your Google Spreadsheet, a configuration file (`config.js`) needs to be created in the `/config` folder. An example is shown below:

```js
module.exports = {
    SPREADSHEET_ID: '<google spreadsheet id>',
    KEY: '<google api key>',
    COMMENTS_URL: 'https://api.myjson.com/bins/<bin hash>', // create one from http://myjson.com/ 
    USER_NAME_COLS: [1], // which column(s) are for user name (zero-indexed) - will be combined into a string
    LIST_DISPLAY_COLS: [0, 2] // which columns to display in list view
};
```

Built with:
---

- React (with [hooks](https://reactjs.org/docs/hooks-intro.html)!)
- React Router
- CSS Grid + Flexbox
- Google Sheets API
- https://myjson.com/api
- [react-google-login](https://github.com/anthonyjgrove/react-google-login) for Github SSO
