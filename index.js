'use strict';

const util = require('./lib/util');

module.exports = function (options) {
  util.normalizeOptions(options);
  return function (req, res, next) {
    req.uilang = util.getPreferableLang(req.headers['accept-language']) ||
                 util.getDefaultLang();
    next();
  };
};
