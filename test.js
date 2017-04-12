'use strict';

const assert = require('assert');
const nullForBlank = require('.');

function eq(a, b) {
  if(arguments.length === 1) {
    assert.equal(nullForBlank(a), a);
  } else {
    assert.equal(nullForBlank(a), b);
  }
}

it('should return something if it is not a string', () => {
  eq(10);
  eq({})
  eq(function() {})
  eq(null)
});

it('string should be trimmed', () => {
  eq(' a ', 'a');
});

it('string with spaces should be null', () => {
  eq('  ', null);
});
