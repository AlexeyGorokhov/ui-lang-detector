'use strict';

const http = require('http');
const express = require('express');
const logger = require('morgan');
const uiLangDetector = require('../index.js');

const options = {
  defaultLang: 'en-us'
};

const app = express();

app.use(logger('dev'));
app.use(uiLangDetector(options));
app.set('port', 7000);

app.get('/', function (req, res, next) {
  res.status(200).send(req.uilang);
});

const server = http.createServer(app);
server.listen(7000);
