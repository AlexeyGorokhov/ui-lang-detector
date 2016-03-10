'use strict';

const test = require('tape');
const proxyquire = require('proxyquire');
const sinon = require('sinon');

const utilStub = {
  normalizeOptions () {},
  getPreferableLang (value) {
    return value || false;
  },
  getDefaultLang () {}
};

const index = proxyquire('../index',
  {
    './lib/util': utilStub
  }
);

test('index main No_header', t => {
  const getDefaultLangSpy = sinon.spy(utilStub, 'getDefaultLang');
  const reqStub = {
    headers: {}
  };
  const indexStub = index();

  indexStub(reqStub, {}, function () {});

  t.ok(getDefaultLangSpy.called, 'Call for default value');
  utilStub.getDefaultLang.restore();
  t.end();
});

test('index main There_is_header', t => {
  const getDefaultLangSpy = sinon.spy(utilStub, 'getDefaultLang');
  const reqStub = {
    headers: {
      'accept-language': 'some_value'
    }
  };
  const indexStub = index();

  indexStub(reqStub, {}, function () {});

  t.notOk(getDefaultLangSpy.called, 'No call for defaultvalue');
  utilStub.getDefaultLang.restore();
  t.end();
});
