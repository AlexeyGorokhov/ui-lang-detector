'use strict';

const path = require('path');
const test = require('tape');
const proxyquire = require('proxyquire').noPreserveCache().noCallThru();

const moduleName = 'lib/normalize-options.js';
const rp = '../';

const getDefaultOptionsStub = () => ({
  cookieName: 'some_string',
  defaultLang: 'en'
});

const getSelf = () => proxyquire(path.join(rp, moduleName), {});

test(`${moduleName} > Options object is not provided`, t => {
  const self = getSelf();

  const result = self();

  t.equal(typeof result, 'object', 'Should return object');
  t.equal('cookieName' in result, false, 'Should not create "cookieName" property');
  t.equal('defaultLang' in result, true, 'Should create "defaultLang" property');
  t.equal(result.defaultLang, '', 'Should set default language to empty string');
  t.end();
});

test(`${moduleName} > cookieName option is not present`, t => {
  const self = getSelf();
  const optionsStub = getDefaultOptionsStub();
  delete optionsStub.cookieName;

  const result = self(optionsStub);

  t.equal('cookieName' in result, false, 'Should not create "cookieName" property');
  t.end();
});

test(`${moduleName} > cookieName option is not a string`, t => {
  const self = getSelf();
  const optionsStub = getDefaultOptionsStub();
  optionsStub.cookieName = ['not_a_string'];

  const result = self(optionsStub);

  t.equal('cookieName' in result, false, 'Should not include "cookieName" property');
  t.end();
});

test(`${moduleName} > cookieName option is present`, t => {
  const self = getSelf();
  const optionsStub = getDefaultOptionsStub();

  const result = self(optionsStub);

  t.equal(result.cookieName, optionsStub.cookieName, 'Should not change "cookieName" property');
  t.end();
});

test(`${moduleName} > defaultLang option is not present`, t => {
  const self = getSelf();
  const optionsStub = getDefaultOptionsStub();
  delete optionsStub.defaultLang;

  const result = self(optionsStub);

  t.equal(result.defaultLang, '', 'Should set "defaultLang" to an empty string');
  t.end();
});

test(`${moduleName} > defaultLang option is not a string`, t => {
  const self = getSelf();
  const optionsStub = getDefaultOptionsStub();
  optionsStub.defaultLang = ['not_a_string'];

  const result = self(optionsStub);

  t.equal(result.defaultLang, '', 'Should set "defaultLang" to an empty string');
  t.end();
});

test(`${moduleName} > defaultLang option is a string`, t => {
  const self = getSelf();
  const optionsStub = getDefaultOptionsStub();

  const result = self(optionsStub);

  t.equal(result.defaultLang, optionsStub.defaultLang, 'Should not change "defaultLang"');
  t.end();
});
