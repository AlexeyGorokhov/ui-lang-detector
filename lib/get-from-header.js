'use strict';

/**
 * Get preferable UI language code from Accept-Language header
 *
 * @param {Request} req
 * @return {String | null}
 * @public
 */
module.exports = function (req) {
  if (!req.headers) return null;

  const header = req.headers['accept-language'];

  if (!header) return null;

  const value = header.toLowerCase();
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
};
