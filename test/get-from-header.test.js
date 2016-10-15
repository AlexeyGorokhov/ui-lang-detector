'use strict';

const path = require('path');
const test = require('tape');
const moduleName = 'lib/get-from-header.js';
const rp = '../';

const self = require(path.join(rp, moduleName));

test(`${moduleName} > No Accept-Language header`, t => {
  const result = self({});

  t.equal(result, null, 'Should return null');
  t.end();
});

test(`${moduleName} > Header with single value`, t => {
  const result = self({
    headers: {
      'accept-language': 'ru'
    }
  });

  t.equal(result, 'ru', 'Should choose correct value');
  t.end();
});

test(`${moduleName} > Header with multiple values`, t => {
  const result = self({
    headers: {
      'accept-language': 'ru;q=0.8,ru-RU,en;q=0.4'
    }
  });

  t.equal(result, 'ru-ru', 'Should choose correct value');
  t.end();
});
