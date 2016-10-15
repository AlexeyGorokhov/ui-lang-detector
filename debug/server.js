'use strict';

const http = require('http');
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const uiLangDetector = require('../index.js');

const options = {
  cookieName: 'lang',
  defaultLang: 'en-us'
};

const app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(uiLangDetector(options));
app.set('port', 7000);

app.get('/', function (req, res, next) {
  res.status(200).send(req.uilang);
});

const server = http.createServer(app);
server.listen(7000);
