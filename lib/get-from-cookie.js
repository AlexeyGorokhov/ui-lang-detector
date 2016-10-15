'use strict';

/**
 * Get language code from cookie
 *
 * @param {String} cookieName
 * @param {Request} req
 * @return {String | null}
 */
module.exports = function (cookieName, req) {
  if (!req.cookies || !req.cookies[cookieName]) return null;
  return req.cookies[cookieName];
};
