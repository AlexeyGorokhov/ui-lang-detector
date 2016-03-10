# ui-lang-detector

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)

Express.js middleware to detect the UI language that a User Agent prefers analyzing the Accept-Language HTTP header.

As soon as you support a website that serves multilingual UI, you often may want to send a first-time visitor the content in the language most appropriate to them. Later on, you will have a chance to ask the user what language they prefer and store this information with the user account data, or send a special cookie to the user agent. But the first time you meet your user, all what you have is the `Accept-Language` header in their HTTP request.

This middleware analyzes the `Accept-Language` header and stores the most preferable language's code in `req.uilang`. __All language codes are in lowercase.__

## Installation

```bash
$ npm install ui-lang-detector --save
```

## Usage example

```javascript
const app = require('express')();
const uiLangDetector = require('ui-lang-detector');

// Set up options
const options = {
  defaultLang: "en"
};

// Mount the middleware
app.use(uiLangDetector(options));

// Use on routes
app.get('/some_path', function (req, res) {
  const uiLanguage = req.uilang;
  // etc
});
```

## API

### Configuration `options`

Type: `Object`

#### options.defaultLang

Type: `String`

Default language code to use if no information is available in a request.
