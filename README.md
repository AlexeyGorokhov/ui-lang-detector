# ui-lang-detector

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)

Express.js middleware to detect UI language to be used to serve content.

As soon as you support a website that serves multilingual UI, you want to send the user your content in the language the user prefer. If this is a first-time visitor, you may want to try to guess the most appropriate language from the `Accept-Language` header. Later on, you will have a chance to ask the user what language they prefer and store this information with the user account data, or send a special cookie to the user agent.

This middleware extends the Request object with `req.uilang` property following these steps:

* First, check if the special cookie has come with the request. If so, ok - use it.

* If no cookie detected, analyze the `Accept-Language` header and choose the most preferable language.

* If nothing helps, use the provided default value.

__All language codes are lowercased__ (e.g., `en`, `en-us` etc).

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
  cookieName: 'lang',
  defaultLang: 'en'
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

#### options.cookieName

Type: `String`

Optional. The cookie name being used to store UI language. If omitted, cookies are not processed.

#### options.defaultLang

Type: `String`

Default language code to use.
