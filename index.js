'use strict';

const normalizeOptions = require('./lib/normalize-options');
const getFromCookie = require('./lib/get-from-cookie');
const getFromHeader = require('./lib/get-from-header');

module.exports = function (options) {
  const normOptions = normalizeOptions(options);

  return function (req, res, next) {
    req.uilang = '';

    if (normOptions.cookieName) {
      const result = getFromCookie(normOptions.cookieName, req);
      if (result) {
        req.uilang = result;
        next();
        return;
      }
    }

    const result = getFromHeader(req);
    if (result) {
      req.uilang = result;
      next();
      return;
    }

    req.uilang = normOptions.defaultLang;
    next();
  };
};
