'use strict';

module.exports = {
  normalizeOptions: normalizeOptions,
  getPreferableLang: getPreferableLang,
  getDefaultLang: getDefaultLang
};

const conf = {
  defaultLang: ''
};

/**
 * Normalize the options Object
 *
 * @param {Object} options
 */
function normalizeOptions (options) {
  if (!options) return;
  const def = options.defaultLang || '';
  conf.defaultLang = def.toLowerCase();
}

/**
 * Returns the default language code
 *
 * @return {String}
 */
function getDefaultLang () {
  return conf.defaultLang;
}

/**
 * Get preferable UI language code from Accept-Language header value
 *
 * @param {String} val
 * @return {String}
 */
function getPreferableLang (val) {
  if (!val || typeof val !== 'string') return '';

  const value = val.toLowerCase();
  const langs = value.split(',');
  let prefLang = {
    name: '',
    weight: 0
  };

  langs.forEach(chunck => {
    const a = chunck.split(';');
    const name = a[0].trim();
    let weight = 1;
    if (a[1]) {
      const b = a[1].split('=');
      weight = parseFloat(b[1]);
    }
    if (weight > prefLang.weight) {
      prefLang.name = name;
      prefLang.weight = weight;
    }
  });

  return prefLang.name;
}
