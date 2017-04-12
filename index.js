'use strict';

module.exports = function nullForBlank(str) {
  if(typeof str !== 'string') return str;

  str = str.trim();
  if(str === '') return null;
  return str;
}
