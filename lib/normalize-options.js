'use strict';

/**
 * Normalize provided options
 *
 * @param {Object} options - User provided options
 * @return {Object} - Normalized options
 * @public
 */
module.exports = function (options) {
  const defaultOptions = {
    defaultLang: ''
  };

  if (!options) {
    return defaultOptions;
  }

  if (typeof options.cookieName === 'string') {
    defaultOptions.cookieName = options.cookieName;
  }

  if (typeof options.defaultLang === 'string') {
    defaultOptions.defaultLang = options.defaultLang;
  }

  return defaultOptions;
};
