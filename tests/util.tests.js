'use strict';

const test = require('tape');

const util = require('../lib/util');

test('util getPreferableLang Called_With_Not_String_Arg', t => {
  const notStringArg = [];

  const result = util.getPreferableLang(notStringArg);

  t.ok(result === '', 'Returns empty string');
  t.end();
});

test('util getPreferableLang Called_With_Correct_Arg', t => {
  const correctArg = 'ru;q=0.8,ru-RU,en;q=0.4';

  const result = util.getPreferableLang(correctArg);

  t.ok(result === 'ru-ru', 'Returns correct string');
  t.end();
});
