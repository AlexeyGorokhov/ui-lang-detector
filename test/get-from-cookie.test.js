'use strict';

const path = require('path');
const test = require('tape');
const moduleName = 'lib/get-from-cookie.js';
const rp = '../';

const COOKIE_NAME = 'some_name';
const COOKIE_VAL = 'some_value';

const self = require(path.join(rp, moduleName));

const getDefaultReqStub = () => ({
  cookies: {
    [COOKIE_NAME]: COOKIE_VAL
  }
});

test(`${moduleName} > No cookies object`, t => {
  const reqStub = getDefaultReqStub();
  delete reqStub.cookies;

  const result = self(COOKIE_NAME, reqStub);

  t.equal(result, null, 'Should return null');
  t.end();
});

test(`${moduleName} > No cookie with the given name`, t => {
  const reqStub = getDefaultReqStub();
  delete reqStub.cookies[COOKIE_NAME];

  const result = self(COOKIE_NAME, reqStub);

  t.equal(result, null, 'Should return null');
  t.end();
});

test(`${moduleName} > There is the cookie needed`, t => {
  const reqStub = getDefaultReqStub();

  const result = self(COOKIE_NAME, reqStub);

  t.equal(result, COOKIE_VAL, 'Should return value');
  t.end();
});
