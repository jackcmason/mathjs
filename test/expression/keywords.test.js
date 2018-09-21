// test keywords
const assert = require('assert')
const keywords = require('../../src/expression/keywords')

describe('keywords', function () {
  it('should return a map with reserved keywords', function () {
    assert.deepStrictEqual(Object.keys(keywords).sort(), ['end'].sort())
  })
})
