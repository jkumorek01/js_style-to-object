'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const elements = sourceString.split(';');
  const result = {};

  elements.forEach((x) => {
    if (x.trim() === '') {
      return;
    }

    const parts = x.trim().split(':');
    const left = parts[0].trim();
    const right = parts[1].trim();

    result[left] = right;
  });

  return result;
}

module.exports = convertToObject;
